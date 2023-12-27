import MajazLogo from '@/components/majazLogo'
import FullScreenMain from '@/components/wraper/fullScreenMain'
import React from 'react'
import localFont from 'next/font/local'
import CenterFlexCol from '@/components/wraper/centerFlexCol'
import Image from 'next/image'
import pic1 from '../../../public/icon/metavers.png'
import pic2 from '../../../public/icon/block.png'
import pic3 from '../../../public/icon/vote.png'

const myFont = localFont({
    src: '../../../public/localFonts/IRANSansX-ExtraBold.woff2'
  })
function About() {
  return (
    <FullScreenMain>
        <CenterFlexCol>
        <div className={`${myFont.className} mt-8 text-[72px]`}>
            <MajazLogo/>
        </div>
        <div dir='rtl' className='w-[86vw] tracking-tighter text-justify text-[12px] leading-6 lg:text-[15px] md:w-[70vw] lg:w-[68vw] mt-4 lg:mt-[10vh]'>
             مجاز یک پروژه خصوصی نیست! مجاز تلاشی برای همگانی کردن منافع و قدرت تصمیم گیری در دنیای آیندمونه. نظر ما اینه دنیا با گذشت زمان و پیشرفت تکنولوژی عادلانه تر میشه و تکنولوژی های جدید مفاهیم فرهنگ و اعتماد و عدالت رو دچار تغییر میکنند. اینجا ما تلاش میکنیم جهت این تغییرات مثبت باشه.        
        </div>

        <div dir='rtl' className='w-[86vw] tracking-tighter text-justify text-[12px] leading-6 lg:text-[15px] md:w-[70vw] lg:w-[68vw] mt-4 lg:mt-[10vh]'>
            ما از سه رویکرد جریان ساز برای گذاشتن پایه های دنیای جدیدمون استفاده میکنیم:
        </div>
        <div className='h-full flex flex-col lg:flex-row justify-between lg:gap-6'>
        <div className='w-[90vw] mt-4 text-center py-4 px-4 rounded-2xl bg-gray-100 dark:bg-stone-900 md:w-[70vw] lg:w-[25vw] lg:h-[30vh]'>
            <div className='flex'>
                <div>
                    <Image alt='' src={pic3} width={75} />
                </div>
                <div className='w-full'>
                    Election
                </div>
            </div>
            <div className='w-full'>
                content describtion
            </div>
        </div>
        <div className='w-[90vw] mt-4 text-center py-4 px-4 rounded-2xl bg-gray-100 dark:bg-stone-900 md:w-[70vw] lg:w-[25vw] lg:h-[30vh]'>
            <div className='flex'>
                <div>
                    <Image className='dark:invert' alt='' src={pic2} width={75} />
                </div>
                <div className='w-full'>
                    Block Chain
                </div>
            </div>
            <div className='w-full'>
                content describtion
            </div>
        </div>
        <div className='w-[90vw] mt-4 text-center py-4 px-4 rounded-2xl bg-gray-100 dark:bg-stone-900 md:w-[70vw] lg:w-[25vw] lg:h-[30vh]'>
            <div className='flex'>
                <div>
                    <Image alt='' src={pic1} width={75} />
                </div>
                <div className='w-full'>
                    Metaverse
                </div>
            </div>
            <div className='w-full'>
                content describtion
            </div>
        </div>
        </div>

        </CenterFlexCol>
    </FullScreenMain>
  )
}

export default About