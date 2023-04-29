import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './components/header'
import Features from './components/features'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header />
    <main>
      <Features />
    </main>
    </>
  )
}
