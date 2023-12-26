import React from 'react'

function CityShortcut({city} : {city:string}) {
  return (
    <div className='w-[25%] py-3 text-center text-sm md:text-base hover:text-blue-500 hover:cursor-pointer'>{city}</div>
  )
}

export default CityShortcut