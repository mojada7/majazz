import FullScreenMain from '@/components/wraper/fullScreenMain'
import React from 'react'

function City() {
  return (
    <FullScreenMain>
        <div className='w-full h-fit py-2 text-center'>
            search input 
        </div>
        <div className='w-full h-fit py-2 text-center'>
            search filter 
        </div>
        <div className='w-full h-fit py-2 text-center'>
            catagory
        </div>
    </FullScreenMain>
  )
}

export default City