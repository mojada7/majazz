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
      <Sun className="h-8 w-8 text-white"/>
    )
  }
  const DarkBt = ()=> {
    return(
      <div>
      <Moon className="h-8 w-8 text-stone-900"/>
      
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
    <div onClick={changeTheme} className='fixed right-1 md:right-2 lg:right-4 top-6 w-10 h-10 rounded-full hover:cursor-pointer'>
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