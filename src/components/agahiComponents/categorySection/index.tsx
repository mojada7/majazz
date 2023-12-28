import React from 'react'
import CategoryCard from '../categoryCard'
import HomeIcon from '@heroicons/react/24/solid/HomeModernIcon'
import MobileIcon from '@heroicons/react/24/solid/DevicePhoneMobileIcon'
import CarIcon from '@heroicons/react/24/solid/TruckIcon'
import JobIcon from '@heroicons/react/24/solid/IdentificationIcon'

function CategorySection() {
  return (
    <div className='w-[95vw] md:w-[90vw] lg:w-[85vw] h-fit py-2 text-center mt-4 flex flex-row-reverse flex-wrap justify-center gap-2 md:gap-4 lg:gap-6'>
        <CategoryCard title='املاک' >
            <HomeIcon className='w-8 h-8'/>
        </CategoryCard>
        <CategoryCard title='موبایل' >
            <MobileIcon className='w-8 h-8'/>
        </CategoryCard>
        <CategoryCard title='وسیله نقلیه' >
            <CarIcon className='w-8 h-8'/>
        </CategoryCard>
        <CategoryCard title='استخدام' >
            <JobIcon className='w-8 h-8'/>
        </CategoryCard>
        <CategoryCard title='املاک' >
            <HomeIcon className='w-8 h-8'/>
        </CategoryCard>
        <CategoryCard title='املاک' >
            <HomeIcon className='w-8 h-8'/>
        </CategoryCard>
        <CategoryCard title='املاک' >
            <HomeIcon className='w-8 h-8'/>
        </CategoryCard>
        <CategoryCard title='املاک' >
            <HomeIcon className='w-8 h-8'/>
        </CategoryCard>
    </div>
  )
}

export default CategorySection