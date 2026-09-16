# Email Notifications Not Sending - Fix Guide

## ✅ Issue Identified

**Problem:** Consultation requests saved to database but no email sent

**Cause:** SMTP password is set to placeholder value `your-email-password`

## Current Configuration

Your `.env` file has:

```env
SMTP_HOST=mail.12twentygroup.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=support@12twentygroup.com
SMTP_PASS=your-email-password  ← THIS NEEDS TO BE CHANGED
EMAIL_FROM=support@12twentygroup.com
```

## Solution

### Step 1: Get Your Email Password

You need the actual password for `support@12twentygroup.com`.

**Where to get it:**

- Check with your email hosting provider (the company hosting 12twentygroup.com)
- Or check your email client settings
- Or contact your IT admin/domain host

### Step 2: Update .env File

Replace the placeholder with your real password:

```env
SMTP_PASS=YourActualEmailPasswordHere123!
```

**Important:**

- Use the ACTUAL password, not "YourActualEmailPasswordHere123!"
- No quotes needed around the password
- No spaces

### Step 3: Restart Dev Server

After updating `.env`:

```bash
# Stop the server (Ctrl+C)
# Then restart:
npm run dev
```

## How to Get SMTP Settings

### Option 1: Check Your Email Host

Common email hosting providers and their settings:

**cPanel/Hostinger/Namecheap:**

- SMTP Host: `mail.yourdomain.com` ✅ (You have this)
- SMTP Port: `465` (SSL) ✅ (You have this)
- Username: `support@12twentygroup.com` ✅ (You have this)
- Password: Check your hosting control panel

**Office 365/Microsoft:**

- SMTP Host: `smtp.office365.com`
- SMTP Port: `587`
- SMTP Secure: `false` (TLS)
- Username: Your full email
- Password: Your Microsoft account password

**Google Workspace:**

- SMTP Host: `smtp.gmail.com`
- SMTP Port: `587`
- SMTP Secure: `false` (TLS)
- Username: Your full email
- Password: App Password (not regular password)

### Option 2: Use Gmail for Testing

If you want to test quickly with Gmail:

1. **Enable 2-Factor Authentication** on your Gmail
2. **Create App Password:**
   - Go to https://myaccount.google.com/apppasswords
   - Create password for "Mail"
   - Copy the 16-character password

3. **Update .env:**

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-16-char-app-password
EMAIL_FROM=support@12twentygroup.com
```

## Testing Email

After configuring:

1. Restart server
2. Submit a test consultation form
3. Check admin dashboard - should see the submission ✅
4. Check `support@12twentygroup.com` inbox - should receive email ✅

If email doesn't arrive:

- Check spam/junk folder
- Verify password is correct
- Check server logs for error messages
- Try Gmail option for testing

## Troubleshooting

### Error: "Authentication failed"

- ❌ Wrong password
- ❌ Wrong username
- Solution: Double-check credentials

### Error: "Connection timeout"

- ❌ Wrong SMTP host
- ❌ Wrong port
- ❌ Firewall blocking
- Solution: Verify SMTP settings with your host

### Error: "Self-signed certificate"

- ❌ SSL issue
- Solution: Try changing `SMTP_SECURE=false` and `SMTP_PORT=587`

### Email sends but doesn't arrive

- ❌ Blocked by spam filter
- ❌ Wrong EMAIL_FROM address
- Solution: Check spam folder, use authenticated FROM address

## Current Status

✅ **Form working** - Saves to database  
✅ **API working** - Request processed  
✅ **Spam protection** - Active  
✅ **Validation** - All checks passing  
❌ **Email sending** - Needs real password

## What Happens When Fixed

Once you add the real password:

1. User submits consultation form
2. ✅ Saved to database (already working)
3. ✅ Email sent to support@12twentygroup.com (will work)
4. ✅ Email includes all form details
5. ✅ Link to view in admin panel
6. ✅ User sees success message

## Security Note

**Never commit `.env` file to git!**

Your `.env` file should be in `.gitignore`:

```
# .gitignore
.env
.env.local
.env.*.local
```

## Production Deployment

When deploying to production (Vercel, etc.):

1. Add environment variables in hosting dashboard
2. Don't include them in code
3. Use the same SMTP settings
4. Update `NEXT_PUBLIC_SERVER_URL` to production URL

## Alternative: Use Resend

If you can't get SMTP working, consider Resend (easier setup):

1. Sign up at https://resend.com
2. Get API key
3. Update `payload.config.ts` to use Resend adapter
4. Much easier than SMTP!

## Summary

**To fix email notifications:**

1. Get the real password for `support@12twentygroup.com`
2. Update `SMTP_PASS` in `.env` file
3. Restart your dev server
4. Test a form submission
5. Check email inbox

That's it! Once you add the real password, emails will start sending automatically.
