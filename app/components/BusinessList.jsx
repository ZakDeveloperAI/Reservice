import { Button } from '../../components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function BusinessList({ businessList = [], title }) {
  return (
    <div className='mt-16'>
      <h2 className='font-bold text-[22px] '>{title}</h2>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>
        {businessList.length > 0 ? (
          businessList.map((business) => (
            <Link href={'/details/' + business.id}
              key={business.id || business.name} // Fallback to business.name if business.id doesn't exist
              className='bg-gray-50 shadow-md rounded-lg hover:shadow-gray-300 cursor-pointer hover:scale-105 transition-all ease-in-out'
            >
              <Image
                src={business?.images?.[0]?.url || '/placeholder.png'} // Provide a fallback image if url is undefined
                alt={business.name || 'Business image'} // Fallback for alt text
                width={500}
                height={200}
                className='h-[250px] md:h-[250px] object-cover rounded-lg'
              />
              <div className='flex flex-col items-baseline p-3 gap-1'>
                <h2 className='p-1 bg-purple-100 text-gray-700 rounded-full px-2 text-[12px] font-bold'>
                  {business?.category?.[0]?.name || 'Uncategorized'} {/* Safe access with optional chaining */}
                </h2>
                <h2 className='font-bold text-lg'>{business.name || 'Business name unavailable'}</h2>
                <h2 className='text-gray-600'>{business.contactPerson || 'No contact person available'}</h2>
                <h2 className='text-gray-500 text-sm'>{business.address || 'No address available'}</h2>
                <Button className="rounded-lg mt-3 px-5 py-2">Prenota ora!</Button>
              </div>
            </Link>
          ))
        ) : (
          [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item} // Using item as key for placeholder items
              className='w-full h-[250px] md:h-[250px] bg-slate-200 rounded-lg animate-pulse'
            />
          ) )
        )}
      </div>
    </div>
  );
}

export default BusinessList;
