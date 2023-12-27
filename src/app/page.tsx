import CologoContainer from '@/components/coLogoContainer'
import MajazLogo from '@/components/majazLogo'
import CenterFlexCol from '@/components/wraper/centerFlexCol'
import FullScreenMain from '@/components/wraper/fullScreenMain'
import localFont from 'next/font/local'
import Link from 'next/link'
const myFont = localFont({
  src: '../../public/localFonts/IRANSansX-ExtraBold.woff2'
})

export default function Home() {
  return (

<FullScreenMain>
  <CenterFlexCol>
    <div className={myFont.className}>
        <div className="text-[72px] text-center px-8 leading-[128px] py-8 pb-12  rounded-xl ">
        <MajazLogo />
          <div className='mt-8  tracking-tighter drop-shadow-xl'>
          م‌َجاز
          </div>
        </div>
    </div>
          <div className={myFont.className}>
          <div className='text-md '>
          ©  پروژه ایرانی تجربه زندگی متاورسی
          </div>
          </div>

          <div className='flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 mt-8 pb-16 border-b-[1px] border-gray-300'>
            <Link href={'/about'}>
              <div className='w-[80vw] lg:w-[30vw] text-center  rounded-xl  hover:bg-blue-500 hover:cursor-pointer text-[16px] lg:text-[20px] px-4 tracking-tighter py-4 lg:py-8 border-2 '>میخوام در مورد مَ‌جاز بدونم</div>
            </Link>
            <Link href={'/agahi'}>
              <div className='w-[80vw] lg:w-[30vw] text-center  rounded-xl  hover:bg-blue-500 hover:cursor-pointer text-[14px] lg:text-[18px] px-8 tracking-tighter py-5 lg:py-8 border-2 '>فقط میخوام از سرویس آگهی مَ‌جاز استفاده کنم</div>
            </Link>
          </div>
        <CologoContainer />
      </CenterFlexCol>
    </FullScreenMain>


  )
}
