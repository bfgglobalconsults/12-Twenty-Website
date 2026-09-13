import type { CollectionConfig } from 'payload'

export const TestimonialSubmissions: CollectionConfig = {
  slug: 'testimonial-submissions',
  admin: {
    useAsTitle: 'author',
    defaultColumns: ['author', 'company', 'status', 'createdAt'],
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'quote',
      type: 'textarea',
      required: true,
      label: 'Testimonial',
    },
    {
      name: 'author',
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
      name: 'position',
      type: 'text',
      label: 'Position/Title',
    },
    {
      name: 'company',
      type: 'text',
      label: 'Company/Organization',
    },
    {
      name: 'rating',
      type: 'number',
      min: 1,
      max: 5,
      defaultValue: 5,
      label: 'Rating (1-5 stars)',
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'pending',
      options: [
        { label: 'Pending Review', value: 'pending' },
        { label: 'Approved', value: 'approved' },
        { label: 'Rejected', value: 'rejected' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
