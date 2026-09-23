import { getPayload } from 'payload'
import configPromise from '@/payload.config'

export async function GET() {
  try {
    const payload = await getPayload({ config: configPromise })

    // Test email send
    await payload.sendEmail({
      to: 'support@12twentygroup.com', // Send test to yourself
      subject: 'Test Email from Payload',
      text: 'This is a test email to verify SMTP configuration.',
      html: '<p>This is a test email to verify SMTP configuration.</p>',
    })

    return Response.json({
      success: true,
      message: 'Test email sent successfully!',
    })
  } catch (error: any) {
    console.error('Email test error:', error)
    return Response.json(
      {
        success: false,
        error: error.message,
        details: error.toString(),
      },
      { status: 500 },
    )
  }
}
