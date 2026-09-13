import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'author',
    defaultColumns: ['author', 'company', 'featured', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'quote',
      type: 'textarea',
      required: true,
      label: 'Testimonial Quote',
    },
    {
      name: 'author',
      type: 'text',
      required: true,
      label: 'Author Name',
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
      name: 'location',
      type: 'text',
      label: 'Location',
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      label: 'Author Photo',
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
      name: 'featured',
      type: 'checkbox',
      label: 'Featured on Homepage',
      defaultValue: false,
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
  ],
}
