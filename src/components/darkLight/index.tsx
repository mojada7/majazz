'use client'
import Image from 'next/image'
import React from 'react'
import ld from '../../../public/icon/ld.png'
import { useTheme } from 'next-themes'

function DarkLight() {
  const {theme, setTheme} = useTheme()

  const changeTheme = ()=> {
    theme == 'light' ? setTheme('dark'):setTheme('light')
    console.log(theme)
  }

  return (
    <div onClick={changeTheme} className='fixed right-4 top-4 w-10 h-10 rounded-full bg-white hover:cursor-pointer'>
      <Image alt='darkmode-lightmode' fill src={ld} />
    </div>
  )
}

export default DarkLight