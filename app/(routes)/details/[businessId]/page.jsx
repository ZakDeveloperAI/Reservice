"use client"
import GlobalApi from '@/app/_services/GlobalApi';
import { signIn, useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

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

  return status == "authenticated" && (
    <div>BusinessDetail</div>
  )
}

export default BusinessDetail

