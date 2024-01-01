import React from 'react'
import CategoryCard from '../categoryCard'
import HomeIcon from '@heroicons/react/24/solid/HomeModernIcon'
import MobileIcon from '@heroicons/react/24/solid/DevicePhoneMobileIcon'
import CarIcon from '@heroicons/react/24/solid/TruckIcon'
import JobIcon from '@heroicons/react/24/solid/IdentificationIcon'
import DigitalIcon from '@heroicons/react/24/solid/ComputerDesktopIcon'
import ClockIcon from '@heroicons/react/24/solid/ClockIcon'
import ServiceIcon from '@heroicons/react/24/solid/WrenchScrewdriverIcon'
import BusIcon from '@heroicons/react/24/solid/BuildingStorefrontIcon'

function CategorySection() {
  return (
    <div className='w-fit md:w-[90vw] lg:w-[85vw] mx-auto h-fit text-center flex flex-row-reverse overflow-hidden justify-center py-1 gap-1 lg:gap-6'>
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
        <CategoryCard title='الکترونیکی' >
            <DigitalIcon className='w-8 h-8'/>
        </CategoryCard>
        <CategoryCard title='وسایل شخصی' >
            <ClockIcon className='w-8 h-8'/>
        </CategoryCard>
        <CategoryCard title='خدمات' >
            <ServiceIcon className='w-8 h-8'/>
        </CategoryCard>
        <CategoryCard title='مشاغل' >
            <BusIcon className='w-8 h-8'/>
        </CategoryCard>
        <CategoryCard title='املاک' >
            <HomeIcon className='w-8 h-8'/>
        </CategoryCard>
        <CategoryCard title='موبایل' >
            <MobileIcon className='w-8 h-8'/>
        </CategoryCard>
        <CategoryCard title='وسیله نقلیه' >
            <CarIcon className='w-8 h-8'/>
        </CategoryCard>
    </div>
  )
}

export default CategorySection