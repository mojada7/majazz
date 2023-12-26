import Image from 'next/image'
import React from 'react'
import searchIcon from '../../../public/icon/search.png'

function CitySearchBar() {
  
  return (
    <div className='w-[90%] md:w-[50%] h-[2rem] mt-4 rounded-e-full flex justify-end pe-2 border-2 bg-white border-gray-300'>
      <input placeholder='... شهرتو پیدا کن' className='me-4 md:me-8 w-full border-none outline-none ps-3 text-end text-sm'/>
      <div className='mt-[5px] opacity-50'>
        <Image src={searchIcon} alt='شهرتو پیدا کن' width={20} />
      </div>
    </div>
  )
}

export default CitySearchBar