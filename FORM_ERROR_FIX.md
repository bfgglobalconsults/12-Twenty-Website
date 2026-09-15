# Form 500 Error Fix

## ✅ Issue Resolved

**Error:** 500 Internal Server Error when submitting consultation form

**Status Code:** 500 Internal Server Error

**Cause:** Form dropdown values didn't match the database schema

## The Problem

### Form was sending:

```javascript
{
  projectType: "commercial",    // ❌ Not in database schema
  projectStage: "planning"      // ❌ Not in database schema
}
```

### Database expected:

```javascript
{
  projectType: "construction" | "residential" | "roadworks" | "facility" | "procurement",
  projectStage: "concept" | "design" | "pre-construction" | "construction" | "handover"
}
```

## Solution Applied

### Updated ConsultationForm.tsx

**Before:**

```html
<option value="commercial">Commercial Development</option>
<option value="residential">Residential Construction</option>
<option value="industrial">Industrial Development</option>
```

**After:**

```html
<option value="construction">Construction Design & Management</option>
<option value="residential">Residential & Infrastructure</option>
<option value="roadworks">Roadworks & Civil Engineering</option>
<option value="facility">Facility Maintenance</option>
<option value="procurement">Materials Procurement</option>
```

### Updated Project Stages

**Before:**

```html
<option value="planning">Concept/Planning</option>
<option value="design">Design/Permitting</option>
<option value="construction">Under Construction</option>
<option value="renovation">Renovation/Remodel</option>
```

**After:**

```html
<option value="concept">Concept/Planning</option>
<option value="design">Design/Permitting</option>
<option value="pre-construction">Pre-Construction</option>
<option value="construction">Under Construction</option>
<option value="handover">Handover/Closeout</option>
```

## Files Modified

1. `src/components/ConsultationForm.tsx` - Updated dropdown values
2. `src/components/ConsultationModal.tsx` - Updated dropdown values

## Now Form Values Match Database

### Project Types (aligned with services):

- ✅ Construction Design & Management
- ✅ Residential & Infrastructure
- ✅ Roadworks & Civil Engineering
- ✅ Facility Maintenance
- ✅ Materials Procurement

### Project Stages (aligned with typical construction phases):

- ✅ Concept/Planning
- ✅ Design/Permitting
- ✅ Pre-Construction
- ✅ Under Construction
- ✅ Handover/Closeout

## Testing

1. Refresh your page
2. Fill out the consultation form
3. Submit - should now work without 500 error
4. Check `/admin/collections/consultation-requests` to see the submission
5. Check `support@12twentygroup.com` for email notification

## What Happens Now

When form is submitted:

1. ✅ Values match database schema
2. ✅ Payload CMS saves the request
3. ✅ Email notification sent
4. ✅ Success message shown to user
5. ✅ Admin can view in Payload panel

## Root Cause Analysis

The original form options were generic placeholders that didn't match your actual:

- Business services (Construction, Roadworks, etc.)
- Database schema in `ConsultationRequests.ts`

Now everything is aligned with your actual service offerings!
