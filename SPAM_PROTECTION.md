# Spam Protection Implementation

Both consultation forms (ConsultationForm and ConsultationModal) now have comprehensive spam protection.

## Client-Side Protection

### 1. Honeypot Field

- Hidden field that only bots can see and fill
- Real users never interact with it
- If filled, submission is silently rejected

### 2. Time-Based Protection

- Tracks when form loads
- Requires minimum 3 seconds before submission
- Prevents automated instant submissions
- Shows user-friendly error if submitted too quickly

### 3. Form Validation

- All required fields validated
- Email format validation
- Proper error messages for users

## Server-Side Protection

### 1. Rate Limiting

- Max 3 submissions per minute per IP address
- Uses in-memory store (upgrade to Redis for production)
- Returns 429 status when limit exceeded

### 2. Email Validation

- Regex pattern validation
- Ensures proper email format

### 3. Content Spam Detection

Checks for suspicious patterns in submissions:

- URLs in name field
- Common spam keywords (viagra, casino, crypto, etc.)
- Script injection attempts (XSS)

If spam detected:

- Logs to console for monitoring
- Returns success response (prevents bot from knowing it was blocked)
- Does NOT save to database
- Does NOT send email notification

### 4. Input Sanitization

- All inputs validated before database insertion
- Required fields enforced
- Type checking on all data

## How Spam is Handled

**Legitimate submissions:**

1. Pass all checks
2. Saved to Payload CMS
3. Email sent to support@12twentygroup.com
4. User receives success message

**Spam submissions:**

1. Detected by one or more checks
2. Silently rejected (or rate limited)
3. NOT saved to database
4. NO email sent
5. Bot receives fake success response (to discourage retry)

## Production Recommendations

### 1. Upgrade Rate Limiting

Replace in-memory store with Redis:

```typescript
import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL,
  token: process.env.UPSTASH_REDIS_TOKEN,
})

async function checkRateLimit(ip: string): Promise<boolean> {
  const key = `rate-limit:${ip}`
  const count = await redis.incr(key)

  if (count === 1) {
    await redis.expire(key, 60) // 1 minute expiry
  }

  return count <= 3
}
```

### 2. Add Google reCAPTCHA (Optional)

For extra protection on high-traffic sites:

```bash
npm install react-google-recaptcha
```

Add to forms:

```tsx
import ReCAPTCHA from 'react-google-recaptcha'

// In component
;<ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} onChange={handleRecaptcha} />
```

### 3. Monitor Blocked Submissions

Add logging service to track spam attempts:

```typescript
// In API route after spam detection
await logSpamAttempt({
  ip,
  data: body,
  reason: 'content-spam',
  timestamp: new Date(),
})
```

### 4. Adjust Spam Keywords

Update `suspiciousPatterns` in `route.ts` based on actual spam you receive:

```typescript
const suspiciousPatterns = [
  /your-specific-spam-keyword/i,
  // Add more patterns as needed
]
```

## Testing Spam Protection

### Test Honeypot:

1. Open browser DevTools
2. Fill form and add value to honeypot field
3. Submit - should be silently rejected

### Test Time Protection:

1. Fill form immediately after it loads
2. Submit within 3 seconds
3. Should show "take your time" error

### Test Rate Limiting:

1. Submit form 4+ times within 1 minute
2. Should receive "too many requests" error

### Test Content Spam:

Submit form with:

- Name: "Check out https://spam.com"
- Should get success message but not save

## Monitoring

Check server logs for spam attempts:

```
Spam detected in submission from: [IP]
```

View legitimate submissions in Payload admin:
`/admin/collections/consultation-requests`

## Current Protection Level

✅ Basic bot protection (honeypot)
✅ Time-based validation
✅ Rate limiting (in-memory)
✅ Content spam detection
✅ Email validation
✅ XSS prevention

Recommended for production:
⚠️ Upgrade to Redis rate limiting
⚠️ Add monitoring/alerting
⚠️ Consider reCAPTCHA if spam persists
