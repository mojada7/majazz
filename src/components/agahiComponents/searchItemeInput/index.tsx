import React from 'react'
import SeatchIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon'
import style from './style.module.css'
function SearchItemeInput() {
  return (
    <div className='w-[95vw] md:w-[40vw] px-1 rounded-xl border-[2px] dark:bg-stone-950 border-gray-300 mx-auto flex items-center md:py-1'>

        <input dir='rtl' className='w-full px-2 rounded-xl dark:bg-stone-950 border-none outline-none py-1 placeholder:text-[11px] md:placeholder:text-[12px] lg:placeholder:text-[13px]' placeholder='بگرد دنبال چیزی که میخوای ...'/>
        <div className={style.flip}>
            <SeatchIcon className='h-6 w-6 text-gray-400' />
        </div>

    </div>
  )
}

export default SearchItemeInput