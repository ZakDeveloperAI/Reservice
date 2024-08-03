"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import CategoryList from "./_components/CategoryList";
import GlobalApi from "./_services/GlobalApi";
import { useState,useEffect } from "react";



export default function Home() {

  const[categoryList, setCategoryList]=useState([]);
  useEffect(()=>{
    getCategoryList();
  },[]) //le quadre servono per eseguire il metodo solo una volta
  const getCategoryList=()=>{
    GlobalApi.getCategory().then(resp=>{
      setCategoryList(resp.categories);
    })
  }
  return (
    <div>
        <Hero/>

        <CategoryList categoryList={categoryList} />
    </div>
  );
}
