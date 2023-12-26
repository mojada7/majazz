import React from 'react'
import CityShortcut from '../cityShortcut'

function CityContainer() {
  return (
    <div className='w-[90%] md:w-[80%] lg:w-[70%] mt-4 pb-4 flex justify-center items-center flex-wrap border-b border-gray-300'>
        <CityShortcut city={'تهران'} />
        <CityShortcut city={'مشهد'} />
        <CityShortcut city={'اصفهان'} />
        <CityShortcut city={'شیراز'} />
        <CityShortcut city={'تبزیر'} />
        <CityShortcut city={'یزد'} />
        <CityShortcut city={'کرمان'} />
        <CityShortcut city={'رشت'} />
        <CityShortcut city={'تبریز'} />
        <CityShortcut city={'بندر عباس'} />
        <CityShortcut city={'ساری'} />
        <CityShortcut city={'کرج'} />
    </div>
  )
}

export default CityContainer