import SearchItemeInput from '@/components/agahiComponents/searchItemeInput'
import CenterFlexCol from '@/components/wraper/centerFlexCol'
import FullScreenMain from '@/components/wraper/fullScreenMain'
import React from 'react'

function City() {
  return (
    <FullScreenMain>
        <CenterFlexCol>
            <div className='w-[80vw] h-fit py-2 text-center me-10 mt-2 md:mt-4 lg:mt-5 flex flex-col md:flex-row'>
                <div className='flex gap-2 mb-2 lg:mb-0 lg:me-10'>
                    <div className='w-[35vw] text-sm lg:w-[10vw] py-2 lg:my-auto bg-gray-200 dark:bg-stone-900 rounded-lg'>
                        خراسان رضوی
                    </div>
                    <div className='w-[35vw] text-sm lg:w-[10vw] py-2 lg:my-auto bg-gray-200 dark:bg-stone-900 rounded-lg'>
                        مشهد
                    </div>
                </div>
                <SearchItemeInput />
            </div>
            <div className='w-full h-fit py-2 text-center'>

            </div>
            <div className='w-full h-fit py-2 text-center'>

            </div>
        </CenterFlexCol>
    </FullScreenMain>
  )
}

export default City