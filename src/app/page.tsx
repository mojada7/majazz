import localFont from 'next/font/local'
import Link from 'next/link'
const myFont = localFont({
  src: '../../public/localFonts/IRANSansX-ExtraBold.woff2'
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 py-2 pb-8  lg:py-8 lg:pb-16 lg:px-16 ">

    <div className={myFont.className}>
        <div className="text-[72px] text-center px-8 leading-[128px] py-8 pb-12  rounded-xl ">
          <div className='text-[120px] scale-75 text-white lg:text-[200px] w-[24vw] lg:w-[9.5vw] mx-auto rounded-xl leading-[72px] lg:leading-[100px]  bg-gradient-to-r from-blue-800 via-indigo-600 to-blue-600 pt-4 lg:pt-6 border-[2px] lg:border-[3px] border-stone-800 '>
            <div className=''>
            ≈
            </div>

          </div>
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

    <div className='flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 mt-16'>
      <Link href={'/about'}>
        <div className='w-[80vw] lg:w-[30vw] text-center  rounded-xl  hover:bg-blue-500 hover:cursor-pointer text-[16px] lg:text-[20px] px-4 tracking-tighter py-4 lg:py-8 border-2 '>میخوام در مورد مَ‌جاز بدونم</div>
      </Link>
      <Link href={'/agahi'}>
        <div className='w-[80vw] lg:w-[30vw] text-center  rounded-xl  hover:bg-blue-500 hover:cursor-pointer text-[14px] lg:text-[18px] px-8 tracking-tighter py-5 lg:py-8 border-2 '>فقط میخوام از سرویس آگهی مَ‌جاز استفاده کنم</div>
      </Link>
    </div>


    </main>
  )
}
