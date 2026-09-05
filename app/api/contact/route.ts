import { NextResponse } from 'next/server';
import { sendEmail, EmailServiceError } from '@/lib/email-service';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      collegeName,
      city,
      contactPerson,
      designation,
      phone,
      email,
      expectedStudentCount,
      programInterest,
      preferredDuration,
      preferredDate,
      notes,
    } = body;

    // Validate mandatory fields
    if (
      !collegeName ||
      !city ||
      !contactPerson ||
      !designation ||
      !phone ||
      !email ||
      !expectedStudentCount ||
      !programInterest
    ) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const recipientEmail =
      process.env.LEAD_NOTIFICATION_EMAIL ||
      process.env.CAMPUS_ENQUIRY_TO_EMAIL ||
      process.env.CONTACT_EMAIL ||
      process.env.SMTP_TO ||
      'labs@codegnan.com';

    const jobId = `lead-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;
    const subject = `New Campus Enquiry: ${collegeName} (${programInterest})`;

    const appUrl = (process.env.NEXT_PUBLIC_APP_URL || 'https://labs.codegnan.com').replace(/\/$/, '');
    const logoUrl = process.env.APP_LOGO_URL || `${appUrl}/codegnan_lab.png`;
    const websiteUrl = appUrl;

    const plainTextBody = `
New Campus Enquiry Lead Received!
==================================
Institution: ${collegeName}
Location: ${city}
Contact Person: ${contactPerson} (${designation})
Email: ${email}
Phone: ${phone}
Program Interest: ${programInterest}
Expected Students: ${expectedStudentCount}
${preferredDuration ? `Preferred Duration: ${preferredDuration}\n` : ''}${
      preferredDate ? `Preferred Date: ${preferredDate}\n` : ''
    }Additional Requirements: ${notes || 'None provided'}

Tracking Job ID: ${jobId}
Submitted At: ${new Date().toISOString()}
Reply to: ${email}
    `.trim();

    const htmlBody = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Campus Enquiry</title>
  <style>
    @media only screen and (max-width: 600px) {
      .outer-table { padding: 8px !important; }
      .container-card { width: 100% !important; border-radius: 12px !important; }
      .content-cell { padding: 20px 16px !important; }
      .header-cell { padding: 18px 16px !important; }
      .btn-cta { display: block !important; width: 100% !important; box-sizing: border-box !important; text-align: center !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f6fb; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #1e293b;">
  <table class="outer-table" role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f4f6fb; padding: 28px 12px;">
    <tr>
      <td align="center">
        <!-- Main Email Container Card -->
        <table class="container-card" role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 620px; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 10px 30px -5px rgba(15, 23, 42, 0.08);">
          
          <!-- Top Brand Header with Official Codegnan Lab Logo -->
          <tr>
            <td class="header-cell" style="padding: 24px 32px 20px 32px; background-color: #ffffff; border-bottom: 1px solid #f1f5f9;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="vertical-align: middle;">
                    <a href="${websiteUrl}" target="_blank" style="text-decoration: none; display: inline-block;">
                      <img 
                        src="${logoUrl}" 
                        alt="Codegnan Lab" 
                        width="165" 
                        height="56" 
                        style="display: block; width: 165px; max-width: 180px; height: auto; border: 0; outline: none; text-decoration: none;" 
                      />
                    </a>
                  </td>
                  <td align="right" style="vertical-align: middle;">
                    <span style="display: inline-block; font-size: 11px; font-weight: 800; color: #304ffe; background-color: #eff3ff; border: 1px solid #c7d2fe; padding: 6px 14px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.8px;">
                      Campus Lead
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Subtle Gradient Accent Divider -->
          <tr>
            <td style="height: 3px; background: linear-gradient(90deg, #1e3a8a 0%, #304ffe 50%, #7243f1 100%); font-size: 0; line-height: 0;">&nbsp;</td>
          </tr>

          <!-- Lead Overview Hero Banner -->
          <tr>
            <td style="padding: 28px 32px 22px 32px; background: linear-gradient(180deg, #f8faff 0%, #ffffff 100%); border-bottom: 1px solid #f1f5f9;">
              <div style="font-size: 11px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; color: #6366f1; margin-bottom: 6px;">
                ✦ New Inbound Campus Enquiry
              </div>
              <h1 style="margin: 0; font-size: 22px; font-weight: 800; color: #0d1033; letter-spacing: -0.5px; line-height: 1.3;">
                ${collegeName}
              </h1>
              <p style="margin: 6px 0 0 0; font-size: 14px; color: #64748b; line-height: 1.5;">
                From <strong style="color: #0f172a;">${contactPerson}</strong> (${designation}) &bull; 📍 ${city}
              </p>
            </td>
          </tr>

          <!-- Enquiry Details Section -->
          <tr>
            <td class="content-cell" style="padding: 28px 32px;">
              <div style="font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.8px; color: #475569; margin-bottom: 14px;">
                Enquiry Details
              </div>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="font-size: 14px; line-height: 1.6; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; width: 34%; vertical-align: top; color: #64748b; font-weight: 600;">
                    Institution
                  </td>
                  <td style="padding: 12px 0 12px 12px; border-bottom: 1px solid #f1f5f9; width: 66%; vertical-align: top; color: #0f172a; font-weight: 700;">
                    ${collegeName}
                  </td>
                </tr>

                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; vertical-align: top; color: #64748b; font-weight: 600;">
                    City / Location
                  </td>
                  <td style="padding: 12px 0 12px 12px; border-bottom: 1px solid #f1f5f9; vertical-align: top; color: #0f172a; font-weight: 600;">
                    ${city}
                  </td>
                </tr>

                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; vertical-align: top; color: #64748b; font-weight: 600;">
                    Contact Person
                  </td>
                  <td style="padding: 12px 0 12px 12px; border-bottom: 1px solid #f1f5f9; vertical-align: top; color: #0f172a;">
                    <span style="font-weight: 700;">${contactPerson}</span>
                    <span style="color: #64748b; font-size: 13px;"> (${designation})</span>
                  </td>
                </tr>

                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; vertical-align: top; color: #64748b; font-weight: 600;">
                    Official Email
                  </td>
                  <td style="padding: 12px 0 12px 12px; border-bottom: 1px solid #f1f5f9; vertical-align: top;">
                    <a href="mailto:${email}" style="color: #304ffe; text-decoration: none; font-weight: 600;">${email}</a>
                  </td>
                </tr>

                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; vertical-align: top; color: #64748b; font-weight: 600;">
                    Phone Number
                  </td>
                  <td style="padding: 12px 0 12px 12px; border-bottom: 1px solid #f1f5f9; vertical-align: top;">
                    <a href="tel:${phone}" style="color: #304ffe; text-decoration: none; font-weight: 600;">${phone}</a>
                  </td>
                </tr>

                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; vertical-align: middle; color: #64748b; font-weight: 600;">
                    Program Format
                  </td>
                  <td style="padding: 12px 0 12px 12px; border-bottom: 1px solid #f1f5f9; vertical-align: middle;">
                    <span style="display: inline-block; padding: 4px 12px; background-color: #eff6ff; color: #2563eb; border: 1px solid #bfdbfe; border-radius: 12px; font-size: 12px; font-weight: 700;">
                      ${programInterest}
                    </span>
                  </td>
                </tr>

                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; vertical-align: top; color: #64748b; font-weight: 600;">
                    Expected Students
                  </td>
                  <td style="padding: 12px 0 12px 12px; border-bottom: 1px solid #f1f5f9; vertical-align: top; color: #0f172a; font-weight: 700;">
                    ${expectedStudentCount}
                  </td>
                </tr>

                ${
                  preferredDuration
                    ? `<tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; vertical-align: top; color: #64748b; font-weight: 600;">
                    Preferred Duration
                  </td>
                  <td style="padding: 12px 0 12px 12px; border-bottom: 1px solid #f1f5f9; vertical-align: top; color: #0f172a; font-weight: 600;">
                    ${preferredDuration}
                  </td>
                </tr>`
                    : ''
                }

                ${
                  preferredDate
                    ? `<tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; vertical-align: top; color: #64748b; font-weight: 600;">
                    Tentative Date
                  </td>
                  <td style="padding: 12px 0 12px 12px; border-bottom: 1px solid #f1f5f9; vertical-align: top; color: #0f172a; font-weight: 600;">
                    ${preferredDate}
                  </td>
                </tr>`
                    : ''
                }
              </table>

              <!-- Requirements / Notes Card -->
              <div style="margin-top: 22px; background-color: #f8fafc; border-left: 4px solid #304ffe; border-radius: 0 10px 10px 0; padding: 14px 18px; border-top: 1px solid #eef2f6; border-right: 1px solid #eef2f6; border-bottom: 1px solid #eef2f6;">
                <div style="font-size: 11px; font-weight: 800; color: #475569; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">
                  Additional Requirements / Goals
                </div>
                <div style="font-size: 14px; color: #1e293b; line-height: 1.6;">
                  ${notes ? notes.replace(/\n/g, '<br/>') : "<em style='color: #94a3b8;'>None provided</em>"}
                </div>
              </div>

              <!-- Quick Action Reply CTA -->
              <div style="margin-top: 30px; text-align: center;">
                <a class="btn-cta" href="mailto:${email}?subject=Regarding%20your%20Codegnan%20Campus%20Enquiry%20from%20${encodeURIComponent(
      collegeName
    )}" target="_blank" style="display: inline-block; background-color: #304ffe; color: #ffffff; font-weight: 700; font-size: 14px; text-decoration: none; padding: 14px 28px; border-radius: 10px; box-shadow: 0 4px 14px rgba(48, 79, 254, 0.35);">
                  Reply Directly to Inquirer (${contactPerson}) &rarr;
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 24px 32px; border-top: 1px solid #eef2f6; text-align: center; font-size: 12px; color: #64748b; line-height: 1.6;">
              <p style="margin: 0 0 6px 0; font-weight: 700; color: #0d1033; font-size: 13px;">
                Codegnan Labs &bull; Campus Partnerships
              </p>
              <p style="margin: 0 0 10px 0; color: #8892b0;">
                Direct Campus Line: <a href="tel:+918121289993" style="color: #304ffe; text-decoration: none; font-weight: 600;">+91 81212 89993</a> &bull; <a href="mailto:labs@codegnan.com" style="color: #304ffe; text-decoration: none; font-weight: 600;">labs@codegnan.com</a>
              </p>
              <p style="margin: 0; color: #94a3b8; font-size: 11px;">
                Tracking Job ID: <code style="font-family: monospace; color: #475569; font-weight: 600;">${jobId}</code> &bull; Automated lead dispatch
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim();

    const result = await sendEmail({
      to: recipientEmail,
      subject,
      body_text: plainTextBody,
      body_html: htmlBody,
      reply_to: email,
      id: jobId,
    });

    return NextResponse.json(
      {
        success: true,
        queued: result.queued,
        message_id: result.message_id,
        job_id: result.job_id,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error sending campus enquiry email:', error);

    if (error instanceof EmailServiceError) {
      return NextResponse.json(
        {
          error: error.message,
          detail: error.detail,
        },
        { status: error.status || 500 }
      );
    }

    return NextResponse.json(
      { error: error?.message || 'Failed to send campus enquiry email' },
      { status: 500 }
    );
  }
}
