import type { Adapter } from '@payloadcms/plugin-cloud-storage/types'
import { put, del, list } from '@vercel/blob'

interface VercelBlobAdapterArgs {
  token: string
}

export const vercelBlobAdapter = ({ token }: VercelBlobAdapterArgs): Adapter => ({
  name: 'vercel-blob',
  
  async handleUpload({ data, filename }) {
    const blob = await put(filename, data, {
      access: 'public',
      token,
    })
    
    return {
      filename,
      url: blob.url,
    }
  },
  
  async handleDelete({ filename }) {
    try {
      const { blobs } = await list({ token })
      const blob = blobs.find((b) => b.pathname === filename)
      
      if (blob) {
        await del(blob.url, { token })
      }
    } catch (error) {
      console.error('Error deleting from Vercel Blob:', error)
    }
  },
  
  async generateURL({ filename }) {
    const { blobs } = await list({ token })
    const blob = blobs.find((b) => b.pathname === filename)
    return blob?.url || ''
  },
})
