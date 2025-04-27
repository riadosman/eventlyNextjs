import Link from  'next/link'
import React from 'react'
import Image from 'next/image'
import { SignedIn, SignInButton, UserButton } from '@clerk/nextjs'
import { SignUpButton } from '@clerk/nextjs'
import { Button } from '../ui/button'
import { SignedOut } from '@clerk/nextjs'
import NavItems from './NavItems'
import MobielNav from './MobielNav'

function Header() {
  return (
    <header className='w-full border-b'>
        <div className='wrapper flex items-center justify-between'>
            <Link href="/" className='w-36'>
                <Image src="/assets/images/logo.svg" alt="Evently logo" width={128} height={38} />
            </Link>
            <SignedIn>
              <nav className='hidden md:flex-between w-full max-w-xs'>
                <NavItems />
              </nav>
            </SignedIn>
            <div className='flex w-32 justify-end gap-3'>
              <SignedIn>
                {/* afterSignOutUrl="/" */}
                <UserButton />
                <MobielNav />
              </SignedIn>
            <SignedOut>
              <SignInButton>
                <Button asChild className='rounded-full' size="lg">
                  <Link href="/sign-in">Login</Link>
                </Button>
              </SignInButton>
              <SignUpButton>
                <Button asChild className='rounded-full' size="lg">
                  <Link href="/sign-up">Sign Up</Link>
                </Button>
              </SignUpButton>
            </SignedOut>
            </div>
        </div>
    </header>
  )
}

export default Header