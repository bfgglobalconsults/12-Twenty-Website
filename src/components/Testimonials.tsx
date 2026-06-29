import React from 'react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Wade Warren',
      location: 'USA, California',
      text: "The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel. It's the peace of mind I was looking for.",
      rating: 5,
    },
    {
      name: 'Emelie Thomson',
      location: 'USA, Florida',
      text: "I can't believe how easy it was to set up my CypherPlay account. The mobile app is user-friendly, and I can manage my card on the go. Highly recommended!",
      rating: 5,
    },
    {
      name: 'Jenny Wilson',
      location: 'USA, Nevada',
      text: 'CypherPlay has transformed the way I make payments. The virtual card feature adds an extra layer of security. I love the peace of mind it brings to my online transactions.',
      rating: 5,
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Read the success stories and heartfelt testimonials from our valued clients. Discover why
          they chose Estatein for their real estate needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-300 rounded-full" />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
