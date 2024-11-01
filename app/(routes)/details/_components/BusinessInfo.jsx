import { Mail, MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function BusinessInfo({business}) {
  return (
    <div className='flex fgap-4 items-center'>
      <Image src={business?.images?.[0]?.url} alt={business.name} width={150} height={200}
      className='rounded-full h-[150px] object-cover '/>
      <div className='flex flex-col items-baseline gap-3'>
        <h2 className='text-primary p-1 px-3 text-lg bg-purple-100 rounded-full'>{business?.category?.[0]?.name}</h2>
        <h2 className='text-[40px] font-bold'>{business.name}</h2>
        <h2 className='flex gap-2 text-lg text-gray-500'><MapPin/>  {business.address}</h2>
        <h2 className='flex gap-2 text-lg text-gray-500'><Mail/> {business.email}</h2>
      </div>
    </div>
    
    
  )
}

export default BusinessInfo