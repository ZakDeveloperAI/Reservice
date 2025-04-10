"use client"

import { Button } from '../../components/ui/button'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useEffect } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"
import Link from 'next/link'


function Header() {

  const {data}=useSession();

  useEffect(()=>{
  },[data])

  return (
    <div className='px-6 py-4 shadow-md flex justify-between'>
        <div className='flex items-center  gap-8'>        
        <Image src='/logo.svg' alt="logo" width={200} height={200} onClick={()=>window.location.href='/'} className='cursor-pointer'/>

            <div className='md:flex items-center gap-6 hidden'>
            <Link className='font-medium hover:text-gray-700' href={'/'}>Home</Link>
            <Link className='font-medium hover:text-gray-700' href={'/'}>Servizi</Link>
            <Link className='font-medium hover:text-gray-700' href={'/mybooking'}>Le Mie Prenotazioni</Link>
            <Link className='font-medium hover:text-gray-700' href={'/aboutus'}>About Us</Link>
            </div>

        </div>
        <div>
        {data?.user?
          
          <DropdownMenu>
  <DropdownMenuTrigger asChild>
  <Image src={data?.user?.image}
          alt='user'
          width={40}
          height={40}
          className='rounded-full cursor-pointer'       
          />
  </DropdownMenuTrigger>
          <DropdownMenuContent className='bg-gray-50 shadow-md'>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <Link href={'/mybooking'}>My Booking</Link>
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => signOut()}>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

          
          
          :
          <Button className='rounded-md border border-gray-300 bg-gray-50 text-gray-700 hover:bg-gray-100' onClick={()=>signIn('descope') }>Accedi / Registrati</Button>
          }
                
        </div>
    </div>
  )
}

export default Header