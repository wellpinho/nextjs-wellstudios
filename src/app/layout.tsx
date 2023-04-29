import './globals.css'
import { Alata } from 'next/font/google'

const inter = Alata({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Wellpinho Studios',
  description: 'Project created with Nextjs and Tailwindcss',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
