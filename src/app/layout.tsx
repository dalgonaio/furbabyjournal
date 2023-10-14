import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from "./components/navigation/navbar/page";
import Footer from "./components/footer/page";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PET BUTLER',
  description: 'Taking care of those who matter most',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar  />
        {children}
      <Footer />
        </body>
    </html>
  )
}
