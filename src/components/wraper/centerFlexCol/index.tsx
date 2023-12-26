import React, { ReactNode } from 'react'

function CenterFlexCol({children}: {children: React.ReactNode}) {
  return (
    <div className='w-full h-fit flex flex-col justify-center items-center'>
        {children}
    </div>
  )
}

export default CenterFlexCol