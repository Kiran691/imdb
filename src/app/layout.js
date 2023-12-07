import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Providers from '@/Providers'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDb Clone',
  description: 'this is IMDb Clone website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
         {/* Header */}
         <Header />
        {/* Navbar */}
        <Navbar />

        {/* SearchBox */}
        {children}
        </Providers>
        </body>
    </html>
  )
}
