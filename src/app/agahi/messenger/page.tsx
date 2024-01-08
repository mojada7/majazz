import FullScreenMain from '@/components/wraper/fullScreenMain'
import React from 'react'

function Messenger() {
  const message1 = [{contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}, {contact:'Mohammad', messages:[{message : 'این یک پیام الکی در مورد پرسیدن قیمت محصوله', date : '22:17'}]}]
  
  const messages = ['somthing','somthing','somthing','somthing','somthing','somthing','somthing','somthing','somthing','somthing','somthing','somthing','somthing','somthing','somthing','somthing','somthing','somthing','somthing','somthing']
  return (
    <FullScreenMain>
            <div className='h-[6%] md:h-[8%] lg:h-[10%] w-full bg-sky-300 dark:bg-sky-950'>

            </div>
      <div className='w-full lg:w-[40%] h-[94%] md:h-[92%] lg:h-[90%]'>


        <div className='w-full h-full flex flex-col justify-start items-center overflow-scroll no-scrollbar gap-[2px]'>
          {message1.map(i=>{
      return(
      <div className='w-[99%] py-2 px-1 pe-2 text-center rounded-md bg-gray-50 dark:bg-black flex justify-between items-center' key={Math.random()*100000}>
      <div className='w-[4rem] lg:w-[5rem] h-[4rem] lg:h-[5rem] rounded-full bg-gray-200 dark:bg-stone-900'>

      </div>
      <div className='h-full py-2 flex flex-col justify-between grow px-2'>
        <div className='w-fit text-md ps-1'>
          {i.contact}
        </div>
        <div className='ms-6 text-right text-xs h-4 overflow-hidden mb-1 text-gray-500 dark:text-gray-200'>
          {i.messages[0].message}
        </div>
      </div>
      <div>
      <div className='flex flex-col gap-2 items-center'>
            <div className='text-sm text-gray-400 dark:text-gray-300'>
              {i.messages[0].date}
            </div>
            <div className='rounded-full text-sm bg-green-400 px-2 pt-[2px] text-white w-fit'>
              2
            </div>
            
          </div>
      </div>
    </div>
  )
})}

</div>

      </div>

    </FullScreenMain>
  )
}

export default Messenger