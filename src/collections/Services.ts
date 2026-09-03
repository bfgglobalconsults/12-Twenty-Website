import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'icon', 'featured'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Service Title',
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
      name: 'icon',
      type: 'text',
      label: 'Icon Name (e.g., sketch, engineering)',
      admin: {
        description: 'Icon identifier for the service card',
      },
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      required: true,
      label: 'Short Description',
      admin: {
        description: 'Brief description shown on services listing page',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Show on Services Page',
      defaultValue: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'order',
      type: 'number',
      label: 'Display Order',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
        description: 'Lower numbers appear first',
      },
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Hero Image',
      admin: {
        description: 'Main image displayed on the service detail page',
      },
    },
    {
      name: 'fullDescription',
      type: 'richText',
      label: 'Full Description',
      admin: {
        description: 'Detailed description shown on individual service page',
      },
    },
    {
      name: 'keyFeatures',
      type: 'array',
      label: 'Key Features',
      fields: [
        {
          name: 'feature',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
    },
    {
      name: 'benefits',
      type: 'array',
      label: 'Benefits',
      fields: [
        {
          name: 'benefit',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'process',
      type: 'array',
      label: 'Service Process Steps',
      fields: [
        {
          name: 'stepNumber',
          type: 'number',
          required: true,
        },
        {
          name: 'stepTitle',
          type: 'text',
          required: true,
        },
        {
          name: 'stepDescription',
          type: 'textarea',
        },
      ],
    },
    {
      name: 'relatedProjects',
      type: 'relationship',
      relationTo: 'projects',
      hasMany: true,
      label: 'Related Projects',
      admin: {
        description: 'Projects showcasing this service',
      },
    },
    {
      name: 'ctaText',
      type: 'text',
      label: 'CTA Button Text',
      defaultValue: 'Get Started',
    },
    {
      name: 'ctaLink',
      type: 'text',
      label: 'CTA Button Link',
      defaultValue: '/contact',
    },
  ],
}
