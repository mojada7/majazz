
import React from 'react'
import CitySearchBar from '../citySearchBar'
import CityContainer from '../cityContainer'

function SearchCity() {
  return (
    <div className='w-[90%] lg:w-[70%] flex flex-col items-center'>
        <CitySearchBar />
        <CityContainer />
    </div>
  )
}

export default SearchCity