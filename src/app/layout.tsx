import Navbar from '@/components/Navbar'
import './globals.css'
import { Roboto_Mono } from 'next/font/google'

const RobotoMono = Roboto_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'Githun Search',
  description: 'Search github username',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className=''>
      <body className={RobotoMono.className}>
        <div className='min-h-screen dark:bg-[#141C2F] grid place-content-center px-4 bg-[#ECEFF8]'>
          <div className='sm:w-[500px] md:w-[600px] lg:w-[700px]'>
            <Navbar/>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
