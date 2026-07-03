export default function VideoShowcase() {
  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            See how we deliver integrated infrastructure programs with precision, transparency, and
            accountability at every stage of the project lifecycle.
          </h2>
        </div>

        <div className="relative rounded-3xl overflow-hidden bg-gray-900 aspect-video max-w-5xl mx-auto">
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-16 h-16 bg-coral-500 rounded-full flex items-center justify-center hover:bg-coral-600 transition-colors">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
          <video
            className="w-full h-full object-cover opacity-50"
            poster="/assets/video-thumbnail.jpg"
          >
            <source src="/assets/showcase-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}
