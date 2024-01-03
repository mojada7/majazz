'use client'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Sun from '@heroicons/react/24/solid/SunIcon'
import Moon from '@heroicons/react/24/solid/MoonIcon'

function DarkLight() {
  const {theme, resolvedTheme , setTheme} = useTheme()

  const [mounted, setmoundet] = useState(false)
  const changeTheme = ()=> {
    resolvedTheme == 'light' ? setTheme('dark'):setTheme('light')  }

  
  const LightBt = ()=> {
    return(
      <Sun className="w-7 lg:h-8 h-7 lg:w-8 text-white"/>
    )
  }
  const DarkBt = ()=> {
    return(
      <div>
      <Moon className="w-7 lg:h-8 h-7 lg:w-8 text-stone-900"/>
      
      </div>

    )
  }

  useEffect(()=> {
    setmoundet(true)
  },[])

  if (!mounted) {
    return null
  }

  return (
    <div onClick={changeTheme} className='absolute right-1 md:right-2 lg:right-4 top-1 md:top-2 lg:top-4 w-10 h-10 rounded-full hover:cursor-pointer z-0'>
      {
        resolvedTheme=='light'? (
          <DarkBt />
        ) : (
          <LightBt />
        )
      }
    </div>
  )
}

export default DarkLight