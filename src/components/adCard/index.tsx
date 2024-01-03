import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import pic from '../../../public/pic/galaxy2.jpg'

function AdCard() {
  return (
    <Link href={'/agahi/mashhad/15'}>
        <div className='h-fit w-full lg:w-fit flex text-sm justify-start gap-10 py-2 px-2 lg:py-4 lg:px-4 rounded-xl bg-gray-100 dark:bg-stone-900 hover:scale-105'>
        <div className='bg-gray-200 dark:bg-stone-600 h-[7rem] lg:h-[8rem] w-[7rem] lg:w-[8rem] relative'>
            <Image src={pic} alt='' fill/>
        </div>
        <div className=' flex flex-col justify-between grow'>
            <div className='h-[2rem] w-full text-right'>
                گوشی سامسونگ مدل اس22 الترا 
            </div>
            <div className='w-[100%] text-[10px] text-right'>
                200,000,000 R
            </div>
            <div className='w-[100%] text-[10px] text-right'>
                بلوار کشاورز
            </div>
            <div className='flex justify-between text-[10px]'>
                <div>لحظاتی پیش</div>
                <div>کاربر تایید شده</div>
            </div>
        </div>
    </div>
    </Link>

  )
}

export default AdCard