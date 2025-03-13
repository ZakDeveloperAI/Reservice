import Image from 'next/image'
import React from 'react'

function BusinessDescription({business}) {
  return business?.name&&(
    <div>
      <div className='grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mt-2'>
        {business?.images?.map((item, index) => (
          <Image src={item?.url} key={index}  alt="image" width={700} height={200}  className='rounded-lg'/>
        ))}
      </div>
      <h2 className='font-bold text-[25px] '>Description</h2>
      <p className='mt-4 text-lg text-gray-600'>{business?.about}</p>
      <h2 className='font-bold text-[25px] mt-8'>Gallery</h2>
    </div>
  )
}

export default BusinessDescription