import GlobalApi from '@/app/_services/GlobalApi';
import { Button } from '@/components/ui/button'
import { NotebookPen } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function SuggestedBusinessList({business}) {

  const [businessList, setBusinessList] = useState([]); // Corretto il destructuring da array
  useEffect(() => {
    business&&getBusinessList(); 
  }, [business]); //[business] esegue solo quando business è disponibile

  const getBusinessList = () => {
    GlobalApi.getBusinessByCategory(business?.category?.[0]?.name)
      .then((resp) => {
        setBusinessList(resp?.businessLists || []); // Aggiunto fallback a array vuoto in caso di dati mancanti
      })
      .catch((err) => {
        console.error("Errore durante il recupero della lista di business:", err);
      });
  };


  return (
    <div className=''>
      <Button className='flex gap-2 w-full'>
        <NotebookPen/> BOOK APPOINTMENT
      </Button>
      <div className='hidden md:block'>
      <h2 className='font-bold text-lg mt-3 mb-3'>Similiar Businesses</h2>
      <div>
        {businessList&&businessList.map((business,index)=>(
          <Link href={'/details/'+business.id} key={index} className='flex gap-2 mb-4 hover:border hover:shadow-md rounded-lg p-2 cursor-pointer border-primary'>
            
            <Image src={business.images[0].url} alt={business.name} width={80} height={80}
              className='rounded-lg object-cover'
            />
            <div className=''>
              <h2 className='font-bold'>{business.name}</h2>
              <h2 className='text-primary'>{business.contactPerson}</h2>
              <h2 className='text-gray-400'>{business.address}</h2>
            </div>
          </Link>
        ))}
      </div>
      </div>
    </div>
  )
}

export default SuggestedBusinessList;