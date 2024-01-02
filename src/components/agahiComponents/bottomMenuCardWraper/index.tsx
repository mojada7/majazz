import React, { ReactNode } from 'react'

function BottomMenuCardWraper({children, text} : {children: ReactNode, text: string}) {
  return (
    <div className="h-full w-[20%] flex flex-wrap justify-center items-center">
      {children}
      <div className='text-xs md:text-sm px-2'>
        {text}
      </div>

    </div>
  )
}

export default BottomMenuCardWraper