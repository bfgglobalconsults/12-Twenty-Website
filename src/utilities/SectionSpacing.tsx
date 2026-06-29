import React from 'react'

interface SectionSpacingProps {
  children: React.ReactNode
}

const SectionSpacing = ({ children }: SectionSpacingProps) => {
  return <div className="px-6 py-6 lg:px-12 lg:py-12">{children}</div>
}

export default SectionSpacing
