import React from 'react';
import DatePicker from '../components/datePicker';
import  Image  from 'next/image';
import {CarsCard} from '../components/Card/CarsCard';
import { CarsCardBig } from '../components/Card/CarsCardBig';
import Aside from '../components/aside';
import Footer from '../components/footer';


export default function Home() {
  const data = [{name:"cars"}]
  return (
<main className="h-screen flex flex-col relative">
  <nav className="bg-yellow-500 p-6 px-10 w-full">Najim</nav>
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
    
    <div className=" mx-10 mt-10 md:absolute bg-slate-100 p-4 top-0 md:translate-y-[40vw] lg:translate-y-[40vh] ">
      <DatePicker/>
    </div>
    </div>
    

    <section className="h-full mt-4  min-h-screen flex flex-row">
    <Aside/>
    <div className='flex flex-col w-screen overflow-x-hidden overflow-y-scroll items-center'>
    <h2 className="text-3xl font-medium py-4">Available Cars</h2>

    
    <div className="flex flex-col md:flex-row gap-4 flex-wrap md:justify-center w-full px-4 md:px-0 md:mx-8">
    {/* {data.map((item)=><CarsCardBig vehicule={item}></CarsCardBig>)} */}
    <CarsCardBig/>
    <CarsCardBig/>
    <CarsCardBig/>
    <CarsCardBig/>
    <CarsCardBig/>
    <CarsCardBig/>
    <CarsCardBig/>

    </div>
    </div>
    </section>
    
<Footer/>
</main>
  )
}