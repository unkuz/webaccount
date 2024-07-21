import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import '@/styles/global.scss'
import { clsx } from 'clsx'
import type { Metadata } from 'next'
import { Wix_Madefor_Display } from 'next/font/google'

const wixMadeforDisplay = Wix_Madefor_Display({ subsets: ['vietnamese'] })

export const metadata: Metadata = {
  title: 'Shop Acc Premium',
  description: 'Shop Acc Premium',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className="bg-[#ffffff]">
      <body
        suppressHydrationWarning={true}
        className={clsx(
          wixMadeforDisplay.className,
          'mx-auto w-full max-w-[1280px] px-[10px] sm:px-[25px] md:px-[35px] lg:px-[50px]',
          'selection:bg-black selection:text-white',
          'relative',
        )}
      >
        <Header />
        <main className="mb-[100px] mt-[20px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
