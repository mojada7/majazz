import BackButton from '@/components/backButton'
import Msg from '@/components/msg'
import FullScreenMain from '@/components/wraper/fullScreenMain'
import React from 'react'

function ChatRoom({params} : {params : {id : string}}) {
  const msgs = [
    {
      message: 'سلام', sender : 0, date : '11:21'
    },
    {
      message: 'سلام بفرمایید', sender : 1, date : '11:21'
    },
    {
      message: 'هنوز موجوده؟', sender : 0, date : '11:24'
    },
    {
      message: 'بله', sender : 1, date : '11:24'
    },
    {
      message: 'قیمت آخرش چنده؟', sender : 0, date : '11:25'
    }
  ]
  return (
    <FullScreenMain>
      <div className='absolute top-2 left-2 px-4 py-2 rounded-lg text-white'>
      <BackButton />
      </div>

      <div className='h-[6%] md:h-[8%] lg:h-[10%] w-full bg-sky-300 dark:bg-sky-950'>

      </div>
      <div className='w-full lg:w-[40%] h-[94%] md:h-[92%] lg:h-[90%]'>
        <div className='w-full h-full flex flex-col justify-start items-center overflow-scroll no-scrollbar gap-[2px] pt-6'>
        <div className='w-full px-2 py-2'>
          {msgs.map(msg=>{
            return(
              msg.sender ? (
              <div className='flex mt-1' key={Math.random()*10000}>
                <Msg msgData={msg}/>
              </div>
              ) : (
                <div className='flex mt-1' dir='rtl' key={Math.random()*10000}>
                <Msg msgData={msg}/>
              </div>
              )
            )
          })}
          </div>
        </div>
        
      </div>
    </FullScreenMain>
  )
}

export default ChatRoom