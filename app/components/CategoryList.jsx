import Link from 'next/link'
import React from 'react'

function CategoryList({categoryList}) {
  return (
    <div className='mx-4 sm:mx-10 md:mx-22 lg:mx-52 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4'>
      {categoryList.length>0?categoryList.map((category,index)=>(
        <Link href={'/searchCategory/'+category.name}  key={index} className={`flex flex-col items-center justify-center gap-2 
          bg-gray-50 shadow-md p-4 rounded-lg cursor-pointer hover:scale-110 transition-all ease-in-out
          `}>
          <img src={category.icon.url} alt='icon' className='w-12 h-12' />
          <h2 className='text-gray-700 text-center'>{category.name}</h2>
        </Link>
      )):
      [1,2,3,4,5,6].map((item,index)=>(
        <div key={index} className='h-[120px] w-full bg-gray-100 animate-pulse rounded-lg shadow-md'>

        </div>
      ))
      }
    </div>
  )
} 

export default CategoryList