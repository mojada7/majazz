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
      <body className='bg-stone-800'>
        <div className={myFont.className}>
          {children}
        </div>
      </body>   
    </html>
  )
}
