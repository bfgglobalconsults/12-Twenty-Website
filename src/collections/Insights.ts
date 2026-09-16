import type { CollectionConfig } from 'payload'

// Function to generate slug from title
const formatSlug = (val: string): string => {
  return val
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
}

export const Insights: CollectionConfig = {
  slug: 'insights',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'publishedDate', 'status'],
  },
  access: {
    read: () => true,
  },
  hooks: {
    beforeValidate: [
      ({ data, operation, originalDoc }) => {
        // Only auto-generate slug on create OR if slug is empty
        if (operation === 'create' && data?.title) {
          // New document - generate slug if not provided
          if (!data.slug || data.slug === '') {
            data.slug = formatSlug(data.title)
          }
        } else if (operation === 'update' && data?.title) {
          // Existing document - only generate if slug is completely empty
          // This preserves existing slugs even when title changes
          if (!data.slug || data.slug === '') {
            data.slug = formatSlug(data.title)
          }
          // If slug exists, keep it unchanged
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
      label: 'Article Title',
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
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Featured Image',
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
      label: 'Excerpt/Summary',
      maxLength: 300,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'Article Content',
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Case Study', value: 'case-study' },
        { label: 'Case Blog', value: 'case-blog' },
        { label: 'Leadership', value: 'leadership' },
        { label: 'Digital Transformation', value: 'digital-transformation' },
        { label: 'Research', value: 'research' },
        { label: 'Career Development', value: 'career-development' },
        { label: 'Technology', value: 'technology' },
      ],
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'team',
      label: 'Author',
    },
    {
      name: 'publishedDate',
      type: 'date',
      required: true,
      label: 'Published Date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'readTime',
      type: 'number',
      label: 'Read Time (minutes)',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'tags',
      type: 'array',
      label: 'Tags',
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured Article',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
