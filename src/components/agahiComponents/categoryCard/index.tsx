import CenterFlexCol from '@/components/wraper/centerFlexCol'
import React, { ReactNode } from 'react'

function CategoryCard({children, title} : {children : ReactNode, title : string}) {
  return (
    <div className='h-fit hover:scale-105'>
    <div className='w-[72px] md:w-[82px] h-full bg-gray-200 dark:bg-stone-900 rounded-md py-2'>
        <CenterFlexCol>
        <div className=''>
            {children}
        </div>

        <div className='text-[10px] md:text-xs mt-1 tracking-tighter'>
            {title}
        </div>
        </CenterFlexCol>

    </div>
    </div>

  )
}

export default CategoryCard