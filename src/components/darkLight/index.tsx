'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import light from '../../../public/icon/light.png'
import dark from '../../../public/icon/dark.png'
import { useTheme } from 'next-themes'

function DarkLight() {
  const {theme, resolvedTheme , setTheme} = useTheme()

  const [mounted, setmoundet] = useState(false)
  const changeTheme = ()=> {
    resolvedTheme == 'light' ? setTheme('dark'):setTheme('light')  }

  
  const LightBt = ()=> {
    return(
      <Image alt='Lightmode' fill src={light} />
    )
  }
  const DarkBt = ()=> {
    return(
      <Image alt='Darkmode' fill src={dark} />
    )
  }

  useEffect(()=> {
    setmoundet(true)
  },[])

  if (!mounted) {
    return null
  }

  return (
    <div onClick={changeTheme} className='fixed right-4 top-4 w-10 h-10 rounded-full hover:cursor-pointer'>
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