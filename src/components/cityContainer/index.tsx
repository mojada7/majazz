import React from 'react'
import CityShortcut from '../cityShortcut'

function CityContainer() {
  return (
    <div className='w-[90%] md:w-[80%] lg:w-[70%] mt-4 pb-4 flex justify-center items-center flex-wrap border-b border-gray-300'>
        <CityShortcut cityLink='/agahi/main/tehran' city={'تهران'} />
        <CityShortcut cityLink='/agahi/main/mashhad' city={'مشهد'} />
        <CityShortcut cityLink='/agahi/main/esfahan' city={'اصفهان'} />
        <CityShortcut cityLink='/agahi/main/shiraz' city={'شیراز'} />
        <CityShortcut cityLink='/agahi/main/tabriz' city={'تبزیر'} />
        <CityShortcut cityLink='/agahi/main/yazd' city={'یزد'} />
        <CityShortcut cityLink='/agahi/main/kerman' city={'کرمان'} />
        <CityShortcut cityLink='/agahi/main/rasht' city={'رشت'} />
        <CityShortcut cityLink='/agahi/main/zanjan' city={'زنجان'} />
        <CityShortcut cityLink='/agahi/main/bandar_abbas' city={'بندر عباس'} />
        <CityShortcut cityLink='/agahi/main/sari' city={'ساری'} />
        <CityShortcut cityLink='/agahi/main/karaj' city={'کرج'} />
    </div>
  )
}

export default CityContainer