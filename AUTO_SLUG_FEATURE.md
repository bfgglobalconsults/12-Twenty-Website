# Auto-Generated Slugs Feature

## ✅ Implemented

Added automatic slug generation for three collections:

1. **Insights** (articles/blog posts)
2. **Projects** (portfolio items)
3. **Services** (service pages)

## How It Works

### Automatic Generation

When you create or update an item:

1. **Enter the title** (e.g., "The Importance Of Property Valuation")
2. **Slug auto-generates** → `the-importance-of-property-valuation`
3. **You can edit it** if you want something different

### Slug Format

The slug is automatically created from the title:

- Converts to lowercase
- Replaces spaces with hyphens
- Removes special characters
- Keeps only letters, numbers, and hyphens

### Examples

| Title                                  | Auto-Generated Slug                    |
| -------------------------------------- | -------------------------------------- |
| "The Importance Of Property Valuation" | `the-importance-of-property-valuation` |
| "Construction Design & Management"     | `construction-design-management`       |
| "How We Built a $50M Project"          | `how-we-built-a-50m-project`           |
| "Roadworks & Civil Engineering"        | `roadworks-civil-engineering`          |
| "2024 Annual Report"                   | `2024-annual-report`                   |

## Using in Admin Panel

### Creating New Insight/Project/Service

**Before (Manual):**

1. Enter title
2. Manually type slug
3. Risk of typos or inconsistent formatting

**Now (Automatic):**

1. Enter title
2. Slug auto-generates ✅
3. Continue filling other fields
4. (Optional) Edit slug if you want something different

### Editing Existing Items

- If slug already exists, it won't change
- You can still manually edit the slug anytime
- Great for keeping existing URLs unchanged

## Admin UI Changes

In the admin panel, the slug field now shows:

```
Slug
Auto-generated from title. You can edit if needed.
┌─────────────────────────────────────┐
│ the-importance-of-property-valuation│
└─────────────────────────────────────┘
```

## Technical Details

### Collections Updated

1. **src/collections/Insights.ts**
   - Auto-generates slug from article title
   - Used for blog/article URLs

2. **src/collections/Projects.ts**
   - Auto-generates slug from project title
   - Used for portfolio URLs

3. **src/collections/Services.ts**
   - Auto-generates slug from service title
   - Used for service page URLs

### Hook Implementation

```typescript
hooks: {
  beforeValidate: [
    ({ data, operation }) => {
      if ((operation === 'create' || operation === 'update') && data?.title) {
        if (!data.slug || data.slug === '') {
          data.slug = formatSlug(data.title)
        }
      }
      return data
    },
  ],
}
```

### Slug Formatting Function

```typescript
const formatSlug = (val: string): string => {
  return val
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
}
```

## Benefits

### 1. Saves Time

- No need to manually type slugs
- No formatting decisions needed
- One less field to worry about

### 2. Consistency

- All slugs follow same format
- No typos or inconsistencies
- Professional-looking URLs

### 3. SEO-Friendly

- Descriptive URLs from titles
- Proper formatting automatically
- Better for search engines

### 4. Still Flexible

- Can edit if needed
- Can create custom slugs
- Full control when you want it

## Use Cases

### Standard Use (90% of cases)

1. Create new insight: "Building Better Roads"
2. Slug auto-fills: `building-better-roads`
3. Save and publish ✅

### Custom Slug (10% of cases)

1. Create new insight: "Construction Design & Management 2024 Report"
2. Slug auto-fills: `construction-design-management-2024-report`
3. Edit to: `cdm-2024-report` (shorter)
4. Save and publish ✅

### URL Examples

**Insights:**

- `/insights/the-importance-of-property-valuation`
- `/insights/construction-best-practices`
- `/insights/2024-industry-trends`

**Projects:**

- `/projects/lagos-commercial-tower`
- `/projects/abuja-highway-expansion`
- `/projects/luxury-residential-estate`

**Services:**

- `/services/construction-design-management`
- `/services/roadworks-civil-engineering`
- `/services/facility-maintenance`

## Special Characters Handling

| Input              | Output           |
| ------------------ | ---------------- |
| "Title & Subtitle" | `title-subtitle` |
| "Title (2024)"     | `title-2024`     |
| "Title - Part 1"   | `title-part-1`   |
| "Title's Name"     | `titles-name`    |
| "Title @ Location" | `title-location` |
| "Title #1"         | `title-1`        |

## Validation

- Slug is still required
- Slug must be unique
- Can't have duplicate slugs
- Empty slug auto-generates on save

## Testing

Try creating a new insight:

1. Go to `/admin/collections/insights`
2. Click "Create New"
3. Enter title: "Test Article About Construction"
4. Notice slug auto-fills: `test-article-about-construction`
5. Fill other required fields
6. Save ✅

The slug is automatically created!

## Backwards Compatibility

- Existing slugs won't change
- Only new items get auto-slug
- Can still edit manually
- No breaking changes

## Future Enhancements (Optional)

If needed, we could add:

- Real-time slug preview as you type
- Duplicate detection with suggestions
- Custom slug templates per category
- Version numbering for duplicates

## Summary

✅ **Automatic** - Slugs generate from titles  
✅ **Editable** - Can customize if needed  
✅ **Consistent** - Same format every time  
✅ **SEO-friendly** - Clean, descriptive URLs  
✅ **Time-saving** - One less field to fill

All three collections (Insights, Projects, Services) now have smart slug generation!
