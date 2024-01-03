'use client'
import Image from 'next/image'
import React, { useState } from 'react'

function PicSldierShow({pics} : {pics : any[]}) {
    const [p, setp] = useState(pics[0])
    console.log(pics)
  return (
    <div className='w-full h-full bg-lime-200'>
        <div className='w-full h-[80%] bg-lime-300 relative'>
            <Image src={p} alt='' fill />
            <div className='absolute left-[30%] bottom-8 w-[40%] h-8 bg-white '>

            </div>
        </div>
        <div className='w-full h-[20%] flex justify-center items-center gap-2   '>
            {pics.map(pic=>{
                return(
                    <div key={Math.random()*10000} className='h-[80%] w-[5rem] relative'>
                        <Image src={pic} alt='' fill />
                    </div>
                )
            })}

        </div>
    </div>
  )
}

export default PicSldierShow