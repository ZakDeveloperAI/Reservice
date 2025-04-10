"use client"
import { Button } from "../components/ui/button";
import Image from "next/image";
import Hero from "./components/Hero";
import CategoryList from "./components/CategoryList";
import GlobalApi from "./_services/GlobalApi";
import { useState,useEffect } from "react";
import BusinessList from "./components/BusinessList";


export default function Home() {

  const[categoryList, setCategoryList]=useState([]);
  const [businessList,setBusinessList]=useState([]);
  useEffect(()=>{
    getCategoryList();
    getAllBusinessList();
  },[]) //le quadre servono per eseguire il metodo solo una volta

  const getCategoryList=()=>{
    GlobalApi.getCategory().then(resp=>{
      setCategoryList(resp.categories);
    })
  }

  const getAllBusinessList=()=>{
    GlobalApi.getAllBusinessList().then(resp=>{
      setBusinessList(resp.businessLists);
    })
  }

  return (
    <div>
        <Hero/>
        <CategoryList categoryList={categoryList} />
        <BusinessList businessList={businessList} title={'Servizi del momento'}/>
    </div>
  );
}
