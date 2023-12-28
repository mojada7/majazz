import SearchItemeInput from '@/components/agahiComponents/searchItemeInput'
import CenterFlexCol from '@/components/wraper/centerFlexCol'
import FullScreenMain from '@/components/wraper/fullScreenMain'
import React from 'react'

function City() {
  return (
    <FullScreenMain>
        <CenterFlexCol>
            <div className='w-[80vw] md:w-[60vw] lg:w-[40vw] h-fit py-2 text-center me-10 mt-5'>
                <SearchItemeInput />
            </div>
            <div className='w-full h-fit py-2 text-center'>
                search filter 
            </div>
            <div className='w-full h-fit py-2 text-center'>
                catagory
            </div>
        </CenterFlexCol>
    </FullScreenMain>
  )
}

export default City