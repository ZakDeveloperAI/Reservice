'use client'
import BusinessList from '../../../components/BusinessList';
import GlobalApi from '@/app/_services/GlobalApi';
import React, { useEffect, useState } from 'react';
import { use } from "react";

function BusinessByCategory({ params }) {
  const [businessList, setBusinessList] = useState([]); 

  // Unwrap the `params` Promise using `React.use()`
  const unwrappedParams = use(params);

  useEffect(() => {
    console.log(unwrappedParams);
    if (unwrappedParams) getBusinessList(); 
  }, [unwrappedParams]);

  const getBusinessList = () => {
    GlobalApi.getBusinessByCategory(unwrappedParams?.category)
      .then((resp) => {
        setBusinessList(resp?.businessLists || []); 
      })
      .catch((err) => {
        console.error("Errore durante il recupero della lista di business:", err);
      });
  };

  return (
    <div className='mx-4 sm:mx-10 md:mx-22 lg:mx-52 p-6'>
      <div className='max-w-[1400px] w-full mx-auto'>
        {businessList && businessList.length > 0 && <BusinessList title={unwrappedParams?.category} businessList={businessList} />}
      </div>
    </div>
  );
}

export default BusinessByCategory;
