import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] , variable: '--font-poppins'})

export const metadata: Metadata = {
  title: 'Evently',
  description: 'Evently is a platform for creating and managing events',
  icons: {
    icon: '/assets/images/logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>
          {children}</body>
      </html>
      </ClerkProvider>
  )
}
