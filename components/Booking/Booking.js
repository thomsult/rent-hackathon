import React, { useContext, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import LocationContext from '../../context/LocationContext';

const Booking = ({ setShowModal, data }) => {
const {location} = useContext(LocationContext)
const {startDate, endDate} = location

    return (
        <div>
        


        {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
<div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block relative">

    <div class="sm:block absolute top-0 right-0 pt-4 pr-4">
    


      </div>
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

    {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"></span>

    {/* <!--
      Modal panel, show/hide based on modal state.
      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    --> */}
    <div class="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
      <div>

        <div class="mt-3 text-center sm:mt-5">
          <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">Réservation</h3>
          <div class="">
          <img src={data.image_car} alt='voiture' />
          <div className='flex gap-1'>
          <div className='w-full h-full p-4 bg-slate-50 rounded-xl shadow-md '>
            <p class="text-sm font-medium">{data.brand}</p>
            <p class="text-sm font-medium">{data.model}</p>
            <div className='py-2'></div>

            <p class="text-sm font-medium">{data.transmission}, {data.fuel_type}</p>
            </div>
            <div className='w-full h-full p-4 bg-[#f3b33d6d] rounded-xl shadow-md'>
            <div className='flex justify-between'>
            <p class="text-sm italic">3 jours</p>
            <p class="text-sm italic">195 EUR</p>
            </div>
            <div className='flex justify-between'>
            <p class="text-sm italic">Assurance</p>
            <p class="text-sm italic">100 EUR</p>
            </div>
            <div className='py-2'></div>
            <div className='flex justify-between'>
            <p class="text-sm font-medium">Prix Total</p>
            <p class="text-sm font-medium">295 EUR</p>
            </div>
            </div>
            </div>
          </div>
        </div>
        <button type="button" class="bg-white absolute top-2 right-2 rounded-md text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setShowModal(false)}>
        <XMarkIcon className=' w-6 h-6 '/>
        </button>
      </div>
      <div class="mt-5 sm:mt-6">
        <Link href="/checkout" class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#F3B33D] text-base font-medium text-white hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm" onClick={() => setShowModal(false)}>Payer</Link>
      </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Booking;