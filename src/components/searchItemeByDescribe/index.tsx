import Image from 'next/image'
import React from 'react'
import searchIcon from '../../../public/icon/search.png'
import SearchCityWrapper from '../searchCityWrapper'

function SearchItemeByDescribe() {
  return (
  
      <SearchCityWrapper>
        <Image className='opacity-40' src={searchIcon} alt='شهرتو پیدا کن' width={20} />
        <div className=''>
          جستجوی توصیفی
        </div>
        
        
      </SearchCityWrapper>
  )
}

export default SearchItemeByDescribe