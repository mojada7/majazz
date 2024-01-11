import Link from 'next/link'
import React from 'react'

function MessageCard({
    contactName, lastMessage, date, chatRoomId
} : {
    contactName : string, lastMessage : string, date : string , chatRoomId : number
}) {
  return (
    <Link href={`/agahi/messenger/chatroom/${chatRoomId}`} className='w-full px-1 pe-2 text-center bg-gray-50 dark:bg-stone-900 flex justify-between items-center' key={Math.random()*100000}>
    <div className='w-[4rem] lg:w-[5rem] h-[4rem] lg:h-[5rem] rounded-full bg-gray-200 dark:bg-stone-800 mb-2 mt-1'>

    </div>
    <div className='h-full py-2 flex flex-col justify-between grow px-2 border-b pb-4 dark:border-gray-600'>
      <div className='w-fit text-md ps-1'>
        {contactName}
      </div>
      <div className='ms-6 text-right text-xs h-4 overflow-hidden mb-1 text-gray-500 dark:text-gray-200'>
        {lastMessage}
      </div>
    </div>
    <div>
    <div className='flex flex-col gap-2 items-center'>
          <div className='text-sm text-gray-400 dark:text-gray-300'>
            {date}
          </div>
          <div className='rounded-full text-sm bg-green-400 px-2 pt-[2px] text-white w-fit'>
            2
          </div>
          
        </div>
    </div>
  </Link>
  )
}

export default MessageCard