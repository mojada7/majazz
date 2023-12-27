import React, { ReactNode } from 'react'

function FullScreenMain({children} : {children : ReactNode}) {
  return (
    <main className='w-[100vw] h-[100vh] overflow-hidden'>
        {children}
    </main>
  )
}

export default FullScreenMain