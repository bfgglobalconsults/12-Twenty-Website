'use client'

// Stub component to replace the problematic VercelBlobClientUploadHandler
// that tries to import server-only modules on the client
export const VercelBlobClientUploadHandler = () => {
  return null
}

// Stub for createClientUploadHandler
export const createClientUploadHandler = () => {
  return () => null
}

// Re-export as default to cover all import patterns
export default {
  VercelBlobClientUploadHandler,
  createClientUploadHandler,
}
