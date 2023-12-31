import React from 'react'

function AdCard() {
  return (
    <div className='h-fit w-full lg:w-fit flex text-sm lg:text-md justify-start gap-10 py-4 px-4 rounded-xl bg-gray-100 dark:bg-stone-900'>
        <div className='bg-gray-200 dark:bg-stone-600 h-[8rem] lg:h-[10rem] w-[8rem] lg:w-[10rem]'></div>
        <div className=' flex flex-col justify-between'>
            <div className='truncates h-[2rem] w-fit'>
                گوشی سامسونگ مدل اس22 الترا بدون نقطه
            </div>
            <div className='w-[100%] text-right'>
                200,000,000 R
            </div>
            <div className='w-[100%] text-right'>
                بلوار کشاورز
            </div>
            <div className='flex justify-between'>
                <div>لحظاتی پیش</div>
                <div>کاربر تایید شده</div>
            </div>
        </div>
    </div>
  )
}

export default AdCard