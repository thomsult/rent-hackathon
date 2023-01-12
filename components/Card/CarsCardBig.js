import React from 'react'
import { StarIcon } from '@heroicons/react/24/outline'
import { CogIcon, UsersIcon, ViewColumnsIcon } from '@heroicons/react/24/solid'

export function CarsCardBig({vehicule}) {
  return (
   <>
    <div className='h-full w-full py-4 rounded-xl bg-white px-4 pt-3'>
      <div>
        <h1 className=' text-xl font-bold text-[#555555]'>Mercedes Class A 250D</h1>
        <h2 className='text-lg font-medium text-[#6f6d6d]'>Berline Premium</h2>
        <div className=''>
          <img src="https://res.cloudinary.com/db2sa2bxv/image/upload/v1673452370/mercedes_class_A_noire_eihnyb.webp" alt="" className=''/>
        </div>
        <div className='flex mt-4 justify-around'>
        <div className='flex'>
        <ViewColumnsIcon className='h-6 w-6' /> <h3 className='text-md font-medium text-[#555555] ml-1'>5 portes</h3>
        </div>
        <div className='flex'>
        <CogIcon className='h-6 w-6' /> <h3 className='text-md font-medium text-[#555555] ml-1'>Auto.</h3>
        </div>
        <div className='flex'>
        <UsersIcon className='h-6 w-6' /> <h3 className='text-md font-medium text-[#555555] ml-1'>4 pers.</h3>
        </div>
      </div>
       <div className='flex justify-around mt-8'>
        <h4 className='text-md font-bold text-[#555555] text-2xl'>95 EUR/<span className='text-[grey]'>jour</span></h4>
        <button className='bg-[#F3B33D] text-white px-4 py-2 rounded-lg ml-4 text-xl font-semibold text-center'>Reserver</button>
        </div>

      </div>
    </div>
    </>
  )
}
