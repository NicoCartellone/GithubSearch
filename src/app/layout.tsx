import Navbar from '@/components/Navbar'
import './globals.css'
import { Space_Grotesk } from 'next/font/google'

const SpaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

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
    <html lang="es">
      <body className={SpaceGrotesk.className}>
        <div className='min-h-screen bg-[#141C2F] grid place-content-center'>
          <div className='sm:w-[500px] md:w-[600px] lg:w-[700px]'>
            <Navbar/>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
