import React from 'react'

function Msg({msgData} : {
  msgData : {message: string, sender : number, date : string}}) {
  return (



            <div className={`border ${msgData.sender?('bg-white'):('bg-sky-100')} px-2 py-1 rounded-2xl rounded-es-none flex items-end gap-4 border border-gray-300`}>
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