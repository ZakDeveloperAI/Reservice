import React from 'react'
import SearchBarr from './SearchBarr'


function SearchComponent() {
  return (
    <div className='flex flex-col items-center justify-center min-w-[200px]'>
        <SearchBarr/>
        <div>SearchResults</div>
    </div>
  )
}

export default SearchComponent