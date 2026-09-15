import type { CollectionConfig } from 'payload'

export const ConsultationRequests: CollectionConfig = {
  slug: 'consultation-requests',
  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'email', 'projectType', 'status', 'createdAt'],
    group: 'Form Submissions',
  },
  hooks: {
    afterChange: [
      async ({ doc, operation, req }) => {
        // Send email notification when a new consultation request is created
        if (operation === 'create') {
          try {
            const projectTypeLabels: Record<string, string> = {
              construction: 'Construction Design & Management',
              residential: 'Residential & Infrastructure',
              roadworks: 'Roadworks & Civil Engineering',
              facility: 'Facility Maintenance',
              procurement: 'Materials Procurement',
            }

            const projectStageLabels: Record<string, string> = {
              concept: 'Concept / Feasibility',
              design: 'Design Phase',
              'pre-construction': 'Pre-Construction',
              construction: 'Active Construction',
              handover: 'Handover / Closeout',
            }

            const budgetLabels: Record<string, string> = {
              '<50m': 'Under $50M',
              '50-100m': '$50M - $100M',
              '100-250m': '$100M - $250M',
              '250-500m': '$250M - $500M',
              '500m+': '$500M+',
            }

            await req.payload.sendEmail({
              to: 'support@12twentygroup.com',
              from: process.env.EMAIL_FROM || 'noreply@12twentygroup.com',
              subject: `New Consultation Request from ${doc.fullName}`,
              html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                  <h2 style="color: #E85D3F;">New Consultation Request</h2>
                  <p>A new consultation request has been submitted through the website.</p>
                  
                  <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="margin-top: 0;">Contact Information</h3>
                    <p><strong>Name:</strong> ${doc.fullName}</p>
                    <p><strong>Email:</strong> <a href="mailto:${doc.email}">${doc.email}</a></p>
                    <p><strong>Phone:</strong> ${doc.phone}</p>
                  </div>

                  <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="margin-top: 0;">Project Details</h3>
                    <p><strong>Project Type:</strong> ${projectTypeLabels[doc.projectType] || doc.projectType}</p>
                    <p><strong>Project Stage:</strong> ${projectStageLabels[doc.projectStage] || doc.projectStage}</p>
                    <p><strong>Estimated Budget:</strong> ${budgetLabels[doc.budget] || doc.budget}</p>
                  </div>

                  ${
                    doc.notes
                      ? `
                  <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="margin-top: 0;">Additional Notes</h3>
                    <p style="white-space: pre-wrap;">${doc.notes}</p>
                  </div>
                  `
                      : ''
                  }

                  <p style="margin-top: 30px;">
                    <a href="${process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'}/admin/collections/consultation-requests/${doc.id}" 
                       style="background-color: #E85D3F; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block;">
                      View in Admin Panel
                    </a>
                  </p>

                  <p style="color: #666; font-size: 12px; margin-top: 30px;">
                    This is an automated notification from 12Twenty Group website.
                  </p>
                </div>
              `,
            })
          } catch (error) {
            // Log error but don't fail the request creation
            console.error('Failed to send email notification:', error)
          }
        }

        return doc
      },
    ],
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
