import React from 'react'

export default function PricingSection() {
  const plans = [
    {
      title: 'Silver Package',
      price: '$2,000',
      features: [
        '25 Listings',
        '10 Featured Listings',
        'Listing Analytics',
        '24/7 Support',
        'Custom Branding',
      ],
    },
    {
      title: 'Diamond Package',
      price: '$4,000',
      features: [
        '75 Listings',
        '25 Featured Listings',
        'Listing Analytics',
        '24/7 Support',
        'Custom Branding',
        'Advanced SEO Tools',
      ],
    },
    {
      title: 'Platinum Package',
      price: '$6,000',
      features: [
        'Unlimited Listings',
        '50 Featured Listings',
        'Listing Analytics',
        '24/7 Priority Support',
        'Custom Branding',
        'Advanced SEO Tools',
        'Dedicated Account Manager',
      ],
    },
  ]

  return (
    <section className="py-16 bg-coral-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Elevate Your Real Estate Marketing with Estatein Advertising Solutions
          </h2>
          <p className="text-white/90 max-w-3xl mx-auto">
            Targeted reach, brand exposure, and unmatched visibility for your properties
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white rounded-lg p-8 hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
              <p className="text-4xl font-bold text-coral-500 mb-6">
                {plan.price}
                <span className="text-lg text-gray-600">/month</span>
              </p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-coral-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
