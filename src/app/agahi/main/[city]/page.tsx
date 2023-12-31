
import AdCardsHolder from '@/components/adCardsHolder'
import CategorySection from '@/components/agahiComponents/categorySection'
import SearchItemeInput from '@/components/agahiComponents/searchItemeInput'
import CenterFlexCol from '@/components/wraper/centerFlexCol'
import FullScreenMain from '@/components/wraper/fullScreenMain'
import React from 'react'

function City({ params }: { params: { city: string } }) {
    const cityOrigin : any = {
        mashhad : {
            cityFa : 'مشهد',
            cityState : 'خراسان رضوی'
        },
        tehran : {
            cityFa : 'تهران',
            cityState : 'تهران'
        },
        esfahan : {
            cityFa : 'اصفهان',
            cityState : 'اصفهان'
        },
        shiraz : {
            cityFa : 'شیراز',
            cityState : 'فارس'
        },
        tabriz : {
            cityFa : 'تبریز',
            cityState : 'آذربایجان غربی'
        },
        yazd : {
            cityFa : 'یزد',
            cityState : 'یزد'
        },
        kerman : {
            cityFa : 'کرمان',
            cityState : 'کرمان'
        },
        rasht : {
            cityFa : 'رشت',
            cityState : 'گیلان'
        },
        zanjan : {
            cityFa : 'زنجان',
            cityState : 'زنجان'
        },
        bandar_abbas : {
            cityFa : 'بندر عباس',
            cityState : 'هرمزگان'
        },
        sari : {
            cityFa : 'ساری',
            cityState : 'مازندران'
        },
        karaj : {
            cityFa : 'کرج',
            cityState : 'البرز'
        },
    }
  return (
    <FullScreenMain>
        <CenterFlexCol>
            <div className='w-[95vw] h-fit py-1 text-center mt-1 md:mt-4 lg:mt-5 flex flex-col md:flex-row overflow-hidden'>
                <div className='lg:w-[20vw]'>

                </div>
                <div className='flex text-xs md:text-sm gap-2 mb-2 lg:mb-0 lg:me-10'>
                    <div className='w-[30vw] md:w-[20vw] lg:w-[10vw] py-1 md:py-2 lg:my-auto bg-gray-200 dark:bg-stone-900 rounded-lg'>
                        {cityOrigin[params.city].cityState}
                    </div>
                    <div className='w-[30vw] md:w-[20vw] lg:w-[10vw] py-1 md:py-2 lg:my-auto bg-gray-200 dark:bg-stone-900 rounded-lg'>
                        {cityOrigin[params.city].cityFa}
                    </div>
                </div>
                <div className='w-[95vw] md:w-[45vw] lg:w-[40vw] md:ms-4 lg:ms-0'>
                    <SearchItemeInput />
                </div>

            </div>



            <div className='w-[96vw] h-[80vh] lg:pt-2 text-center'>
                <div className='w-[100%] h-fit overflow-scroll no-scrollbar'>
                    <CategorySection />
                </div>
                <div className='w-[100%] h-full overflow-scroll no-scrollbar'>
                    <AdCardsHolder />
                </div>
            </div>


        </CenterFlexCol>
    </FullScreenMain>
  )
}

export default City