# Image Upload Configuration for 12Twenty

## 1. Environment Variables

Make sure you have these in your `.env` file:

```env
# Database
DATABASE_URL=mongodb://localhost:27017/12twenty

# Payload Secret (generate a random string)
PAYLOAD_SECRET=your-secret-key-here

# Public URL (for image URLs)
NEXT_PUBLIC_SERVER_URL=http://localhost:3000

# Optional: Cloud Storage (Vercel Blob, AWS S3, etc.)
# BLOB_READ_WRITE_TOKEN=your-token-here
```

## 2. Create Media Directory

The images will be stored in the `public/media` directory. Create it if it doesn't exist:

```bash
mkdir public/media
```

## 3. Update .gitignore

Add the following to your `.gitignore` to avoid committing uploaded images:

```
# Uploaded media
public/media/*
!public/media/.gitkeep
```

Then create a `.gitkeep` file:

```bash
touch public/media/.gitkeep
```

## 4. Image Upload Settings Explained

The Media collection now includes:

- **Multiple Image Sizes**: Automatic generation of different sizes
  - `thumbnail` (400x300) - For admin panel
  - `card` (768x512) - For cards and previews
  - `tablet` (1024px wide) - For tablet displays
  - `desktop` (1920px wide) - For desktop displays

- **Alt Text**: Required for accessibility
- **Caption**: Optional image caption

## 5. Using Images in Your Components

### Example with Next.js Image component:

```tsx
import Image from 'next/image'

// If fetching from Payload
const project = await payload.findByID({
  collection: 'projects',
  id: '123'
})

// Use the image
<Image
  src={project.featuredImage.url}
  alt={project.featuredImage.alt}
  width={1920}
  height={1080}
  className="object-cover"
/>

// Or use specific size
<Image
  src={project.featuredImage.sizes.card.url}
  alt={project.featuredImage.alt}
  width={768}
  height={512}
/>
```

## 6. Cloud Storage (Optional)

For production, consider using cloud storage instead of local storage.

### Option A: Vercel Blob Storage

```bash
npm install @payloadcms/plugin-cloud-storage @payloadcms/plugin-cloud-storage-vercel-blob
```

Update `payload.config.ts`:

```ts
import { vercelBlobStorage } from '@payloadcms/plugin-cloud-storage-vercel-blob'
import { cloudStorage } from '@payloadcms/plugin-cloud-storage'

export default buildConfig({
  // ...
  plugins: [
    cloudStorage({
      collections: {
        media: {
          adapter: vercelBlobStorage({
            token: process.env.BLOB_READ_WRITE_TOKEN!,
          }),
        },
      },
    }),
  ],
})
```

### Option B: AWS S3

```bash
npm install @payloadcms/plugin-cloud-storage @payloadcms/plugin-cloud-storage-s3
```

Update `payload.config.ts`:

```ts
import { s3Storage } from '@payloadcms/plugin-cloud-storage-s3'
import { cloudStorage } from '@payloadcms/plugin-cloud-storage'

export default buildConfig({
  // ...
  plugins: [
    cloudStorage({
      collections: {
        media: {
          adapter: s3Storage({
            bucket: process.env.S3_BUCKET!,
            config: {
              credentials: {
                accessKeyId: process.env.S3_ACCESS_KEY_ID!,
                secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
              },
              region: process.env.S3_REGION!,
            },
          }),
        },
      },
    }),
  ],
})
```

## 7. Testing Image Uploads

1. Start your development server: `npm run dev`
2. Go to `/admin`
3. Navigate to Media collection
4. Click "Create New"
5. Upload an image
6. Fill in the alt text
7. Save

The image should now be available at:

- Original: `http://localhost:3000/media/your-image.jpg`
- Thumbnail: `http://localhost:3000/media/your-image-thumbnail.jpg`
- Card: `http://localhost:3000/media/your-image-card.jpg`

## 8. Next.js Image Optimization

Update `next.config.js` to allow external images if using cloud storage:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    // Add your cloud storage domain if using it
    // domains: ['your-bucket.s3.amazonaws.com', 'vercel-blob-storage.com'],
  },
}

module.exports = nextConfig
```

## 9. Common Issues

### Issue: Images not displaying

- Check that `public/media` directory exists
- Verify file permissions
- Check browser console for errors
- Ensure `NEXT_PUBLIC_SERVER_URL` is set correctly

### Issue: Upload fails

- Check disk space
- Verify Sharp is installed: `npm install sharp`
- Check file size limits in Payload config

### Issue: Images too large

- Adjust `imageSizes` in Media collection
- Consider using Next.js Image optimization
- Implement lazy loading

## 10. Security Best Practices

- Set file size limits
- Validate file types
- Use virus scanning for user uploads
- Implement rate limiting
- Use cloud storage with CDN for production
