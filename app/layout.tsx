import type { Metadata } from 'next'
import '../styles/main.scss'
import Header from "@/components/header/header";


export const metadata: Metadata = {
  title: 'Audiophile',
  description: 'audiophile',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Header />
      {children}
      </body>
    </html>
  )
}
