import Link from 'next/link'
import React from 'react'

function CityShortcut({city, cityLink} : {city:string, cityLink: string}) {
  return (
    <div  className='w-[25%] py-3 text-center text-sm md:text-base hover:text-blue-500 hover:cursor-pointer'>
    <Link href={cityLink}>
        {city}
    </Link>
    </div>

  
  )
}

export default CityShortcut