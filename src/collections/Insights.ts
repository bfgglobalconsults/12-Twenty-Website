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
      label: 'Article Title',
      validate: (val: unknown, { data }: any) => {
        // Only required when publishing
        if (data?.status === 'published' && !val) {
          return 'Title is required for published articles'
        }
        return true
      },
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      admin: {
        position: 'sidebar',
        description: 'Auto-generated on creation. Edit manually to change URL.',
      },
      validate: (val: unknown, { data }: any) => {
        // Only required when publishing
        if (data?.status === 'published' && !val) {
          return 'Slug is required for published articles'
        }
        return true
      },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Featured Image',
      validate: (val: unknown, { data }: any) => {
        // Only required when publishing
        if (data?.status === 'published' && !val) {
          return 'Featured image is required for published articles'
        }
        return true
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Excerpt/Summary',
      maxLength: 300,
      validate: (val: unknown, { data }: any) => {
        // Only required when publishing
        if (data?.status === 'published' && !val) {
          return 'Excerpt is required for published articles'
        }
        return true
      },
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Article Content',
      validate: (val: unknown, { data }: any) => {
        // Only required when publishing
        if (data?.status === 'published' && !val) {
          return 'Content is required for published articles'
        }
        return true
      },
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Case Study', value: 'case-study' },
        { label: 'Case Blog', value: 'case-blog' },
        { label: 'Leadership', value: 'leadership' },
        { label: 'Digital Transformation', value: 'digital-transformation' },
        { label: 'Research', value: 'research' },
        { label: 'Career Development', value: 'career-development' },
        { label: 'Technology', value: 'technology' },
      ],
      validate: (val: unknown, { data }: any) => {
        // Only required when publishing
        if (data?.status === 'published' && !val) {
          return 'Category is required for published articles'
        }
        return true
      },
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
      label: 'Published Date',
      admin: {
        position: 'sidebar',
      },
      validate: (val: unknown, { data }: any) => {
        // Only required when publishing
        if (data?.status === 'published' && !val) {
          return 'Published date is required for published articles'
        }
        return true
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
