import DarkLight from '@/components/darkLight'
import './globals.css'
import localFont from 'next/font/local'
import Providers from './providers'
import Head from 'next/head'

const myFont = localFont({
  src: '../../public/localFonts/IRANSansX-Medium.woff2'
})

export const metadata = {
  title: 'majazz',
  description: 'تجربه زندگی متاورسی',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" className='light' style={{colorScheme: 'light'}}>
      <Head>
        <meta name='theme-color' content='#000000' />
      </Head>
        <body >
          <Providers>
            <div className={`${myFont.className} bg-white text-stone-800 dark:bg-stone-800 dark:text-white`}>
              <DarkLight />
              <div className=''>
                {children}
              </div>
            </div>
          </Providers>
        </body>   

    </html>
  )
}
