import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { name, email, service, message, dueDate } = await req.json()

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    const to = process.env.CONTACT_EMAIL_TO ?? 'hello@birth-hood.co.uk'

    // Send notification to Leanne
    await resend.emails.send({
      from: 'birth-hood website <noreply@birth-hood.co.uk>',
      to,
      replyTo: email,
      subject: `New enquiry from ${name}${service ? ` — ${service}` : ''}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #c955a8;">New enquiry via birth-hood.co.uk</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 140px;">Name</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${service ? `<tr><td style="padding: 8px 0; font-weight: bold;">Service</td><td style="padding: 8px 0;">${service}</td></tr>` : ''}
            ${dueDate ? `<tr><td style="padding: 8px 0; font-weight: bold;">Due Date</td><td style="padding: 8px 0;">${dueDate}</td></tr>` : ''}
          </table>
          <h3 style="margin-top: 24px;">Message</h3>
          <div style="background: #fdf0f9; padding: 16px; border-radius: 4px; border-left: 4px solid #e87bc3;">
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 24px; color: #888; font-size: 12px;">
            Sent from birth-hood.co.uk contact form
          </p>
        </div>
      `,
    })

    // Send auto-reply to enquirer
    await resend.emails.send({
      from: 'Leanne at birth-hood <hello@birth-hood.co.uk>',
      to: email,
      subject: `Thanks for getting in touch, ${name.split(' ')[0]} 🌸`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #c955a8;">Thank you for reaching out!</h2>
          <p>Hi ${name.split(' ')[0]},</p>
          <p>Thank you so much for getting in touch. I've received your message and will get back to you as soon as possible — usually within 24-48 hours.</p>
          ${service ? `<p>You've enquired about: <strong>${service}</strong></p>` : ''}
          <p>In the meantime, you're very welcome to <a href="https://calendly.com/birthhood" style="color: #c955a8;">book a free consultation call</a> if you'd like to chat sooner.</p>
          <p>Warmly,<br />Leanne<br /><em>birth-hood</em></p>
          <hr style="margin: 24px 0; border: none; border-top: 1px solid #f7d4ee;" />
          <p style="color: #888; font-size: 12px;">
            birth-hood · Leicester, England · <a href="https://www.birth-hood.co.uk" style="color: #c955a8;">birth-hood.co.uk</a>
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or email directly.' },
      { status: 500 }
    )
  }
}
