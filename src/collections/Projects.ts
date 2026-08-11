import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'value', 'status'],
  },
  access: {
    read: () => true,
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
      },
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
      label: 'Project Value (e.g., $762M)',
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
