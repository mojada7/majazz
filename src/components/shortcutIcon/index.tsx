import React from 'react'

function ShortcutIcon({children} : {children : React.ReactNode}) {
  return (
    <div className='w-[20%] border-solid text-center text-xs md:text-sm pb-2 hover:text-blue-700 hover:cursor-pointer'>{children}</div>
  )
}

export default ShortcutIcon