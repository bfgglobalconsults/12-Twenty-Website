export default function AboutHero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url("/assets/about-image.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-gray-900/90" />

      <div className="relative max-w-7xl mx-auto px-8 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <span className="inline-block border border-coral-500 text-coral-500 px-4 py-2 rounded-full text-sm mb-6 backdrop-blur-sm">
            Lorem ipsum dolor sit amet consectetur
          </span>

          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">About Us</h1>

          <p className="text-white/90 text-lg max-w-xl">
            Lorem ipsum dolor sit amet consectetur. Consequat diam ultrices pellentesque molestie
            tempus vehicula accumsan at. Eget accumsan tempor eleifend bibendum. Tempor porttitor et
            augue convallis molestie.
          </p>
        </div>
      </div>
    </section>
  )
}
