'use client'
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from 'swiper/modules'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './style.css';
import Image from 'next/image';

// import required modules


function SwiperSlider({pics} : {pics : any[]}) {
  return (
        <>
      <Swiper

        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

          {
            pics.map(pic=> {
              return(
                <SwiperSlide key={Math.random()*10000}>
                  <div className='w-full h-full'>
                    <Image src={pic} alt='' fill className='block object-cover'/>
                  </div>
                </SwiperSlide>

              )
            })
          }

      </Swiper>
    </>
  )
}

export default SwiperSlider