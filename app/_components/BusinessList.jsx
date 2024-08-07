import Image from 'next/image'
import React from 'react'

function BusinessList({businessList,title}) {
  return (
    <div className='mt-5'>
        <h2 className='font-bold text-[22px]'>{title}</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5'>
            {businessList.map((business,index)=>(
                <div key={index}>
                <Image src={business.images[0].url} alt={business.name} width={500} height={200}
                    className='h-[150px] md:h-[200px] object-cover rounded-lg'
                />
                </div>
            ))}
        </div>
    </div>
  )
}

export default BusinessList