import React from 'react'
import { StarIcon } from '@heroicons/react/24/outline'

export function CarsCard({vehicule}) {
  return (
   <>
    <div className='py-4 px-4 w-full border-solid border-2  border-[green] rounded-xl bg-white relative'>
      <div>
        <h1 className=' text-xl font-bold text-[#555555]'>Mercedes</h1>
        <h2 className='text-lg font-medium text-[#6f6d6d]'>Class A 250D</h2>
        <div className='flex mt-4'>
       <StarIcon className='h-6 w-6' /> <h3 className='text-md font-medium text-[#555555] ml-1'>4.4 Rating</h3></div>
       <div className='flex mt-2 ml-2'>
        <h4 className='text-md font-medium text-[#555555] '>95 EUR par jour</h4>
        </div>
        <div className=''>
          <img src="https://res.cloudinary.com/db2sa2bxv/image/upload/v1673452370/mercedes_class_A_noire_eihnyb.webp" alt="" className='h-32 absolute top-3 right-0'/>
        </div>
      </div>
    </div>
    </>
  )
}
