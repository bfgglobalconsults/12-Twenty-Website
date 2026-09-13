'use client'

import { useState } from 'react'
import ConsultationModal from './ConsultationModal'

interface ConsultationButtonProps {
  className?: string
  children?: React.ReactNode
}

export default function ConsultationButton({ className, children }: ConsultationButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
    {/* consult button */}
      <button onClick={() => setIsModalOpen(true)} className={className}>
        {children || 'Start Your Project'}
      </button>
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
