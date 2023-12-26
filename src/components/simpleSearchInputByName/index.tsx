import React from 'react'
import Image from 'next/image'
import searchIcon from '../../../public/icon/search.png'
import SearchCityWrapper from '../searchCityWrapper'
function SimpleSearchInputByName({name} : {name : string}) {
  return (
      <SearchCityWrapper>
        <Image className='opacity-40' src={searchIcon} alt='شهرتو پیدا کن' width={20} />
        <input placeholder={name} className='w-[30vw] text-center border-none outline-none'/>
      </SearchCityWrapper>
          
  )
}

export default SimpleSearchInputByName