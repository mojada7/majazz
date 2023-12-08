import localFont from 'next/font/local'
const myFont = localFont({
  src: '../../public/localFonts/IRANSansX-ExtraBold.woff2'
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 py-2 pb-8  lg:py-8 lg:pb-16 lg:px-16 text-white">

    <div className={myFont.className}>
        <div className="text-[128px] text-center bg-fuchsia-500 px-8 leading-[128px] py-4 pb-12 rounded-xl border-[4px] border-fuchsia-300">
          <div className='text-[200px] w-[100%] h-[12vh]'>
          ≈
          </div>
          <div className='mt-8 tracking-tighter'>
          م‌َجاز
          </div>
        </div>
    </div>
    <div className={myFont.className}>
    <div className='text-lg text-black mt-2'>
    ©  پروژه ایرانی تجربه زندگی متاورسی
    </div>
    </div>

    <div className='flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 mt-16'>
      <div className='w-[100%] lg:w-[30vw] text-center text-black rounded-xl border-[3px]  border-fuchsia-100 hover:bg-fuchsia-300 hover:cursor-pointer text-[20px] px-4 tracking-tighter py-6 lg:py-8'>میخوام در مورد مَ‌جاز بدونم</div>
      <div className='w-[100%] lg:w-[30vw] text-center text-black rounded-xl border-[3px]  border-fuchsia-100 hover:bg-fuchsia-300 hover:cursor-pointer text-[20px] lg:text-[22px] px-8 tracking-tighter py-3 lg:py-8'>فقط میخوام از سرویس آگهی مَ‌جاز استفاده کنم</div>
    </div>


    </main>
  )
}
