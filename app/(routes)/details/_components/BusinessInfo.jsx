import { Button } from '@/components/ui/button'
import { Clock, Mail, MapPin, NotebookPen, Share, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function BusinessInfo({business}) {
  return business?.name&&(
    <div className='md:flex gap-4 items-center'>
      {/* <Image src={business?.images?.[0]?.url} alt={business.name} width={150} height={200}
      className='rounded-full h-[150px] object-cover '/> */}
      <div className='flex justify-between items-center w-full'>
        <div className='flex flex-col items-baseline gap-3 mt-4 md:mt-0'>
          {/* <h2 className='text-primary p-1 px-3 text-lg bg-purple-100 rounded-full'>{business?.category?.[0]?.name}</h2> */}
          <h2 className='text-[30px] font-bold'>{business.name}</h2>
          <h2 className='flex gap-2 text-lg text-gray-500'><MapPin/>  {business.address}</h2>
          <h2 className='flex gap-2 text-lg text-gray-500'><Mail/> {business.email}</h2>
        </div>
        <div className='flex flex-col gap-5 items-end'>
          
          {/* <Button><Share/> Condividi</Button>
          <h2 className='flex gap-2 text-lg text-primary'><User/> {business.contactPerson}</h2> */}
          {/* <h2 className='flex gap-2 text-lg text-gray-500'><Clock/> Available 8:00 AM - 10:00 PM</h2> */}
        </div>
      </div>
      
    </div>
    
    
  )
}

export default BusinessInfo