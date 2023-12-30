import React from 'react'
import CityShortcut from '../cityShortcut'

function CityContainer() {
  return (
    <div className='w-[90%] md:w-[80%] lg:w-[70%] mt-4 pb-4 flex justify-center items-center flex-wrap border-b border-gray-300'>
        <CityShortcut cityLink='/agahi/tehran' city={'تهران'} />
        <CityShortcut cityLink='/agahi/mashhad' city={'مشهد'} />
        <CityShortcut cityLink='/agahi/esfahan' city={'اصفهان'} />
        <CityShortcut cityLink='/agahi/shiraz' city={'شیراز'} />
        <CityShortcut cityLink='/agahi/tabriz' city={'تبزیر'} />
        <CityShortcut cityLink='/agahi/yazd' city={'یزد'} />
        <CityShortcut cityLink='/agahi/kerman' city={'کرمان'} />
        <CityShortcut cityLink='/agahi/rasht' city={'رشت'} />
        <CityShortcut cityLink='/agahi/zanjan' city={'زنجان'} />
        <CityShortcut cityLink='/agahi/bandar_abbas' city={'بندر عباس'} />
        <CityShortcut cityLink='/agahi/sari' city={'ساری'} />
        <CityShortcut cityLink='/agahi/karaj' city={'کرج'} />
    </div>
  )
}

export default CityContainer