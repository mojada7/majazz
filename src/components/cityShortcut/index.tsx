import Link from 'next/link'
import React from 'react'

function CityShortcut({city, cityLink} : {city:string, cityLink: string}) {
  return (

    <Link className='w-[25%] py-3 text-center text-sm md:text-base hover:text-blue-500 hover:cursor-pointer hover:animate-pulse' href={cityLink}>
        {city}
    </Link>


  
  )
}

export default CityShortcut