import Navbar from '@/components/Navbar'
import './globals.css'
import { Urbanist } from 'next/font/google'
import Footer from '@/components/Footer'
import ModalProvider from '@/provider/ModalProvider'
import ToastProvider from '@/provider/ToastProvider'

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
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
