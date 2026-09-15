import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@/payload.config'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const status = searchParams.get('status') || 'published'
    const limit = parseInt(searchParams.get('limit') || '50')

    const payload = await getPayload({ config })

    const insights = await payload.find({
      collection: 'insights',
      where: {
        status: { equals: status },
      },
      limit,
      depth: 2, // Populate relationships including featuredImage
      sort: '-publishedDate', // Sort by newest first
    })

    return NextResponse.json(insights, { status: 200 })
  } catch (error) {
    console.error('Error fetching insights:', error)
    return NextResponse.json({ error: 'Failed to fetch insights' }, { status: 500 })
  }
}
