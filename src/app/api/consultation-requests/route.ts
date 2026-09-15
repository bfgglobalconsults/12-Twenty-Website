import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@/payload.config'

// Rate limiting store (in-memory, use Redis in production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

// Simple rate limiting function
function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = rateLimitMap.get(ip)

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60000 }) // 1 minute window
    return true
  }

  if (limit.count >= 3) {
    // Max 3 submissions per minute
    return false
  }

  limit.count++
  return true
}

// Spam detection helpers
function detectSpam(data: any): boolean {
  const { fullName, email, notes } = data

  // Check for suspicious patterns
  const suspiciousPatterns = [
    /https?:\/\//i, // URLs in name
    /\b(viagra|cialis|casino|crypto|bitcoin)\b/i, // Common spam keywords
    /<script|<iframe|javascript:/i, // Script injection attempts
  ]

  const textToCheck = `${fullName} ${email} ${notes || ''}`

  return suspiciousPatterns.some((pattern) => pattern.test(textToCheck))
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip =
      request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'

    // Rate limiting check
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 },
      )
    }

    const body = await request.json()

    const { projectType, projectStage, fullName, email, phone, budget, notes } = body

    // Validate required fields
    if (!projectType || !projectStage || !fullName || !email || !phone || !budget) {
      return NextResponse.json({ error: 'All required fields must be provided' }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    // Spam detection
    if (detectSpam(body)) {
      console.log('Spam detected in submission from:', ip)
      // Silently reject but pretend it succeeded
      return NextResponse.json(
        {
          success: true,
          message: 'Consultation request submitted successfully',
        },
        { status: 201 },
      )
    }

    // Get Payload instance
    const payload = await getPayload({ config })

    // Create consultation request in Payload
    const consultationRequest = await payload.create({
      collection: 'consultation-requests',
      data: {
        projectType,
        projectStage,
        fullName,
        email,
        phone,
        budget,
        notes: notes || '',
        status: 'new',
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Consultation request submitted successfully',
        id: consultationRequest.id,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error('Error creating consultation request:', error)
    return NextResponse.json(
      { error: 'Failed to submit consultation request. Please try again.' },
      { status: 500 },
    )
  }
}
