import BackButton from '@/components/backButton'
import MessageCard from '@/components/messageCard'
import FullScreenMain from '@/components/wraper/fullScreenMain'
import React from 'react'

function Messenger() {
  const message1 = [{contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}]
  
  const messages = ['somthing','somthing','somthing','somthing','somthing','somthing','somthing','somthing','somthing','somthing','somthing','somthing','somthing','somthing','somthing','somthing','somthing','somthing','somthing','somthing']
  return (
    <FullScreenMain>
            <div className='absolute top-2 left-2 px-4 py-2 rounded-lg text-white'>
      <BackButton />
      </div>
            <div className='h-[6%] md:h-[8%] lg:h-[10%] w-full bg-sky-300 dark:bg-sky-950'>

            </div>
      <div className='w-full lg:w-[40%] flex h-[94%] md:h-[92%] lg:h-[90%]'>



        <div className='w-full h-full flex flex-col justify-start items-center overflow-scroll no-scrollbar gap-[2px]'>
          {message1.map(i=>{
      return(
        <MessageCard contactName={i.contact} lastMessage={i.messages[0].message} date={i.messages[0].date} key={Math.random()*19999344} chatRoomId={12} />

      )
      })}

      </div>

      </div>

    </FullScreenMain>
  )
}

export default Messenger