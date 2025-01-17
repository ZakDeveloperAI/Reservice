import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className='mt-5'>
        <div className='flex w-full justify-between'>
            <Button >Inizia Gratuitamente</Button>
            <Image src={'/logo.svg'} width={200} height={200} alt='logo'/> 
            <Button >dsdsdssdd</Button>
        </div>
    </div>
  )
}

export default page