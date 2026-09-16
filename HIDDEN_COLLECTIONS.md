# Hidden Collections in Admin Panel

## ✅ Collections Hidden from Navigation

The following collections are now hidden from the Payload admin navigation but still accessible via direct URL or API:

1. **Services** (`/admin/collections/services`) - Not actively managing services via CMS yet
2. **Contact Submissions** (`/admin/collections/contact-submissions`) - No contact form implemented
3. **Testimonials** (`/admin/collections/testimonials`) - Using Testimonial Submissions instead (user-submitted testimonials)

**Note:** Testimonial Submissions (user-submitted) remains visible and active!

## Why Hide Collections?

**Reasons to hide:**

- Not actively using the collection yet
- Reduce admin panel clutter
- Focus on primary content (Insights, Projects, etc.)
- Still want data structure in place for future

**Collections remain:**

- Fully functional in the database
- Accessible via API
- Can be accessed via direct URL
- Can be unhidden anytime

## What's Hidden

### 1. Services Collection

**Status:** Hidden from nav, but services still display on website

**Why:**

- Services are currently hardcoded on the frontend
- Not actively managing via CMS yet
- Keeping collection for future use

**Still works:**

- Service pages render normally
- API endpoints functional
- Database queries work
- Can access directly: `/admin/collections/services`

### 2. Contact Submissions Collection

**Status:** Hidden from nav

**Why:**

- Using Consultation Requests instead
- No contact form currently implemented
- Keeping collection structure for future

**Still works:**

- Can create submissions via API
- Database stores data
- Can access directly: `/admin/collections/contact-submissions`

## What's Still Visible

The admin panel now shows only active collections:

**Content:**

- ✅ Insights (Articles/Blog posts)
- ✅ Projects (Portfolio items)
- ✅ Team (Team members)
- ✅ Media (Images/Files)

**Form Submissions:**

- ✅ Consultation Requests
- ✅ Testimonial Submissions

**System:**

- ✅ Users (Admin accounts)

## How to Unhide

If you want to show these collections again:

### Option 1: Remove `hidden` Property

**src/collections/Services.ts:**

```typescript
admin: {
  useAsTitle: 'title',
  defaultColumns: ['title', 'icon', 'featured'],
  // hidden: true, ← Remove or comment this line
},
```

**src/collections/ContactSubmissions.ts:**

```typescript
admin: {
  useAsTitle: 'name',
  defaultColumns: ['name', 'email', 'subject', 'status', 'createdAt'],
  group: 'Form Submissions',
  // hidden: true, ← Remove or comment this line
},
```

### Option 2: Conditional Hiding

Show/hide based on environment or user role:

```typescript
admin: {
  useAsTitle: 'title',
  hidden: ({ user }) => {
    // Hide for regular users, show for admins
    return user?.role !== 'admin'
  },
},
```

Or based on environment:

```typescript
admin: {
  useAsTitle: 'title',
  hidden: process.env.NODE_ENV === 'production',
},
```

## Direct Access

Even when hidden, you can still access via URL:

**Services:**

```
/admin/collections/services          → List all
/admin/collections/services/create   → Create new
/admin/collections/services/[id]     → Edit existing
```

**Contact Submissions:**

```
/admin/collections/contact-submissions          → List all
/admin/collections/contact-submissions/create   → Create new
/admin/collections/contact-submissions/[id]     → Edit existing
```

## API Access

Collections remain fully accessible via API:

**Services API:**

```
GET    /api/services
GET    /api/services/[id]
POST   /api/services
PATCH  /api/services/[id]
DELETE /api/services/[id]
```

**Contact Submissions API:**

```
GET    /api/contact-submissions
GET    /api/contact-submissions/[id]
POST   /api/contact-submissions
PATCH  /api/contact-submissions/[id]
DELETE /api/contact-submissions/[id]
```

## Frontend Impact

### Services

**Current setup:**

- Services are hardcoded in `page.tsx` with fallback data
- Not fetching from database currently
- Can be switched to CMS-managed in future

**To enable CMS services:**

1. Unhide Services collection
2. Remove `hidden: true`
3. Create services in admin
4. Frontend already has the fetch logic

### Contact Submissions

**Current setup:**

- No contact form implemented yet
- Using Consultation Requests instead
- Can add contact form in future

**To enable:**

1. Create contact form component
2. Submit to `/api/contact-submissions`
3. Unhide collection to view submissions

## Groups

Collections are organized into groups:

**Form Submissions Group:**

- Consultation Requests ✅ (visible)
- Testimonial Submissions ✅ (visible)
- Contact Submissions ❌ (hidden)

**No Group (Top Level):**

- Insights ✅
- Projects ✅
- Services ❌ (hidden)
- Team ✅
- Media ✅
- Users ✅

## Benefits of Hiding

### 1. Cleaner Admin UI

- Less visual clutter
- Easier navigation
- Focus on active content

### 2. Reduced Confusion

- Staff only see what they need
- No empty collections
- Clear workflow

### 3. Future-Proof

- Collections still exist
- Data structure ready
- Easy to enable later

### 4. Flexible

- Can unhide anytime
- Can use conditional hiding
- Can access directly if needed

## When to Unhide

**Unhide Services when:**

- Ready to manage services via CMS
- Need to add/edit service content
- Want team to update services

**Unhide Contact Submissions when:**

- Implement contact form
- Start receiving submissions
- Need to manage inquiries

## Admin Panel Before/After

### Before (Cluttered)

```
Collections
├─ Insights
├─ Projects
├─ Services ← Not using yet
├─ Team
├─ Media
└─ Form Submissions
   ├─ Consultation Requests
   ├─ Contact Submissions ← Not using yet
   └─ Testimonial Submissions
```

### After (Clean)

```
Collections
├─ Insights ✨
├─ Projects ✨
├─ Team ✨
├─ Media ✨
└─ Form Submissions
   ├─ Consultation Requests ✨
   └─ Testimonial Submissions ✨
```

## Technical Details

### Hidden Property

```typescript
admin: {
  hidden: true, // Boolean
}

// OR

admin: {
  hidden: ({ user }) => boolean, // Function
}
```

### What `hidden` Does

✅ **Hides from:**

- Admin navigation menu
- Collection list
- Quick create menu

❌ **Does NOT hide from:**

- API endpoints
- Direct URL access
- Database queries
- Frontend usage

### Database Impact

**None!**

- Tables/collections still exist
- Data is preserved
- Queries still work
- No data loss

## Summary

Services and Contact Submissions are now hidden from the admin navigation, making the panel cleaner and easier to use. Both collections remain fully functional and can be accessed directly or unhidden anytime you need them.

**Current visible collections:**

- Insights
- Projects
- Team
- Media
- Consultation Requests
- Testimonial Submissions
- Users

This gives you a focused admin experience with only the collections you're actively using!
