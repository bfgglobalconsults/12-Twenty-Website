# Slug Auto-Generation - Create vs Update Behavior

## ✅ Updated to Preserve Slugs on Edit

The slug auto-generation now works differently for creating vs updating posts to prevent breaking existing URLs.

## How It Works

### Creating New Content (POST)

**Scenario:** Creating a new insight/project/service

**Behavior:**

1. You enter title: "The Future of Construction"
2. Slug auto-generates: `the-future-of-construction`
3. You can edit slug before saving if desired
4. Save and publish

**Result:** URL is `/insights/the-future-of-construction`

### Updating Existing Content (PATCH)

**Scenario:** Editing an existing insight

**Behavior:**

1. Open existing insight with title "The Future of Construction"
2. Slug shows: `the-future-of-construction` (preserved)
3. Change title to: "The Future of Modern Construction"
4. **Slug remains:** `the-future-of-construction` (unchanged)
5. Save

**Result:** URL stays `/insights/the-future-of-construction` (no broken links!)

### Manually Changing Slug on Update

**Scenario:** You want to update the URL

**Behavior:**

1. Open existing insight
2. Manually change slug field
3. New slug is saved
4. URL changes

**Result:** New URL, but be aware old URL will break

## Why This Matters

### ❌ Old Behavior (Bad)

```
1. Create: "2024 Report" → slug: "2024-report"
2. Publish at: /insights/2024-report
3. Google indexes the page
4. Users bookmark it
5. Edit title: "2024 Annual Report"
6. Slug auto-changes to: "2024-annual-report"
7. ❌ Old URL breaks!
8. ❌ Google 404s
9. ❌ Bookmarks broken
10. ❌ Shared links broken
```

### ✅ New Behavior (Good)

```
1. Create: "2024 Report" → slug: "2024-report"
2. Publish at: /insights/2024-report
3. Google indexes the page
4. Users bookmark it
5. Edit title: "2024 Annual Report"
6. ✅ Slug stays: "2024-report"
7. ✅ URL unchanged
8. ✅ Google still works
9. ✅ Bookmarks still work
10. ✅ Shared links still work
```

## Edge Cases Handled

### Case 1: Empty Slug on Update

```
Situation: Somehow slug gets deleted
Behavior: Auto-generates from current title
Result: Prevents saving without slug
```

### Case 2: Creating with Manual Slug

```
Situation: You enter custom slug on creation
Behavior: Your slug is used, not auto-generated
Result: Full control when needed
```

### Case 3: Duplicate Slug

```
Situation: Two posts with same slug
Behavior: Database rejects (unique constraint)
Result: You get error, must change slug manually
```

### Case 4: Special Characters in Title

```
Title: "Construction & Design - 2024!"
Auto-slug: "construction-design-2024"
Update title: "Construction & Design - 2024 Update!"
Slug stays: "construction-design-2024"
```

## Admin UI Description

The slug field now shows:

```
Slug
Auto-generated on creation. Edit manually to change URL.
┌─────────────────────────────┐
│ the-future-of-construction  │
└─────────────────────────────┘
```

This tells admins:

- Slug auto-fills when creating
- Slug is preserved when editing
- Can manually edit if URL change is needed

## When to Manually Update Slug

### ✅ Good Reasons

1. **Before publishing:** Fix typo in auto-generated slug
2. **Rebranding:** Old name → new name
3. **SEO optimization:** Better keywords
4. **Shorter URL:** Long title → short slug

### ❌ Bad Reasons

1. **After publishing:** Content is live, URL should stay
2. **Minor title edits:** "Report" → "Annual Report"
3. **Just because:** No real benefit, risk of breaking links

## Best Practices

### For Content Creators

1. **Check slug before first publish**
   - Auto-generated slug looks good? ✅ Leave it
   - Want something different? Edit before publishing

2. **Don't change slug after publishing**
   - Title updates won't change URL
   - This is intentional and good!
   - Only change if absolutely necessary

3. **If you must change slug:**
   - Note old URL
   - Set up redirect (if possible)
   - Update internal links
   - Inform marketing/SEO team

### For Developers

If you need redirects for changed slugs:

```typescript
// next.config.ts
export default {
  async redirects() {
    return [
      {
        source: '/insights/old-slug',
        destination: '/insights/new-slug',
        permanent: true, // 301 redirect
      },
    ]
  },
}
```

## Testing Scenarios

### Test 1: Create New Insight ✅

1. Go to `/admin/collections/insights/create`
2. Enter title: "Test Article"
3. Slug auto-fills: `test-article`
4. Save
5. **Result:** Insight created with slug

### Test 2: Edit Existing Insight ✅

1. Open existing insight
2. Current title: "Test Article"
3. Current slug: `test-article`
4. Change title to: "Test Article Updated"
5. Notice slug stays: `test-article`
6. Save
7. **Result:** Title updated, URL unchanged

### Test 3: Manual Slug Change ✅

1. Open existing insight
2. Manually change slug to: `new-test-article`
3. Save
4. **Result:** New slug saved, URL changes

### Test 4: Empty Slug ✅

1. Open existing insight
2. Delete all slug text
3. Try to save
4. **Result:** Slug auto-generates from title

## Technical Implementation

```typescript
hooks: {
  beforeValidate: [
    ({ data, operation, originalDoc }) => {
      if (operation === 'create' && data?.title) {
        // New document - generate if empty
        if (!data.slug || data.slug === '') {
          data.slug = formatSlug(data.title)
        }
      } else if (operation === 'update' && data?.title) {
        // Existing document - only if completely empty
        if (!data.slug || data.slug === '') {
          data.slug = formatSlug(data.title)
        }
        // If slug exists, preserve it
      }
      return data
    },
  ],
}
```

## Collections Updated

1. ✅ **Insights** - Preserves slug on update
2. ✅ **Projects** - Preserves slug on update
3. ✅ **Services** - Preserves slug on update

## Summary

**Key Changes:**

- ✅ Auto-generate slug on **create**
- ✅ Preserve slug on **update** (prevents broken URLs)
- ✅ Only regenerate if slug is completely empty
- ✅ Manual edits always respected

**Benefits:**

- No broken links when editing titles
- SEO-friendly (URLs stay consistent)
- Bookmarks keep working
- Google doesn't lose your pages
- Still flexible (can manually change if needed)

**For Admins:**

- Create content → slug auto-fills → publish
- Edit content → slug stays same → no worries!
- Need new URL? → manually edit slug → save
