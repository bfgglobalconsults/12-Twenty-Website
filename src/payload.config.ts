import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Projects } from './collections/Projects'
import { Team } from './collections/Team'
import { Insights } from './collections/Insights'
import { ConsultationRequests } from './collections/ConsultationRequests'
import { ContactSubmissions } from './collections/ContactSubmissions'
import { Services } from './collections/Services'
import { Testimonials } from './collections/Testimonials'
import { TestimonialSubmissions } from './collections/TestimonialSubmissions'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Projects,
    Team,
    Insights,
    ConsultationRequests,
    ContactSubmissions,
    Services,
    Testimonials,
    TestimonialSubmissions,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || '',
  }),
  sharp,
  email: nodemailerAdapter({
    defaultFromAddress: process.env.EMAIL_FROM || 'noreply@12twentygroup.com',
    defaultFromName: '12Twenty Group',
    transportOptions: {
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASS || '',
      },
    } as any,
  }),
  plugins: [
    vercelBlobStorage({
      collections: {
        media: true,
      },
      addRandomSuffix: true,
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
      access: 'public',
      cacheControlMaxAge: 31536000,
    }),
  ],
})
