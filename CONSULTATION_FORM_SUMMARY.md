# Consultation Form - Complete Setup

## ✅ What's Been Implemented

### 1. Direct Payload CMS Integration

- No more FormSpree dependency
- All submissions stored in your database
- Full admin control at `/admin/collections/consultation-requests`

### 2. Automatic Email Notifications

- Emails sent to `support@12twentygroup.com` on every new submission
- Beautiful HTML formatted emails with all submission details
- Direct link to view submission in admin panel

### 3. Multi-Layer Spam Protection

**Client-Side (Both Forms):**

- Honeypot field (hidden from real users)
- Time-based validation (minimum 3 seconds)
- Form validation with error messages
- Loading states and user feedback

**Server-Side (API):**

- Rate limiting (3 submissions per minute per IP)
- Email format validation
- Content spam detection (URLs, keywords, XSS)
- IP tracking and logging

### 4. Updated Components

- `ConsultationForm.tsx` - Main page form
- `ConsultationModal.tsx` - Popup form
- Both use same API endpoint
- Consistent UX and protection

## 🚀 Quick Start

### 1. Add Email Credentials to `.env`

Choose your email provider and add credentials:

**Gmail (for testing):**

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-app-password
EMAIL_FROM=support@12twentygroup.com
```

**Custom Domain (recommended):**

```env
SMTP_HOST=mail.12twentygroup.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=support@12twentygroup.com
SMTP_PASS=your-password
EMAIL_FROM=support@12twentygroup.com
```

### 2. Restart Server

```bash
npm run dev
```

### 3. Test It

1. Fill out consultation form
2. Check `/admin/collections/consultation-requests`
3. Check `support@12twentygroup.com` inbox

## 📁 Files Changed/Created

**Modified:**

- `src/components/ConsultationForm.tsx` - Added API integration + spam protection
- `src/components/ConsultationModal.tsx` - Added API integration + spam protection
- `src/payload.config.ts` - Added nodemailer email configuration
- `src/collections/ConsultationRequests.ts` - Added email notification hook

**Created:**

- `src/app/api/consultation-requests/route.ts` - API endpoint with spam protection
- `.env.example` - Email configuration examples
- `EMAIL_SETUP.md` - Detailed email setup guide
- `SPAM_PROTECTION.md` - Spam protection documentation
- `CONSULTATION_FORM_SUMMARY.md` - This file

## 🎯 Admin Features

Access at `/admin/collections/consultation-requests`:

- View all consultation requests
- Filter by status, project type, date
- Assign to team members
- Track status (New → In Review → Contacted → Proposal Sent → Closed)
- Export data
- Search functionality

## 🛡️ Security Features

1. **Honeypot** - Catches basic bots
2. **Time validation** - Prevents instant submissions
3. **Rate limiting** - Max 3 per minute per IP
4. **Content filtering** - Detects spam keywords/URLs
5. **Email validation** - Ensures valid email format
6. **XSS prevention** - Blocks script injection

## 📧 Email Notification Format

When a consultation request is submitted, you receive:

**Subject:** New Consultation Request from [Name]

**Content:**

- Contact Information (name, email, phone)
- Project Details (type, stage, budget)
- Additional Notes
- Direct link to admin panel

## 🔧 Troubleshooting

**Email not sending?**

- Check SMTP credentials in `.env`
- Verify server logs for errors
- Try Gmail first to test
- Check spam folder

**FormSpree issue?**

- FormSpree is no longer needed
- Remove any FormSpree configuration
- All forms now go directly to Payload

**Spam getting through?**

- Check `SPAM_PROTECTION.md` for tuning options
- Add more keywords to spam detection
- Consider adding reCAPTCHA
- Upgrade to Redis rate limiting for production

## 🚀 Production Checklist

Before deploying:

- [ ] Add SMTP credentials to production environment
- [ ] Set `NEXT_PUBLIC_SERVER_URL` to production domain
- [ ] Test email sending in production
- [ ] Consider Redis for rate limiting
- [ ] Set up monitoring for spam attempts
- [ ] Verify email deliverability
- [ ] Test all form validations

## 📚 Additional Resources

- `EMAIL_SETUP.md` - Complete email configuration guide
- `SPAM_PROTECTION.md` - Detailed spam protection docs
- `.env.example` - Environment variable examples
