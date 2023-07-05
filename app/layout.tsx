import Navbar from '@/components/Navbar'
import './globals.css'
import { Urbanist } from 'next/font/google'
import Footer from '@/components/Footer'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'E-commerce Store',
  description: 'Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
