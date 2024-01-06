import DomTester from '@/components/domTester'
import React, { ReactNode } from 'react'

function AgahiLayout({children}:{children:ReactNode}) {
  return (
    <>
    <DomTester />
    {children}

    </>
  )
}

export default AgahiLayout