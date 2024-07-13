import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

function Hero() {
  return (
    <div className='flex items-center gap-3 flex-col justify-center pt-14 pb-7'>
        <h2 className='font-bold text-[46px] text-center' >Prenota i tuoi servizi preferiti 
          <br />
          <span className='text-primary'>Risparmia tempo!</span>
        </h2>
        <h2 className='text-xl text-gray-500'>Esplora i servizi disponibili vicino a te</h2>
      <div className='mt-4 flex gap-4 items-center '>
          <Input  placeholder='Search' className='rounded-full md:w-[350px]'></Input>
          <Button className='rounded-full h-[46px]'>
            <Search className='h-4 w-4'></Search>
          </Button>
      </div>
    </div>
  )
}

export default Hero