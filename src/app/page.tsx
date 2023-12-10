import localFont from 'next/font/local'
const myFont = localFont({
  src: '../../public/localFonts/IRANSansX-ExtraBold.woff2'
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 py-2 pb-8  lg:py-8 lg:pb-16 lg:px-16 text-white">

    <div className={myFont.className}>
        <div className="text-[72px] text-center px-8 leading-[128px] py-8 pb-12  rounded-xl">
          <div className='text-[120px] lg:text-[200px] w-[24vw] lg:w-[10vw] mx-auto rounded-xl leading-[72px] lg:leading-[100px]  bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-400 pt-4 lg:pt-6  '>
          ≈
          </div>
          <div className='mt-8 tracking-tighter drop-shadow-xl'>
          م‌َجاز
          </div>
        </div>
    </div>
    <div className={myFont.className}>
    <div className='text-md text-white'>
    ©  پروژه ایرانی تجربه زندگی متاورسی
    </div>
    </div>

    <div className='flex flex-col text-md lg:flex-row items-center justify-center gap-4 lg:gap-6 mt-16'>
      <div className='w-[100%] lg:w-[30vw] text-center bg-stone-950 text-white rounded-xl  hover:bg-fuchsia-300 hover:cursor-pointer text-[18px] lg:text-[22px] px-4 tracking-tighter py-6 lg:py-8'>میخوام در مورد مَ‌جاز بدونم</div>
      <div className='w-[100%] lg:w-[30vw] text-center bg-stone-950 text-white rounded-xl  hover:bg-fuchsia-300 hover:cursor-pointer text-[16px] lg:text-[20px] px-8 tracking-tighter py-8 lg:py-8'>فقط میخوام از سرویس آگهی مَ‌جاز استفاده کنم</div>
    </div>


    </main>
  )
}
