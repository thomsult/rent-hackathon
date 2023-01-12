import { React, useEffect, useState } from 'react';
import DatePicker from '../components/datePicker';
import  Image  from 'next/image';
import { CarsCardBig } from '../components/Card/CarsCardBig';
import Aside from '../components/aside';
import Footer from '../components/footer';
import axios from "axios";


export default function Home() {

const [data, setData] = useState([])
const [isloading, setIsLoading] = useState(true)

useEffect(() => {
axios
.get('http://localhost:3000/api/vehicle')
.then((res) => {
  setData(res.data)
  console.log(res.data)
  setIsLoading(false)
})
.catch((err) => {
  console.log(err)
});

}, [])


  return (
<main className="h-screen flex flex-col relative ">
  <nav className="flex  justify-end  bg-white-500 p-2 px-1 w-full">
    <div className="mr-auto">
        <img src='/image1.svg'></img>
    </div>
    <div class="flex p-10px ">
      <button type="button" class="flex text-white bg-yellow-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-yellow-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-yellow-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Se connecter</button>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
      <button type="button" class="flex text-white bg-yellow-400 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-yellow-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Inscription</button>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    </div>
  </nav>
  <div className="mt-10 md:mt-0">
    <div className="flex md:hidden w-full px-8 max-h-64 overflow-hidden">
      <img
      className="md:h-full rounded-lg object-cover object-bottom" 
        src="/Home_Image.png"
        alt="Picture of the author"
      />
    </div>

    <div className="hidden md:flex max-h-[95vh] ">
      <img
      className="w-full object-cover object-center" 
        src="/Home_Image.png"
        alt="Picture of the author"
      />
    </div>
    
    <div className="flex flex-row">
      <DatePicker/>
    </div>
    </div>
    

    <section className="h-full mt-4  min-h-screen flex flex-row">
    <Aside/>
    <div className='flex flex-col w-screen overflow-x-hidden overflow-y-scroll items-center'>
    <h2 className="text-3xl font-medium py-4">Available Cars</h2>

    
    <div className="flex flex-col md:flex-row gap-4 flex-wrap md:justify-center w-full px-4 md:px-0 md:mx-8">

    {!isloading && data && data.map((vh) => <CarsCardBig key={vh.id} vh={vh}/>)}
    </div>
    </div>
    </section>
    
<Footer/>
</main>
  )
}
// rounded-md bg-red-500 mx-10 mt-10 md:absolute bg-slate-100 p-4 top-0 md:translate-y-[40vw] lg:translate-y-[40vh]