/**
 * Client library for Codegnan Email Service API
 * Endpoints: POST /send, POST /send/bulk, GET /status, GET /health
 */

export interface EmailAttachment {
  filename: string;
  content_base64: string;
  content_type?: string;
}

export interface SendEmailPayload {
  to: string;
  subject: string;
  body_text?: string;
  body_html?: string;
  reply_to?: string;
  id?: string;
  attachments?: EmailAttachment[];
}

export interface SendEmailResponse {
  queued: boolean;
  message_id: string;
  job_id?: string;
}

export interface BulkEmailResponse {
  queued: number;
  message_ids: string[];
}

export interface EmailStatusRecord {
  message_id: string;
  to: string;
  subject: string;
  status: 'sent' | 'delivery' | 'bounce' | 'complaint' | string;
  sent_at?: string;
  updated_at?: string;
  job_id?: string;
  event_at?: string;
  delivered_at?: string;
  bounce_type?: string | null;
  complaint_feedback_type?: string | null;
  opened_at?: string | null;
  clicked_at?: string | null;
}

export interface EmailStatusResponse {
  records: EmailStatusRecord[];
}

export class EmailServiceError extends Error {
  status?: number;
  detail?: any;

  constructor(message: string, status?: number, detail?: any) {
    super(message);
    this.name = 'EmailServiceError';
    this.status = status;
    this.detail = detail;
  }
}

/**
 * Resolves base URL and endpoint URLs from environment configuration
 */
function getEmailConfig() {
  const rawUrl = process.env.EMAIL_SERVICE_URL || 'https://email-service.codegnan.com/send';
  const apiKey = process.env.EMAIL_SERVICE_API_KEY;

  // Extract base URL if rawUrl contains /send or /send/bulk
  let baseUrl = rawUrl.replace(/\/send(\/bulk)?\/?$/, '');
  if (!baseUrl) {
    baseUrl = 'https://email-service.codegnan.com';
  }

  const sendUrl = rawUrl.endsWith('/send') ? rawUrl : `${baseUrl}/send`;
  const bulkSendUrl =
    process.env.BULK_EMAIL_SERVICE_URL || (sendUrl.endsWith('/send') ? `${sendUrl}/bulk` : `${baseUrl}/send/bulk`);
  const statusUrl = `${baseUrl}/status`;
  const healthUrl = `${baseUrl}/health`;

  return {
    apiKey,
    baseUrl,
    sendUrl,
    bulkSendUrl,
    statusUrl,
    healthUrl,
  };
}

/**
 * Helper to execute authorized requests with error parsing
 */
async function fetchWithAuth(url: string, options: RequestInit = {}): Promise<Response> {
  const { apiKey } = getEmailConfig();

  if (!apiKey) {
    throw new EmailServiceError('EMAIL_SERVICE_API_KEY is not configured in environment', 503);
  }

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'X-API-Key': apiKey,
    ...(options.headers as Record<string, string>),
  };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000); // 15s timeout

  try {
    const response = await fetch(url, {
      ...options,
      headers,
      signal: controller.signal,
    });
    return response;
  } catch (err: any) {
    if (err?.name === 'AbortError') {
      throw new EmailServiceError('Email service request timed out after 15s', 504);
    }
    throw new EmailServiceError(`Failed to connect to email service: ${err?.message || err}`, 502);
  } finally {
    clearTimeout(timeoutId);
  }
}

/**
 * Enqueue a single email to the Email Service
 */
export async function sendEmail(payload: SendEmailPayload): Promise<SendEmailResponse> {
  const { sendUrl } = getEmailConfig();

  if (!payload.to) {
    throw new EmailServiceError('Recipient email ("to") is required', 400);
  }
  if (!payload.subject) {
    throw new EmailServiceError('Subject line ("subject") is required', 400);
  }
  if (!payload.body_text && !payload.body_html) {
    throw new EmailServiceError('At least one of body_text or body_html is required and must be non-empty', 400);
  }

  // Generate job_id if not provided
  const jobId = payload.id || `lead-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

  const bodyPayload: SendEmailPayload = {
    to: payload.to,
    subject: payload.subject,
    body_text: payload.body_text,
    body_html: payload.body_html,
    reply_to: payload.reply_to,
    id: jobId,
    attachments: payload.attachments && payload.attachments.length > 0 ? payload.attachments : undefined,
  };

  const response = await fetchWithAuth(sendUrl, {
    method: 'POST',
    body: JSON.stringify(bodyPayload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const errorMsg =
      typeof data?.detail === 'string'
        ? data.detail
        : Array.isArray(data?.detail)
        ? data.detail.map((d: any) => d.msg || JSON.stringify(d)).join(', ')
        : 'Failed to enqueue email';
    throw new EmailServiceError(errorMsg, response.status, data);
  }

  return {
    queued: Boolean(data.queued),
    message_id: data.message_id || '',
    job_id: jobId,
  };
}

/**
 * Enqueue multiple emails in bulk
 */
export async function sendBulkEmails(emails: SendEmailPayload[]): Promise<BulkEmailResponse> {
  const { bulkSendUrl } = getEmailConfig();

  if (!emails || emails.length === 0) {
    throw new EmailServiceError('At least one email is required in the bulk list', 400);
  }

  // Ensure each email has an id
  const formattedEmails = emails.map((email, idx) => ({
    ...email,
    id: email.id || `bulk-${Date.now()}-${idx}-${Math.random().toString(36).substring(2, 9)}`,
  }));

  const response = await fetchWithAuth(bulkSendUrl, {
    method: 'POST',
    body: JSON.stringify({ emails: formattedEmails }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const errorMsg =
      typeof data?.detail === 'string'
        ? data.detail
        : Array.isArray(data?.detail)
        ? data.detail.map((d: any) => d.msg || JSON.stringify(d)).join(', ')
        : 'Failed to enqueue bulk emails';
    throw new EmailServiceError(errorMsg, response.status, data);
  }

  return {
    queued: data.queued || 0,
    message_ids: data.message_ids || [],
  };
}

/**
 * Retrieve delivery status for one or more job_ids or message_ids
 */
export async function getEmailStatus(options: {
  job_id?: string | string[];
  message_id?: string | string[];
}): Promise<EmailStatusResponse> {
  const { statusUrl } = getEmailConfig();

  const url = new URL(statusUrl);

  if (options.job_id) {
    const jobIds = Array.isArray(options.job_id) ? options.job_id : [options.job_id];
    for (const jid of jobIds) {
      url.searchParams.append('job_id', jid);
    }
  }

  if (options.message_id) {
    const msgIds = Array.isArray(options.message_id) ? options.message_id : [options.message_id];
    for (const mid of msgIds) {
      url.searchParams.append('message_id', mid);
    }
  }

  if (!options.job_id && !options.message_id) {
    throw new EmailServiceError('Provide at least one of: job_id or message_id', 400);
  }

  const response = await fetchWithAuth(url.toString(), {
    method: 'GET',
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const errorMsg = typeof data?.detail === 'string' ? data.detail : 'Failed to retrieve email status';
    throw new EmailServiceError(errorMsg, response.status, data);
  }

  return {
    records: data.records || [],
  };
}

/**
 * Public health check endpoint
 */
export async function checkEmailServiceHealth(): Promise<{ status: string; ok: boolean }> {
  const { healthUrl } = getEmailConfig();

  try {
    const response = await fetch(healthUrl, { method: 'GET' });
    const data = await response.json().catch(() => ({}));
    return {
      status: data.status || 'Unknown status',
      ok: response.ok,
    };
  } catch (err: any) {
    return {
      status: err?.message || 'Unreachable',
      ok: false,
    };
  }
}
