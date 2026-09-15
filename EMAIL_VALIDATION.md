# Email Validation - Complete Implementation

Both consultation forms now have comprehensive email validation on both client-side and server-side.

## ✅ Client-Side Validation (User Experience)

### Real-Time Feedback

When user enters an email:

1. **While typing**: No validation (doesn't interrupt)
2. **On blur** (leaving field): Validates and shows error if invalid
3. **On submit**: Validates before sending to server

### Visual Feedback

- **Valid email**: Normal gray border
- **Invalid email**: Red border + error message below field
- Error message: "Please enter a valid email address"

### Validation Pattern

```javascript
;/^[^\s@]+@[^\s@]+\.[^\s@]+$/
```

This regex checks for:

- At least one character before @
- @ symbol
- At least one character after @
- A dot (.)
- At least one character after the dot

**Valid examples:**

- user@example.com
- john.doe@company.co.uk
- support@12twentygroup.com

**Invalid examples:**

- user@example (no TLD)
- @example.com (no username)
- user@.com (no domain)
- user example@test.com (spaces)

## ✅ Server-Side Validation (Security)

Located in: `src/app/api/consultation-requests/route.ts`

### Double-Check Protection

Even if client validation is bypassed:

1. Server validates email format
2. Returns 400 error if invalid
3. Prevents invalid emails from being saved

### Why Both?

**Client-side (UX):**

- Instant feedback for users
- No server round-trip needed
- Better user experience

**Server-side (Security):**

- Can't be bypassed by bots
- Protects against API calls directly
- Ensures data integrity

## Testing Email Validation

### Test Cases

1. **Valid email:**
   - Enter: `user@example.com`
   - Result: ✅ No error, form submits

2. **Missing @ symbol:**
   - Enter: `userexample.com`
   - Result: ❌ Error shown on blur

3. **Missing domain:**
   - Enter: `user@`
   - Result: ❌ Error shown on blur

4. **Missing TLD:**
   - Enter: `user@example`
   - Result: ❌ Error shown on blur

5. **Spaces in email:**
   - Enter: `user @example.com`
   - Result: ❌ Error shown on blur

6. **Empty email:**
   - Leave blank and submit
   - Result: ❌ HTML5 required validation

## How It Works

### ConsultationForm.tsx & ConsultationModal.tsx

```typescript
// State for email error
const [emailError, setEmailError] = useState('')

// Validation function
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Validate on blur (when user leaves field)
const handleEmailBlur = () => {
  if (formData.email && !validateEmail(formData.email)) {
    setEmailError('Please enter a valid email address')
  } else {
    setEmailError('')
  }
}

// Validate on submit
const handleSubmit = async (e) => {
  e.preventDefault()

  if (!validateEmail(formData.email)) {
    setEmailError('Please enter a valid email address')
    return // Stop submission
  }

  // Continue with submission...
}

// Clear error when user types
const handleChange = (e) => {
  const { name, value } = e.target
  setFormData({ ...formData, [name]: value })

  if (name === 'email' && emailError) {
    setEmailError('') // Clear error as user fixes it
  }
}
```

### API Route

```typescript
// Email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
if (!emailRegex.test(email)) {
  return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
}
```

## Additional Protection

The email validation works together with:

- **Payload CMS email field type** - Built-in validation
- **Spam detection** - Checks for suspicious patterns
- **Rate limiting** - Prevents abuse
- **Honeypot** - Catches bots

## Edge Cases Handled

✅ Email with multiple dots: `john.doe.smith@example.com`
✅ Email with subdomain: `user@mail.example.com`
✅ Email with country TLD: `user@example.co.uk`
✅ Email with numbers: `user123@example456.com`
✅ Email with hyphens: `user-name@example-site.com`

❌ Email with spaces: `user @example.com`
❌ Email without @: `userexample.com`
❌ Email without domain: `user@`
❌ Email without TLD: `user@example`

## Browser Compatibility

The validation works in all modern browsers:

- Chrome/Edge ✅
- Firefox ✅
- Safari ✅
- Mobile browsers ✅

## Summary

**Three layers of email validation:**

1. **HTML5 `type="email"`** - Basic browser validation
2. **Client-side JavaScript** - Better UX with real-time feedback
3. **Server-side validation** - Security and data integrity

This ensures only valid emails are accepted while providing excellent user experience.
