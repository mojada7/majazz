import React from 'react'

function Msg({msgData} : {
  msgData : {message: string, sender : number, date : string}}) {
  return (



            <div className={`${msgData.sender?('bg-sky-100 dark:bg-black'):('bg-sky-200 dark:bg-violet-600')} px-2 py-1 rounded-2xl rounded-es-none flex items-end gap-4 `}>
              <div className='text-[10px]'>
                {msgData.date}
              </div>
              <div className='py-2'>
                {msgData.message}
              </div>
              <div className='text-[10px]'>
                  {!msgData.sender&&('+')}
              </div>

            </div>



      

  )
}

export default Msg