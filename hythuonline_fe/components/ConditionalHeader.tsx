'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import ScrollToTop from './ScrollToTop'

export default function ConditionalHeader() {
  const pathname = usePathname()
  const isHiddenHeader = pathname?.startsWith('/xem-thiep') || pathname?.includes('/admin/quan-ly-thiep/edit')

  if (isHiddenHeader) {
    return null
  }

  return (
    <>
      <Header />
      <ScrollToTop />
    </>
  )
}

