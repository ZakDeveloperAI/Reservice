"use client"
import GlobalApi from '@/app/_services/GlobalApi';
import { signIn, useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import BusinessInfo from '../_components/BusinessInfo';
import SuggestedBusinessList from '../_components/SuggestedBusinessList';
import BusinessDescription from '../_components/BusinessDescription';

function BusinessDetail({params}) {

    const {data,status} = useSession();
    const [business, setBusiness] = useState([]);


    useEffect(()=>{
        params&&getbusinessById();//esego solo quando params non è null
    },[params])//le quadre dicono che ogni volta che params subisce una variazione esegue il metodo

    useEffect(()=>{
        checkUserAuth(); //le quadre servono cosi ripete solo una volta o quando il componente viene montato o smonatato
    },[])

    const  getbusinessById=()=>{
      GlobalApi.getBusinessById(params.businessId).then(resp=>{
          setBusiness(resp.businessList);
      }) //businessId deriva dalla cratella variabile [businessId]
  }

    const checkUserAuth=()=>{
      if (status == "loading") {
        return <div>Loading...</div>
    }

    if (status == "unauthenticated") {
        signIn('descope');
    }
    }

  return status == "authenticated" &&business&& (
    <div className='py-8 md:py-20 px-10 md:px:36'>
      <BusinessInfo business={business}/>

      <div className='grid grid-cols-4 mt-16'>
        <div className='cols-span-4 md:col-span-3'>
          <BusinessDescription business={business}/>
        </div>
        <div className='hidden md:block'>
          <SuggestedBusinessList business={business}/>
        </div>
      </div>
      
    </div>
  )
}

export default BusinessDetail

