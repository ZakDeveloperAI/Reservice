"use client"

import BusinessList from '@/app/_components/BusinessList';
import GlobalApi from '@/app/_services/GlobalApi';
import React, { useEffect, useState } from 'react';

function BusinessByCategory({ params }) {
  const [businessList, setBusinessList] = useState([]); // Corretto il destructuring da array

  useEffect(() => {
    console.log(params);
    if (params) getBusinessList(); // Controllo per verificare se params è definito
  }, [params]);

  const getBusinessList = () => {
    GlobalApi.getBusinessByCategory(params.category)
      .then((resp) => {
        setBusinessList(resp?.businessLists || []); // Aggiunto fallback a array vuoto in caso di dati mancanti
      })
      .catch((err) => {
        console.error("Errore durante il recupero della lista di business:", err);
      });
  };

  return (
    <div>
      <BusinessList title={params.category} businessList={businessList} />
    </div>
  );
}

export default BusinessByCategory;
