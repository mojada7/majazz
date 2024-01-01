import React, { ReactNode } from 'react'
import AdCard from '../adCard'

function AdCardsHolder() {
  return (
    <div className='w-full h-fit flex flex-wrap justify-center gap-1 lg:gap-20 mt-1 lg:mt-4'>
        <AdCard />
        <AdCard />
        <AdCard />
        <AdCard />
        <AdCard />
        <AdCard />
    </div>
  )
}

export default AdCardsHolder