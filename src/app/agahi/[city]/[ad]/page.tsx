import FullScreenMain from '@/components/wraper/fullScreenMain'
import React from 'react'
import adpic from '../../../../../public/pic/galaxy.webp'
import adpic2 from '../../../../../public/pic/galaxy2.jpg'
import adpic3 from '../../../../../public/pic/galaxy3.png'
import adpic4 from '../../../../../public/pic/galaxy4.jpg'
import SwiperSlider from '@/components/agahiComponents/swiperSlider'

function AdPage() {
  return (
    <FullScreenMain>
      <div className='w-full h-[40vh] lg:w-[40vw] lg:h-[60vh] mt-11'>
        <SwiperSlider pics={[adpic ,adpic2, adpic3, adpic4]} />
      </div>
      <div className='w-full h-[40vh] lg:h-[30vh'>

      </div>
    </FullScreenMain>
  )
}

export default AdPage