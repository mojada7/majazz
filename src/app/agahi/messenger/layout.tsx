import React, { ReactNode } from 'react'

function MsngerLayout({children} : {
    children : ReactNode
}) {
  return (
    <div className=' bg-violet-500 dark:bg-violet-950'>
        
        {
            children
        }
    </div>
  )
}

export default MsngerLayout