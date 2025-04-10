import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className='mx-4 sm:mx-10 md:mx-22 lg:mx-52 p-6 mt-5'>
      <div className='max-w-[1400px] w-full mx-auto'>
        <h2 className='text-4xl'>Partner</h2>
        <div className='flex-col md:flex-row flex w-full justify-between items-center mt-10'>
          <Button className='rounded-md border border-gray-300 bg-gray-50 text-gray-700 hover:bg-gray-100 px-5 py-2'>Inizia Gratuitamente</Button>
          <Image src={'/logo.svg'} width={200} height={200} alt='logo' />
        </div>
      </div>
    </div>
  )
}

export default page