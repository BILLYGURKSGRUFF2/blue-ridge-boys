import { Resend } from "resend";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, message } = body;

    // Basic validation
    if (!name || !phone || !service) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_EMAIL || "blueridgeboysjr@gmail.com";

    // If no API key configured, log and return success (dev mode)
    if (!process.env.RESEND_API_KEY) {
      console.log("[Contact form] Submission (no Resend key configured):", {
        name, phone, email, service, message,
      });
      return Response.json({ success: true });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      // Free tier: use Resend's shared sender (no domain verification needed)
      // Once you have a domain, replace with: "Blue Ridge Boys <noreply@yourdomain.com>"
      from: "Blue Ridge Boys <onboarding@resend.dev>",
      to,
      replyTo: email || undefined,
      subject: `New Quote Request — ${service}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 560px; color: #1a1a1a;">
          <h2 style="color: #2e4036; margin-bottom: 4px;">New Quote Request</h2>
          <p style="color: #888; font-size: 13px; margin-top: 0;">Blue Ridge Boys · ${new Date().toLocaleString()}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <table style="border-collapse: collapse; width: 100%;">
            <tr><td style="padding: 6px 0; color: #888; font-size: 13px; width: 120px;">Name</td><td style="padding: 6px 0; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 6px 0; color: #888; font-size: 13px;">Phone</td><td style="padding: 6px 0;"><a href="tel:${phone}" style="color: #cc5833;">${phone}</a></td></tr>
            ${email ? `<tr><td style="padding: 6px 0; color: #888; font-size: 13px;">Email</td><td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #cc5833;">${email}</a></td></tr>` : ""}
            <tr><td style="padding: 6px 0; color: #888; font-size: 13px;">Service</td><td style="padding: 6px 0; font-weight: 600; color: #2e4036;">${service}</td></tr>
          </table>
          ${message ? `
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="color: #888; font-size: 13px; margin-bottom: 6px;">Message</p>
          <p style="background: #f5f3ee; padding: 12px 16px; border-radius: 8px; margin: 0; font-size: 14px; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
          ` : ""}
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="color: #bbb; font-size: 12px;">Blue Ridge Boys — blueridgeboys.com</p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("[Contact form] Error:", error);
    return Response.json({ error: "Failed to send" }, { status: 500 });
  }
}
