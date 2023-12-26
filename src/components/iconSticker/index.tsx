import Image from 'next/image'
import React from 'react'

function IconSticker(src: any , alt : string) {
  return (
    <div>
        <Image src={src} fill alt={alt} />
    </div>
  )
}

export default IconSticker