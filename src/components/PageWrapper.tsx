'use client'

import { usePathname } from 'next/navigation'

interface PageWrapperProps {
  children: React.ReactNode
}

export default function PageWrapper({ children }: PageWrapperProps) {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <div className={`min-h-screen ${isHomePage ? 'pt-0' : 'pt-24'}`}>
      {children}
    </div>
  )
}
