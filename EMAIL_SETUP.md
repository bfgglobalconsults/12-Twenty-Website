# Email Setup Guide for Consultation Form

The consultation form now submits directly to Payload CMS and sends email notifications to `support@12twentygroup.com`.

## How It Works

1. User fills out the consultation form on the website
2. Form submits to `/api/consultation-requests` endpoint
3. Request is saved in Payload CMS database
4. Email notification is automatically sent to `support@12twentygroup.com`
5. Admin can view and manage all requests in Payload Admin panel

## Email Configuration

You need to add email credentials to your `.env` file. Choose one of these options:

### Option 1: Gmail (Quick Testing)

1. Enable 2-Factor Authentication on your Gmail account
2. Create an App Password: https://myaccount.google.com/apppasswords
3. Add to `.env`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-app-password
EMAIL_FROM=support@12twentygroup.com
```

### Option 2: Custom Domain Email (Recommended for Production)

If you have email hosting with your domain (12twentygroup.com):

```env
SMTP_HOST=mail.12twentygroup.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=support@12twentygroup.com
SMTP_PASS=your-email-password
EMAIL_FROM=support@12twentygroup.com
```

Contact your domain/hosting provider for SMTP settings. Common providers:

- **cPanel/Hostinger**: Usually `mail.yourdomain.com` port 465
- **Office 365**: `smtp.office365.com` port 587
- **Google Workspace**: `smtp.gmail.com` port 587

### Option 3: SendGrid (Scalable)

1. Sign up at https://sendgrid.com
2. Create an API key
3. Add to `.env`:

```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
EMAIL_FROM=support@12twentygroup.com
```

## Testing Email

After adding credentials to `.env`:

1. Restart your development server
2. Submit a test consultation form
3. Check the Payload admin panel at `/admin/collections/consultation-requests`
4. Check `support@12twentygroup.com` inbox for notification email

## Troubleshooting

### Email not receiving

1. Check spam/junk folder
2. Verify SMTP credentials are correct
3. Check server logs for error messages
4. Try testing with Gmail first to rule out credential issues

### FormSpree Alternative

If you still want to use FormSpree alongside Payload:

- FormSpree is no longer needed since requests go directly to Payload
- This solution is better because you have full control and data ownership
- All requests are stored in your database with admin interface

## Admin Panel Features

Access at `/admin/collections/consultation-requests`:

- View all consultation requests
- Track status (New, In Review, Contacted, etc.)
- Assign requests to team members
- Search and filter by project type, date, etc.
- Export data as needed

## Production Deployment

Before deploying:

1. Add all SMTP environment variables to your hosting platform (Vercel, etc.)
2. Ensure `NEXT_PUBLIC_SERVER_URL` points to your production domain
3. Test email sending in production environment
4. Monitor email delivery and adjust settings if needed
