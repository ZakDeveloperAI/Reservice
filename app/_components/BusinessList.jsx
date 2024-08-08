import Image from 'next/image'
import React from 'react'

function BusinessList({businessList,title}) {
  return (
    <div className='mt-5'>
        <h2 className='font-bold text-[22px]'>{title}</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5 '>
            {businessList.map((business,index)=>(
                <div key={index} className='shadow-sm rounded-lg '>
                <Image src={business.images[0].url} alt={business.name} width={500} height={200}
                    className='h-[150px] md:h-[200px] object-cover rounded-lg'
                />
                <div className='flex flex-col items-baseline p-3 '>
                  <h2 className='p-1 bg-purple-200 text-primary rounded-full px-2 text-[12px] '>{business.category.name}</h2>
                  <h1>{console.log(business.category.name)}</h1>
                </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default BusinessList