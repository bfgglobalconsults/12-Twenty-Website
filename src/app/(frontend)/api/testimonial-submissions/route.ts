import { NextResponse } from 'next/server'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const payload = await getPayload({ config: configPromise })

    const result = await payload.create({
      collection: 'testimonial-submissions',
      data: {
        ...body,
        status: 'pending',
      },
    })

    return NextResponse.json({ success: true, data: result }, { status: 201 })
  } catch (error) {
    console.error('Error creating testimonial submission:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to submit testimonial' },
      { status: 500 },
    )
  }
}
