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
  hooks: {
    afterChange: [
      async ({ doc, req, previousDoc, operation }) => {
        // When status changes to approved, create a testimonial
        if (doc.status === 'approved' && previousDoc?.status !== 'approved') {
          try {
            console.log('Creating testimonial from approved submission:', doc.id)

            const newTestimonial = await req.payload.create({
              collection: 'testimonials',
              data: {
                quote: doc.quote,
                author: doc.author,
                position: doc.position || '',
                company: doc.company || '',
                rating: doc.rating || 5,
                featured: false,
                order: 0,
              },
            })

            console.log('Successfully created testimonial:', newTestimonial.id)
          } catch (error) {
            console.error(`Failed to create testimonial from submission ${doc.id}:`, error)
          }
        }
        return doc
      },
    ],
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
