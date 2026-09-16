# Testimonials Not Showing - Troubleshooting

## Quick Fixes

### 1. Clear Browser Cache (Most Common Issue)

**Chrome/Edge:**

- Press `Ctrl + Shift + Delete` (Windows) or `Cmd + Shift + Delete` (Mac)
- Select "Cached images and files"
- Click "Clear data"
- Or try hard refresh: `Ctrl + Shift + R` or `Cmd + Shift + R`

**Or use Incognito/Private mode:**

- `Ctrl + Shift + N` (Chrome)
- `Ctrl + Shift + P` (Firefox/Edge)

### 2. Restart Dev Server

```bash
# Stop server (Ctrl+C)
# Clear Next.js cache
rm -rf .next

# Restart
npm run dev
```

### 3. Force Page Refresh

The homepage might be statically cached. Add this to force dynamic rendering:

**Update `src/app/(frontend)/page.tsx`:**

Add at the top of the file:

```typescript
export const dynamic = 'force-dynamic'
export const revalidate = 0
```

### 4. Check Admin Panel

Verify testimonials are actually approved:

1. Go to `/admin/collections/testimonial-submissions`
2. Click on your testimonial
3. Check that "Status" field shows **"Approved"** (not "Pending Review")
4. Save if needed

### 5. Check Console for Errors

Open browser DevTools (F12):

- Look for errors in Console tab
- Look for failed network requests in Network tab

## Detailed Troubleshooting

### Verify Database Query

Add logging to see what's being fetched:

**In `src/app/(frontend)/page.tsx`:**

```typescript
const testimonialsResult = await payload.find({
  collection: 'testimonial-submissions',
  where: { status: { equals: 'approved' } },
  sort: '-createdAt',
  limit: 10,
  depth: 1,
})
testimonials = testimonialsResult.docs as any

// Add this logging
console.log('📊 Fetched testimonials count:', testimonials.length)
console.log(
  '📝 Testimonials:',
  testimonials.map((t) => ({
    author: t.author,
    status: t.status,
    quote: t.quote?.substring(0, 50),
  })),
)
```

Then check server logs (terminal where you run `npm run dev`)

### Check Testimonial Data Structure

Make sure the testimonials have required fields:

Required fields in ClientTestimonials component:

- `id` ✅
- `quote` ✅
- `author` ✅
- `position` (optional)
- `company` (optional)
- `photo` (optional)

### Verify the Component Receives Data

Add logging to ClientTestimonials:

**In `src/components/ClientTestimonials.tsx`:**

```typescript
export default function ClientTestimonials({ testimonials }: ClientTestimonialsProps) {
  console.log('🎯 ClientTestimonials received:', testimonials?.length, 'testimonials')
  console.log('📋 Testimonials data:', testimonials)

  const [currentIndex, setCurrentIndex] = useState(0)
  // ... rest of component
```

Check browser console (F12) for these logs

### Force No Cache

Update page.tsx to prevent any caching:

```typescript
// Add at the very top, before any imports
export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'

import React from 'react'
// ... rest of imports
```

### Check If It's a Timing Issue

The page might load before data is fetched. Make sure it's a Server Component:

**`src/app/(frontend)/page.tsx` should have:**

```typescript
export default async function HomePage() {
  // ^^^ This 'async' is important
```

### Manual Test Query

Test the query directly in your code:

```typescript
// Add this temporarily to see what's in the database
const allSubmissions = await payload.find({
  collection: 'testimonial-submissions',
  limit: 100,
})

console.log(
  'All testimonial submissions:',
  allSubmissions.docs.map((t) => ({
    id: t.id,
    author: t.author,
    status: t.status,
  })),
)

const approvedOnly = allSubmissions.docs.filter((t) => t.status === 'approved')
console.log('Approved count:', approvedOnly.length)
```

## Complete Fix Implementation

Here's the updated page.tsx with all fixes:

```typescript
// Force dynamic rendering - no caching
export const dynamic = 'force-dynamic'
export const revalidate = 0

import React from 'react'
import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import OurExpertise from '@/components/OurExpertise'
import TechnologyOperations from '@/components/TechnologyOperations'
import RecentProjects from '@/components/RecentProjects'
import WhyUs from '@/components/WhyUs'
import ManagedProjects from '@/components/ManagedProjects'
import Leadership from '@/components/Leadership'
import ClientTestimonials from '@/components/ClientTestimonials'
import LatestBlogs from '@/components/LatestBlogs'
import ConsultationForm from '@/components/ConsultationForm'
import Newsletter from '@/components/Newsletter'
import './styles.css'
import SectionSpacing from '@/utilities/SectionSpacing'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export default async function HomePage() {
  let services = []
  let testimonials: any[] = []
  let insights: any[] = []

  try {
    const payload = await getPayload({ config: configPromise })

    // Fetch testimonials
    const testimonialsResult = await payload.find({
      collection: 'testimonial-submissions',
      where: { status: { equals: 'approved' } },
      sort: '-createdAt',
      limit: 10,
      depth: 1,
    })
    testimonials = testimonialsResult.docs as any

    // Log for debugging (remove in production)
    console.log('✅ Fetched testimonials:', testimonials.length)

  } catch (error) {
    console.error('Error fetching data:', error)
  }

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <SectionSpacing>
        {/* ... other components ... */}
        <ClientTestimonials testimonials={testimonials} />
        {/* ... other components ... */}
      </SectionSpacing>
    </div>
  )
}
```

## Production Specific Issues

If this is on your live site:

### 1. Deployment Cache

- Redeploy the site completely
- Some platforms cache the built pages

### 2. CDN Cache

- If using Vercel, CloudFlare, etc.
- Clear CDN cache or wait for it to expire
- Or add cache headers to force fresh data

### 3. ISR/SSG Cache

- Next.js might have pre-rendered the page
- Adding `export const dynamic = 'force-dynamic'` fixes this

## Testing Steps

1. **Clear everything:**

   ```bash
   rm -rf .next
   npm run dev
   ```

2. **Hard refresh browser:** `Ctrl + Shift + R`

3. **Check admin panel:** Verify status is "Approved"

4. **Check server logs:** Look for testimonials count

5. **Check browser console:** Look for errors

6. **Try incognito mode:** Rules out browser cache

7. **Check different browser:** Rules out browser-specific issues

## Common Causes

1. **Browser cache** (90% of cases) → Hard refresh
2. **Next.js build cache** → Delete .next folder
3. **Status not actually approved** → Check admin panel
4. **Page is statically generated** → Add `dynamic = 'force-dynamic'`
5. **Component not receiving props** → Add console.logs
6. **Wrong collection name** → Double-check collection slug
7. **Database query filter wrong** → Test query directly

## Quick Diagnostic

Run this in your terminal to check the database directly:

**Create a test file `test-testimonials.ts`:**

```typescript
import { getPayload } from 'payload'
import config from './src/payload.config'

async function test() {
  const payload = await getPayload({ config })

  const all = await payload.find({
    collection: 'testimonial-submissions',
  })

  console.log('Total submissions:', all.totalDocs)
  console.log(
    'All submissions:',
    all.docs.map((t) => ({
      author: t.author,
      status: t.status,
    })),
  )

  const approved = await payload.find({
    collection: 'testimonial-submissions',
    where: { status: { equals: 'approved' } },
  })

  console.log('Approved count:', approved.totalDocs)
  console.log('Approved testimonials:', approved.docs)
}

test()
```

Run: `node --loader tsx test-testimonials.ts`

## Still Not Working?

If none of the above works, the issue might be:

1. Database connection problem
2. Collection schema mismatch
3. Payload CMS version issue
4. Data type mismatch

Share:

- Browser console errors
- Server logs from terminal
- Screenshot of admin panel showing approved testimonial
- Output from the test script above

Then I can provide more specific help!
