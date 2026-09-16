# Production Email Troubleshooting Guide

## Current Status

✅ **Environment variables configured** on production  
✅ **Form saves to database** (working)  
✅ **Email hook exists** in ConsultationRequests collection  
❌ **Emails not arriving** at support@12twentygroup.com

## Possible Issues & Solutions

### 1. Check Production Logs

**Vercel Logs (if using Vercel):**

1. Go to your Vercel dashboard
2. Click on your project
3. Go to "Deployments"
4. Click on latest deployment
5. Check "Functions" logs
6. Look for errors like:
   - "Failed to send email notification"
   - SMTP authentication errors
   - Connection timeout

**What to look for:**

```
Error: Invalid login: 535 5.7.8 Error: authentication failed
→ Wrong password or username

Error: connect ETIMEDOUT
→ Wrong SMTP host or port blocked

Error: Greeting never received
→ Wrong port or SSL settings
```

### 2. Verify Environment Variables

Make sure these are set in production:

```env
SMTP_HOST=mail.12twentygroup.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=support@12twentygroup.com
SMTP_PASS=your-actual-password (not placeholder)
EMAIL_FROM=support@12twentygroup.com
NEXT_PUBLIC_SERVER_URL=https://12twentygroup.com (your production URL)
```

**Common mistakes:**

- ❌ Spaces in password
- ❌ Special characters not escaped
- ❌ Copy-paste added hidden characters
- ❌ SMTP_SECURE set to string "true" instead of boolean

### 3. Port & SSL Configuration

Your current config uses Port 465 with SSL. Try alternative:

**Option A: Port 465 (SSL) - Current**

```env
SMTP_HOST=mail.12twentygroup.com
SMTP_PORT=465
SMTP_SECURE=true
```

**Option B: Port 587 (TLS) - Try this if not working**

```env
SMTP_HOST=mail.12twentygroup.com
SMTP_PORT=587
SMTP_SECURE=false
```

### 4. Test SMTP Connection

You can test your SMTP settings manually:

**Using online tool:**

- https://www.smtper.net/
- Enter your SMTP details
- Send test email

**Using terminal:**

```bash
telnet mail.12twentygroup.com 465
# or
telnet mail.12twentygroup.com 587
```

Should connect successfully. If it times out, the host/port is wrong.

### 5. Email Provider Settings

**Check with your hosting provider:**

Some providers require:

- Allow "less secure apps" (if using basic auth)
- Whitelist server IP address
- Enable SMTP in control panel
- Use specific SMTP authentication method

**Common providers:**

**cPanel/Hostinger:**

- SMTP should work with email account credentials
- Make sure email account exists and is active
- Try webmail login to verify credentials

**Namecheap:**

- Enable "Email" in your hosting panel
- SMTP might be: `mail.yourdomain.com`
- Port 465 (SSL) or 587 (TLS)

**GoDaddy:**

- SMTP: `smtpout.secureserver.net`
- Port: 465 or 587
- Requires email account from GoDaddy

### 6. Check Spam/Junk Folder

Even if sending works, emails might go to spam:

1. Check `support@12twentygroup.com` spam folder
2. Mark as "Not Spam" if found
3. Add sender to contacts/whitelist

### 7. Verify Email Account

Make sure `support@12twentygroup.com`:

- ✅ Exists and is active
- ✅ Can send AND receive emails
- ✅ Has space available (not full)
- ✅ Not suspended or blocked
- ✅ Password hasn't been changed

**Test by:**

- Logging into webmail
- Sending a test email from that account
- Receiving an email to that account

### 8. Firewall/Security Issues

Production server might block SMTP ports:

**Vercel:**

- Generally allows SMTP on 465, 587
- But some providers block it

**Solution:**

- Use email service API instead (Resend, SendGrid)
- They use HTTPS instead of SMTP ports

### 9. Alternative: Use Resend (Recommended)

If SMTP continues to fail, switch to Resend:

**1. Sign up:**

- https://resend.com (free 100 emails/day)
- Verify your domain

**2. Install:**

```bash
npm install resend
```

**3. Update payload.config.ts:**

```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default buildConfig({
  // ... other config
  email: {
    fromName: '12Twenty Group',
    fromAddress: 'support@12twentygroup.com',
    transport: async ({ to, subject, html }) => {
      await resend.emails.send({
        from: 'support@12twentygroup.com',
        to,
        subject,
        html,
      })
    },
  },
})
```

**4. Add to environment variables:**

```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

### 10. Debug Email Hook

Add more detailed logging to see what's happening:

Update `src/collections/ConsultationRequests.ts`:

```typescript
hooks: {
  afterChange: [
    async ({ doc, operation, req }) => {
      if (operation === 'create') {
        console.log('🔔 Attempting to send email for:', doc.fullName)
        console.log('📧 Sending to:', 'support@12twentygroup.com')
        console.log('📤 From:', process.env.EMAIL_FROM)

        try {
          await req.payload.sendEmail({
            to: 'support@12twentygroup.com',
            from: process.env.EMAIL_FROM || 'noreply@12twentygroup.com',
            subject: `New Consultation Request from ${doc.fullName}`,
            html: `...`
          })
          console.log('✅ Email sent successfully!')
        } catch (error) {
          console.error('❌ Email failed:', error)
          // Log the full error details
          if (error instanceof Error) {
            console.error('Error name:', error.name)
            console.error('Error message:', error.message)
            console.error('Error stack:', error.stack)
          }
        }
      }
      return doc
    },
  ],
}
```

Then check production logs for these messages.

## Quick Diagnosis Checklist

Run through this checklist:

### On Production Server

- [ ] Environment variables are set correctly
- [ ] No typos in SMTP_HOST, SMTP_USER
- [ ] SMTP_PASS is the real password (not placeholder)
- [ ] NEXT_PUBLIC_SERVER_URL is production URL
- [ ] Latest code is deployed

### Email Account

- [ ] support@12twentygroup.com exists
- [ ] Can log into webmail with SMTP_USER/SMTP_PASS
- [ ] Account not full or suspended
- [ ] SMTP is enabled in hosting panel

### Network

- [ ] SMTP port (465 or 587) is not blocked
- [ ] Can telnet to SMTP_HOST on SMTP_PORT
- [ ] No firewall blocking outgoing SMTP

### Testing

- [ ] Submit test form on production
- [ ] Check production logs for errors
- [ ] Check spam folder
- [ ] Try different port (587 instead of 465)

## Immediate Actions

**Step 1: Check Logs**

- Look at Vercel/hosting logs
- Find the actual error message

**Step 2: Verify Credentials**

- Log into webmail with same username/password
- If login fails, password is wrong

**Step 3: Try Port 587**

- Change SMTP_PORT to 587
- Change SMTP_SECURE to false
- Redeploy

**Step 4: Contact Support**

- Email hosting provider
- Ask for SMTP settings
- Ask if port 465/587 is blocked

**Step 5: Switch to Resend**

- If SMTP continues failing
- Much more reliable than SMTP
- Easier to troubleshoot

## Expected Behavior

When working correctly:

1. User submits form → Success message
2. Server creates record → Visible in admin ✅ (working)
3. Hook triggers → Calls sendEmail()
4. Email sends → No errors in logs
5. Email arrives → support@12twentygroup.com inbox

## Common Solutions

**80% of email issues are:**

1. Wrong password (try logging into webmail)
2. Wrong port (try 587 instead of 465)
3. Wrong host (verify with hosting provider)
4. Blocked by spam (check spam folder)
5. Account suspended (contact hosting)

## Need Help?

Share these from your production logs:

- Any error messages containing "email" or "SMTP"
- Full error stack trace
- Current environment variables (without passwords)

Then we can pinpoint the exact issue!

## Summary

Your code is correct. The issue is likely:

- SMTP credentials not working on production
- Port blocked
- Email provider configuration

Check logs first, then try port 587, then consider switching to Resend for reliability.
