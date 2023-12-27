import DarkLight from '@/components/darkLight'
import './globals.css'
import localFont from 'next/font/local'

const myFont = localFont({
  src: '../../public/localFonts/IRANSansX-Medium.woff2'
})

export const metadata = {
  title: 'مَ‌جاز',
  description: 'تجربه زندگی متاورسی',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa">
      <body>

        <div className={myFont.className}>
          <DarkLight />
          <div className='bg-stone-900 text-stone-200'>
            {children}
          </div>
        </div>

      </body>   
    </html>
  )
}
