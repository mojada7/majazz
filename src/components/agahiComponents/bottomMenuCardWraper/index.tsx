import React, { ReactNode } from 'react'

function BottomMenuCardWraper({children, text} : {children: ReactNode, text: string}) {
  return (
    <div className="h-full w-[20%] flex flex-col gap-2 lg:flex-row lg:gap-4 justify-center items-center">
      {children}
      <div className='text-xs md:text-sm'>
        {text}
      </div>

    </div>
  )
}

export default BottomMenuCardWraper