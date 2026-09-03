# Service Pages Setup

This document explains the service pages implementation in your website.

## Overview

Services from the "Our Expertise" section now have individual detail pages and are fully manageable through Payload CMS.

## Features

### 1. Services Collection (Payload CMS)

Located at: `src/collections/Services.ts`

**Fields available:**

- **Basic Info**: Title, Slug (auto-generated URL)
- **Image**: Service icon/image (uploaded via Media collection)
- **Short Description**: Brief description for listing pages
- **Key Deliverables**: Array of deliverable items
- **Detailed Content**: Rich text editor for full service page content
- **Benefits**: Array of benefits with title and description
- **Process Steps**: Step-by-step process outline
- **Featured**: Toggle to show/hide on services listing page
- **Display Order**: Control the order services appear
- **SEO**: Meta title and description for better search optimization

### 2. Service Pages

**Listing Page**: `/services`

- Shows all featured services in a grid layout
- Each service card is clickable and links to detail page
- Displays service icon, title, short description, and key deliverables

**Individual Service Pages**: `/services/[slug]`

- Dynamic pages for each service
- Sections include:
  - Hero section with service title and icon
  - Key deliverables grid
  - Detailed content (rich text)
  - Benefits section
  - Process steps with numbered indicators

### 3. Homepage Integration

The homepage "Our Expertise" section now pulls data from Payload CMS and displays featured services.

## Managing Services

### Access Payload Admin

1. Navigate to `/admin` in your browser
2. Log in with your admin credentials
3. Go to "Services" in the sidebar

### Add a New Service

1. Click "Create New" in the Services collection
2. Fill in required fields:
   - Title: The service name
   - Slug: Auto-generated from title (e.g., "my-service")
   - Short Description: Brief overview (required)
   - Upload an icon/image
3. Add deliverables by clicking "Add Deliverable"
4. Optionally add:
   - Detailed content using the rich text editor
   - Benefits (title + description pairs)
   - Process steps (step + description pairs)
   - SEO metadata
5. Check "Show on Services Page" to feature it
6. Set "Display Order" (lower numbers appear first)
7. Click "Save"

### Edit Existing Services

1. Click on any service in the list
2. Make your changes
3. Click "Save"

### Reorder Services

Change the "Display Order" number. Services are sorted by this field (ascending).

## Seeding Initial Data

To populate the database with the existing services:

```bash
npx tsx scripts/seed-services.ts
```

This will create the 5 default services if they don't already exist.

## File Structure

```
src/
├── collections/
│   └── Services.ts                              # Payload CMS collection definition
├── app/(frontend)/
│   └── services/
│       ├── page.tsx                             # Services listing page
│       └── [slug]/
│           └── page.tsx                         # Individual service detail page
└── components/
    ├── IntegratedServices.tsx                   # Services grid (for /services page)
    └── OurExpertise.tsx                         # Services section (for homepage)
```

## Customization

### Styling

All components use Tailwind CSS. Key colors:

- Background: `#14212D` (dark blue)
- Accent: `#F05C36` (coral/orange)
- Cards: white with rounded corners

### Adding Fields

To add new fields to services:

1. Edit `src/collections/Services.ts`
2. Add your field definition
3. Update the service detail page template in `src/app/(frontend)/services/[slug]/page.tsx`
4. Restart your dev server

## Notes

- Services must have a unique slug
- Images are managed through the Media collection
- Rich text content supports HTML formatting
- All service pages are SEO-optimized with metadata
- Service cards are clickable on both homepage and services listing page
