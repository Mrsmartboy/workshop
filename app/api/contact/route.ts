import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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
      notes,
    } = body;

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `New Campus Enquiry from ${collegeName}`,
      text: `
New Campus Enquiry Lead received!

College / University Name: ${collegeName}
City / Location: ${city}
Contact Person Name: ${contactPerson}
Designation: ${designation}
Phone Number: ${phone}
Official Email Address: ${email}
Expected Student Count: ${expectedStudentCount}
Program Interest: ${programInterest}
Additional Requirements: ${notes || "None"}
      `.trim(),
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
          <div style="background: linear-gradient(135deg, #1e3a8a 0%, #304ffe 100%); color: #ffffff; padding: 24px; text-align: center;">
            <h2 style="margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">New Campus Enquiry</h2>
            <p style="margin: 6px 0 0 0; font-size: 15px; opacity: 0.9;">A new lead has been submitted on the Codegnan Labs.</p>
          </div>
          
          <div style="padding: 32px 24px; background-color: #ffffff;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                  <strong style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Institution</strong><br/>
                  <span style="font-size: 16px; color: #0f172a; font-weight: 500;">${collegeName}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                  <strong style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Location</strong><br/>
                  <span style="font-size: 16px; color: #0f172a;">${city}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                  <strong style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Contact Person</strong><br/>
                  <span style="font-size: 16px; color: #0f172a; font-weight: 500;">${contactPerson}</span>
                  <span style="font-size: 15px; color: #64748b;"> (${designation})</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                  <strong style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Contact Details</strong><br/>
                  <span style="font-size: 16px; color: #0f172a;">Email: <a href="mailto:${email}" style="color: #304ffe; text-decoration: none; font-weight: 500;">${email}</a></span><br/>
                  <span style="font-size: 16px; color: #0f172a;">Phone: <a href="tel:${phone}" style="color: #304ffe; text-decoration: none; font-weight: 500;">${phone}</a></span>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                  <strong style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Program Interest</strong><br/>
                  <span style="font-size: 16px; color: #0f172a; font-weight: 500;">${programInterest}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                  <strong style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Expected Students</strong><br/>
                  <span style="font-size: 16px; color: #0f172a;">${expectedStudentCount}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0;">
                  <strong style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Additional Notes</strong><br/>
                  <div style="font-size: 15px; color: #334155; margin-top: 4px; line-height: 1.5;">
                    ${notes ? notes.replace(/\n/g, '<br/>') : "<em style='color: #94a3b8;'>None provided</em>"}
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <div style="background-color: #f8fafc; padding: 16px; text-align: center; color: #94a3b8; font-size: 12px; border-top: 1px solid #e2e8f0;">
            Codegnan Labs &bull; Automated Lead Notification<br/>
            You can reply directly to this email to contact the sender.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
