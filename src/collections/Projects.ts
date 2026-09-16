import type { CollectionConfig } from 'payload'

// Function to generate slug from title
const formatSlug = (val: string): string => {
  return val
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
}

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'value', 'status'],
  },
  access: {
    read: () => true,
  },
  hooks: {
    beforeValidate: [
      ({ data, operation, originalDoc }) => {
        // Only auto-generate slug on create OR if slug is empty
        if (operation === 'create' && data?.title) {
          if (!data.slug || data.slug === '') {
            data.slug = formatSlug(data.title)
          }
        } else if (operation === 'update' && data?.title) {
          if (!data.slug || data.slug === '') {
            data.slug = formatSlug(data.title)
          }
        }
        return data
      },
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Project Title',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
        description: 'Auto-generated on creation. Edit manually to change URL.',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Project Description',
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Featured Image',
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Commercial / Mixed-Use', value: 'commercial' },
        { label: 'Residential / Luxury', value: 'residential' },
        { label: 'Civil / Government', value: 'civil' },
        { label: 'Infrastructure', value: 'infrastructure' },
      ],
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'completed',
      options: [
        { label: 'Completed', value: 'completed' },
        { label: 'In Progress', value: 'in-progress' },
        { label: 'Planned', value: 'planned' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'year',
      type: 'text',
      required: true,
      label: 'Project Year (e.g., 2021 - 2024)',
    },
    {
      name: 'value',
      type: 'text',
      required: true,
      label: 'Project Value',
      admin: {
        description: 'e.g., ₦762M or ₦1.5B',
        placeholder: '₦500M',
      },
    },
    {
      name: 'deliveryChallenge',
      type: 'textarea',
      required: true,
      label: 'Delivery Challenge',
    },
    {
      name: 'managementOutcome',
      type: 'textarea',
      required: true,
      label: 'Management Outcome',
    },
    {
      name: 'location',
      type: 'text',
      label: 'Location',
    },
    {
      name: 'client',
      type: 'text',
      label: 'Client (Optional)',
    },
    {
      name: 'gallery',
      type: 'array',
      label: 'Project Gallery',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured Project',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
