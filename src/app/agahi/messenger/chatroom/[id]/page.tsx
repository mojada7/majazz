
import Msg from '@/components/msg'
import MsgInputCard from '@/components/msgInputCard'
import FullScreenMain from '@/components/wraper/fullScreenMain'
import Link from 'next/link'
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
            <div className='absolute top-2 lg:top-3 left-2 px-4 py-2 rounded-lg text-white z-30'>
        <Link href={'/agahi/messenger'} >Back</Link>
      </div>

        <div className='h-[6%] md:h-[8%] lg:h-[10%] w-full bg-violet-800 dark:bg-violet-600 z-20 absolute'>

        </div>
        <div className='w-full lg:w-[35vw] h-[90%] flex flex-col justify-start items-center overflow-scroll no-scrollbar gap-[2px] fixed bottom-0 left-0 z-0' >
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
          <div className='absolute w-full h-[4rem] bottom-0 left-0 bg-sky-100 dark:bg-stone-700 flex justify-between items-center px-1 gap-2'>
            <MsgInputCard />
          </div>
          </div>
          
        </div>
        

    </FullScreenMain>
  )
}

export default ChatRoom