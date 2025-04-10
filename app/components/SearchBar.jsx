import { Search } from 'lucide-react'
import React from 'react'

const SearchBarr = () => {
  return (
    <div className='h-10 w-full flex items-center border-gray-400 rounded-2xl px-[15px] border gap-3'>
        <Search/>
        <input  type="text" placeholder='Search' 
        className='bg-transparent border-none outline-none h-full text-lg'/>
    </div>
  )
}

export default SearchBarr