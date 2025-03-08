'use client'
import GlobalApi from '@/app/_services/GlobalApi';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { useState,useEffect } from "react";

function CategorySideBar() {
  
    const[categoryList, setCategoryList]=useState([]);
    const [selectedCategory, setSelectedCategory] = useState();
    const params=usePathname();
    useEffect(()=>{     
        getCategoryList();
    },[]) //le quadre servono per eseguire il metodo solo una volta
    useEffect(()=>{
      params&&setSelectedCategory(params.split('/')[2])
    },[params])//le quadre servono per eseguire il metodo solo quando params subisce una variazione

  const getCategoryList=()=>{
    GlobalApi.getCategory().then(resp=>{
        //console.log(resp);
      setCategoryList(resp.categories);
    })
  }
  
    return (
    <div>
        <h2 className='font-bold mb-3 text-lg text-primary'>Categories</h2>
        <div>
            {categoryList.map((category,index)=>(
                <Link href={'/searchCategory/'+category.name} key={index} 
                    className={` flex items-center gap-2 p-3 border rounded-lg mb-3 md:mr-10 cursor-pointer
                    hover:bg-purple-50 hover:text-primary hover:border-primary hover:shadow-md 
                    ${selectedCategory==category.name&&'border-primary text-primary shadow-md'}`}
                >
                    <Image src={category.icon.url} alt='icon' width={30} height={30}/>
                    <h2>{category.name}</h2>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default CategorySideBar