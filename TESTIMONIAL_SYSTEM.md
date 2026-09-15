# Testimonial System Explained

## ✅ Issue Fixed

**Problem:** Approved testimonials weren't showing on the website

**Solution:** Updated homepage to fetch from `testimonial-submissions` with status `approved`

## How The System Works

### Two Collections

1. **testimonial-submissions** (User-submitted testimonials)
   - Where user submissions go
   - Admin can approve/reject
   - Located at `/admin/collections/testimonial-submissions`

2. **testimonials** (Curated testimonials)
   - Manually created by admin
   - Full control over content
   - Can include photos, ratings, etc.
   - Located at `/admin/collections/testimonials`

### Current Setup

The homepage now fetches **approved submissions** directly:

```typescript
const testimonialsResult = await payload.find({
  collection: 'testimonial-submissions',
  where: { status: { equals: 'approved' } },
  sort: '-createdAt',
  limit: 10,
})
```

## Workflow

### For User Submissions

1. **User submits testimonial** via "Share Your Experience" button
2. **Saved to testimonial-submissions** with status: `pending`
3. **Admin reviews** in `/admin/collections/testimonial-submissions`
4. **Admin approves** by changing status to `approved`
5. **Testimonial shows on website** immediately ✅

### For Manual Testimonials

1. **Admin creates** in `/admin/collections/testimonials`
2. **Add quote, author, photo, etc.**
3. **Mark as featured** if desired
4. **Testimonial shows on website** (if you switch back to fetching from testimonials collection)

## Automatic Creation Hook

There's a hook in `TestimonialSubmissions.ts` that should automatically create a testimonial when approved:

```typescript
afterChange: [
  async ({ doc, previousDoc }) => {
    if (doc.status === 'approved' && previousDoc?.status !== 'approved') {
      await req.payload.create({
        collection: 'testimonials',
        data: {
          quote: doc.quote,
          author: doc.author,
          position: doc.position,
          company: doc.company,
          rating: doc.rating,
        },
      })
    }
  },
]
```

**Note:** This hook creates a testimonial in the `testimonials` collection when you approve a submission. However, since we're now fetching directly from `testimonial-submissions`, this is redundant. You can remove it if you want to simplify the system.

## Admin Panel Actions

### To Display a Testimonial

**Option 1: Approve a submission** (Current system)

1. Go to `/admin/collections/testimonial-submissions`
2. Click on a submission
3. Change "Status" from "Pending Review" to "Approved"
4. Save
5. ✅ Shows on website immediately

**Option 2: Create manually** (If you switch back)

1. Go to `/admin/collections/testimonials`
2. Click "Create New"
3. Fill in quote, author, company, etc.
4. Save
5. Update `page.tsx` to fetch from `testimonials` collection

### To Remove a Testimonial

1. Go to `/admin/collections/testimonial-submissions`
2. Find the testimonial
3. Change status to "Rejected" or delete it
4. ✅ Removed from website immediately

## Display on Website

Testimonials appear in the "What Our Clients Are Saying" section:

- **Layout:** 3-column grid with cards
- **Navigation:** Previous/Next buttons
- **Current highlight:** Middle card has full opacity
- **Others:** 50% opacity
- **Rotation:** Click arrows to view different testimonials

### Fields Displayed

- **Quote** - The testimonial text
- **Author** - Name of the person
- **Position** - Job title (optional)
- **Company** - Organization name (optional)
- **Photo** - Profile picture (optional, shows default icon if missing)

## Testing

1. **Refresh your homepage:** `http://localhost:3000`
2. **Check testimonials section:** Should now show "David Bradford" testimonials
3. **If still not showing:**
   - Clear browser cache
   - Restart dev server
   - Check that submissions are marked as "Approved" in admin panel

## Fields Comparison

### testimonial-submissions

- quote ✅
- author ✅
- email ✅
- position ✅
- company ✅
- rating ✅
- status (pending/approved/rejected) ✅

### testimonials

- quote ✅
- author ✅
- position ✅
- company ✅
- location ✅
- photo ✅
- rating ✅
- featured (homepage highlight) ✅
- order (display order) ✅

## Recommendations

### Option A: Keep Current Setup (Recommended)

- ✅ Simple - one source of truth
- ✅ User submissions show immediately when approved
- ✅ Less admin work
- ❌ Less control over formatting/photos

### Option B: Use Both Collections

- ✅ Full control over testimonials
- ✅ Can add photos, rewrite quotes, etc.
- ✅ Keep submissions separate from display
- ❌ Extra step (approve → create testimonial)
- ❌ More admin work

### Option C: Hybrid Approach

1. Show approved submissions by default
2. Admin can optionally create curated testimonials
3. Fetch from both collections, prioritize curated ones

```typescript
// Fetch curated first, then approved submissions
const curatedResult = await payload.find({
  collection: 'testimonials',
  limit: 10,
})

const submissionsResult = await payload.find({
  collection: 'testimonial-submissions',
  where: { status: { equals: 'approved' } },
  limit: 10,
})

const testimonials = [...curatedResult.docs, ...submissionsResult.docs]
```

## File Modified

- `src/app/(frontend)/page.tsx` - Changed testimonials fetch to use approved submissions

## Next Steps

1. Refresh homepage - testimonials should now appear
2. Test the "Share Your Experience" button
3. Submit a test testimonial
4. Approve it in admin
5. Verify it appears on homepage
6. Decide if you want to keep this approach or switch to curated testimonials

## Summary

Your testimonials are now working! The approved submissions from "David Bradford" should display on the homepage in the "What Our Clients Are Saying" section.
