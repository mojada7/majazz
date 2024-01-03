import FullScreenMain from '@/components/wraper/fullScreenMain'
import React from 'react'
import adpic from '../../../../../public/pic/galaxy.webp'
import PicSldierShow from '@/components/agahiComponents/picSliderShow'
import SwiperSlider from '@/components/agahiComponents/swiperSlider'

function AdPage() {
  return (
    <FullScreenMain>
      <div className='w-full h-[40vh] lg:h-[70vh] mt-11'>
        <SwiperSlider pics={[adpic ,adpic, adpic, adpic]} />
      </div>
      <div className='w-full h-[40vh] lg:h-[30vh'>

      </div>
    </FullScreenMain>
  )
}

export default AdPage