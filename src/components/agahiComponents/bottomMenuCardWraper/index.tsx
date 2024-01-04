import Link from 'next/link'
import React, { ReactNode } from 'react'

function BottomMenuCardWraper({children, text, link} : {children: ReactNode, text: string, link: string}) {
  return (
    <Link href={link}  className="h-full w-[20%] flex flex-col gap-2 lg:flex-row lg:gap-4 justify-center items-center hover:scale-105">
      


      {children}
      <div className='text-xs md:text-sm'>
        {text}
      </div>
      </Link>


  )
}

export default BottomMenuCardWraper