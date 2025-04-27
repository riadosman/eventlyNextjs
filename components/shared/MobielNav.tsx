import React from 'react'
import Image from 'next/image'
import { Sheet, SheetContent, SheetTrigger ,SheetDescription,SheetHeader,SheetTitle} from '@/components/ui/sheet'
import { Separator } from '@radix-ui/react-separator'
import NavItems from './NavItems'

const MobielNav = () => {
  return (
    <nav className='md:hidden'>
        <Sheet>
          <SheetTrigger className='align-middle'>
            <Image src="/assets/icons/menu.svg" alt="menu" width={24} height={24} className='cursor-pointer'/>
          </SheetTrigger>
          <SheetContent className='flex flex-col gap-66 bg-white md:hidden'>
            <Image src="/assets/images/logo.svg" alt="logo" width={128} height={38} />
            <Separator className="border border-gray-50 my-6" />
            <NavItems />
          </SheetContent>
        </Sheet>
    </nav>
  )
}

export default MobielNav