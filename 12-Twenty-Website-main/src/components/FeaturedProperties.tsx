import React from 'react'
import PropertyCard from './PropertyCard'

export default function FeaturedProperties() {
  const properties = [
    {
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
      price: '$590,693',
      title: 'Tranquil Haven in the Woods',
      address: '103 Wright CourtBurien, WA 98168',
      beds: 4,
      baths: 3,
      sqft: '2,500 sq ft',
    },
    {
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
      price: '$590,693',
      title: 'Serene Retreat by the Lake',
      address: '103 Wright CourtBurien, WA 98168',
      beds: 3,
      baths: 2,
      sqft: '2,000 sq ft',
    },
    {
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      price: '$590,693',
      title: 'Charming Cottage in the Meadow',
      address: '103 Wright CourtBurien, WA 98168',
      beds: 4,
      baths: 4,
      sqft: '3,200 sq ft',
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Featured Properties
            </h2>
            <p className="text-gray-600">
              Explore our handpicked selection of featured properties. Each listing offers a glimpse
              into exceptional homes and investments available through Estatein. Click "View
              Details" for more information.
            </p>
          </div>
          <button className="hidden md:block px-6 py-3 border-2 border-gray-800 text-gray-800 rounded hover:bg-gray-800 hover:text-white transition-colors">
            View All Properties
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </div>
    </section>
  )
}
