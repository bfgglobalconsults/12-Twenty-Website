import React from 'react'
import './styles.css'

export const metadata = {
  description: 'Find your dream property with our comprehensive real estate platform.',
  title: '12Twenty Group - Find Your Perfect Home',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return <>{children}</>
}
