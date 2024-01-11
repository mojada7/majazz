import React from 'react'
import Tik from '@heroicons/react/16/solid/ChevronLeftIcon'
import Tik2 from '@heroicons/react/16/solid/ChevronDoubleLeftIcon'

function Msg({msgData} : any) {
  return (



            <div className={`${msgData.sender?('bg-sky-100 dark:bg-black'):('bg-sky-200 dark:bg-violet-900')} px-2 py-1 rounded-2xl rounded-es-none flex items-end gap-4 `}>
              <div className='text-[10px]'>
                {msgData.date}
              </div>
              <div className='py-2'>
                {msgData.message}
              </div>
              <div className='text-[10px] text-white'>
                  {!msgData.sender&&(
                    <Tik2 className='h-5 w-5' />
                  )}
              </div>

            </div>



      

  )
}

export default Msg