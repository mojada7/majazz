import React from 'react'
import CategoryCard from '../categoryCard'
import HomeIcon from '@heroicons/react/24/outline/HomeModernIcon'
import MobileIcon from '@heroicons/react/24/outline/DevicePhoneMobileIcon'
import CarIcon from '@heroicons/react/24/outline/TruckIcon'
import JobIcon from '@heroicons/react/24/outline/IdentificationIcon'
import DigitalIcon from '@heroicons/react/24/outline/ComputerDesktopIcon'
import ClockIcon from '@heroicons/react/24/outline/ClockIcon'
import ServiceIcon from '@heroicons/react/24/outline/WrenchScrewdriverIcon'
import BusIcon from '@heroicons/react/24/outline/BuildingStorefrontIcon'

function CategorySection() {
  return (
    <div className='w-fit md:w-[90vw] lg:w-[85vw] mx-auto h-fit text-center flex flex-row-reverse overflow-hidden justify-center py-1 gap-1 lg:gap-6'>
        <CategoryCard title='املاک' >
            <HomeIcon className='w-7 h-7 lg:w-8 lg:h-8'/>
        </CategoryCard>
        <CategoryCard title='موبایل' >
            <MobileIcon className='w-7 h-7 lg:w-8 lg:h-8'/>
        </CategoryCard>
        <CategoryCard title='وسیله نقلیه' >
            <CarIcon className='w-7 h-7 lg:w-8 lg:h-8'/>
        </CategoryCard>
        <CategoryCard title='استخدام' >
            <JobIcon className='w-7 h-7 lg:w-8 lg:h-8'/>
        </CategoryCard>
        <CategoryCard title='الکترونیکی' >
            <DigitalIcon className='w-7 h-7 lg:w-8 lg:h-8'/>
        </CategoryCard>
        <CategoryCard title='وسایل شخصی' >
            <ClockIcon className='w-7 h-7 lg:w-8 lg:h-8'/>
        </CategoryCard>
        <CategoryCard title='خدمات' >
            <ServiceIcon className='w-7 h-7 lg:w-8 lg:h-8'/>
        </CategoryCard>
        <CategoryCard title='مشاغل' >
            <BusIcon className='w-7 h-7 lg:w-8 lg:h-8'/>
        </CategoryCard>
        <CategoryCard title='املاک' >
            <HomeIcon className='w-7 h-7 lg:w-8 lg:h-8'/>
        </CategoryCard>
        <CategoryCard title='موبایل' >
            <MobileIcon className='w-7 h-7 lg:w-8 lg:h-8'/>
        </CategoryCard>
        <CategoryCard title='وسیله نقلیه' >
            <CarIcon className='w-7 h-7 lg:w-8 lg:h-8'/>
        </CategoryCard>
    </div>
  )
}

export default CategorySection