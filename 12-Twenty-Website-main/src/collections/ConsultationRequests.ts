import type { CollectionConfig } from 'payload'

export const ConsultationRequests: CollectionConfig = {
  slug: 'consultation-requests',
  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'email', 'projectType', 'status', 'createdAt'],
    group: 'Form Submissions',
  },
  fields: [
    {
      name: 'projectType',
      type: 'select',
      required: true,
      options: [
        { label: 'Construction Design & Management', value: 'construction' },
        { label: 'Residential & Infrastructure', value: 'residential' },
        { label: 'Roadworks & Civil Engineering', value: 'roadworks' },
        { label: 'Facility Maintenance', value: 'facility' },
        { label: 'Materials Procurement', value: 'procurement' },
      ],
    },
    {
      name: 'projectStage',
      type: 'select',
      required: true,
      options: [
        { label: 'Concept / Feasibility', value: 'concept' },
        { label: 'Design Phase', value: 'design' },
        { label: 'Pre-Construction', value: 'pre-construction' },
        { label: 'Active Construction', value: 'construction' },
        { label: 'Handover / Closeout', value: 'handover' },
      ],
    },
    {
      name: 'fullName',
      type: 'text',
      required: true,
      label: 'Full Name',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Email Address',
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      label: 'Phone Number',
    },
    {
      name: 'budget',
      type: 'select',
      required: true,
      options: [
        { label: 'Under $50M', value: '<50m' },
        { label: '$50M - $100M', value: '50-100m' },
        { label: '$100M - $250M', value: '100-250m' },
        { label: '$250M - $500M', value: '250-500m' },
        { label: '$500M+', value: '500m+' },
      ],
    },
    {
      name: 'notes',
      type: 'textarea',
      label: 'Additional Notes',
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'In Review', value: 'in-review' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Proposal Sent', value: 'proposal-sent' },
        { label: 'Closed', value: 'closed' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'assignedTo',
      type: 'relationship',
      relationTo: 'users',
      label: 'Assigned To',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
