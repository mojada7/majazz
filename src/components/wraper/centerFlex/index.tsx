import React, { ReactNode } from 'react'

function CenterFlex({children}: {children: React.ReactNode}) {
  return (
    <div className='w-full h-full flex justify-center items-center overflow-hidden'>
        {children}
    </div>
  )
}

export default CenterFlex