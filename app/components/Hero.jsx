import React from 'react'


function Hero() {
  return (
    <div className='flex items-center gap-3 flex-col justify-center pt-14 pb-7 '>
        <h2 className='font-bold text-3xl md:text-[36px] lg:text-[46px] max-w-[600px] md:max-w-[700px]' >Prenota i tuoi servizi preferiti 
          <br />
          <span className='text-primary'>Risparmia tempo!</span>
        </h2>
        <h2 className='text-xl md:text-lg text-gray-600 mt-4 text-center'>Esplora i servizi disponibili vicino a te</h2>
    </div>
  )
}

export default Hero