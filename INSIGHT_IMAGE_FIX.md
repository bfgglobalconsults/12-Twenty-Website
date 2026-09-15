# Insight Image Display Fix

## Issue

Images were not displaying on the insight detail pages because the `featuredImage` relationship wasn't being populated from the database.

## Changes Made

### 1. Updated Insight Detail Page

**File:** `src/app/(frontend)/insights/[slug]/page.tsx`

Added `depth: 2` parameter to populate the featuredImage relationship:

```typescript
const insights = await payload.find({
  collection: 'insights',
  where: { slug: { equals: slug } },
  limit: 1,
  depth: 2, // This populates the featuredImage relationship
})
```

### 2. Created Insights API Endpoint

**File:** `src/app/api/insights/route.ts`

Created new API endpoint that:

- Fetches insights with `depth: 2` to populate featuredImage
- Filters by status (published/draft)
- Sorts by newest first
- Returns proper image URLs from Vercel Blob Storage

This endpoint is used by the insights listing page (`/insights`)

## How It Works

### Without `depth` parameter:

```json
{
  "featuredImage": "663f8a9b2c4d1a001f8e4c3a" // Just an ID reference
}
```

### With `depth: 2`:

```json
{
  "featuredImage": {
    "id": "663f8a9b2c4d1a001f8e4c3a",
    "url": "https://blob.vercel-storage.com/...",
    "alt": "Project image",
    "filename": "project.jpg",
    "mimeType": "image/jpeg"
  }
}
```

## Testing

1. **Restart your dev server:**

   ```bash
   npm run dev
   ```

2. **Test the insights listing page:**
   - Go to `/insights`
   - All insight cards should now show images

3. **Test insight detail page:**
   - Click on any insight
   - Featured image should display at the top

4. **If images still don't show:**
   - Check that insights have featuredImage uploaded in admin panel
   - Verify images are uploaded to Vercel Blob Storage
   - Check browser console for any errors
   - Verify `BLOB_READ_WRITE_TOKEN` is set in `.env`

## Image Upload Checklist

In Payload Admin (`/admin`):

1. Go to Media collection
2. Upload images (images are stored in Vercel Blob Storage)
3. Add alt text for each image
4. Go to Insights collection
5. Create/edit insight
6. Select uploaded image for "Featured Image" field
7. Save and publish

## Image Sizes Generated

The Media collection automatically generates these sizes:

- **thumbnail**: 400x300 (for admin)
- **card**: 768x512 (for listing pages)
- **tablet**: 1024px width (responsive)
- **desktop**: 1920px width (full size)

Next.js Image component will automatically use the appropriate size.

## Fallback Behavior

If an insight doesn't have a featuredImage:

- Listing page shows a placeholder icon
- Detail page doesn't show an image section (graceful degradation)

Both pages handle missing images without breaking.
