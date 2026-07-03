import React from 'react'
import { Urbanist } from 'next/font/google'
import './styles.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-urbanist',
})

export const metadata = {
  description: 'Find your dream property with our comprehensive real estate platform.',
  title: 'Dream Estates - Find Your Perfect Home',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={urbanist.variable}>
      <body className={urbanist.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
