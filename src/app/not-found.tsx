import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#E85D3F] mb-4">404</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved. Let's get you back on
            track.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#E85D3F] text-white rounded-full hover:bg-[#d54d2d] transition-all duration-300 font-semibold"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Go Home
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#E85D3F] text-[#E85D3F] rounded-full hover:bg-[#E85D3F] hover:text-white transition-all duration-300 font-semibold"
          >
            View Projects
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link href="/about" className="text-[#E85D3F] hover:underline">
              About Us
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/services" className="text-[#E85D3F] hover:underline">
              Services
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/insights" className="text-[#E85D3F] hover:underline">
              Insights
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/contact" className="text-[#E85D3F] hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
