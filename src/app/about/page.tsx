import MajazLogo from '@/components/majazLogo'
import FullScreenMain from '@/components/wraper/fullScreenMain'
import React from 'react'
import localFont from 'next/font/local'

const myFont = localFont({
    src: '../../../public/localFonts/IRANSansX-ExtraBold.woff2'
  })
function About() {
  return (
    <FullScreenMain>
        <div className={`${myFont.className} mt-8 text-[72px]`}>
            <MajazLogo/>
        </div>
        <div dir='rtl' className='w-[86vw] tracking-tighter text-justify text:[8px] leading-6 lg:text-[18px] md:w-[70vw] lg:w-[68vw] me-[7vw] md:me-[15vw] lg:me-[18vw] mt-8 lg:mt-[10vh]'>
             مجاز یک پروژه خصوصی نیست! مجاز تلاشی برای همگانی کردن منافع و قدرت تصمیم گیری در دنیای آیندمونه. نظر ما اینه دنیا با گذشت زمان و پیشرفت تکنولوژی عادلانه تر میشه و تکنولوژی های جدید مفاهیم فرهنگ و اعتماد و عدالت رو دچار تغییر میکنند. اینجا ما تلاش میکنیم جهت این تغییرات مثبت باشه 
             
        </div>
    </FullScreenMain>
  )
}

export default About