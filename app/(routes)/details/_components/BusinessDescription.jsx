import React from 'react'

function BusinessDescription({business}) {
  return (
    <div>
      <h2 className='font-bold text-[25px] '>Description</h2>
      <p className='mt-4 text-lg text-gray-600'>{business?.about}</p>
      <h2 className='font-bold text-[25px] mt-8'>Gallery</h2>
      
    </div>
  )
}

export default BusinessDescription