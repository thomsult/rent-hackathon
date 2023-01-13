import { React, useEffect, useState } from 'react';
import DatePicker from '../components/datePicker';
import  Image  from 'next/image';
import { CarsCardBig } from '../components/Card/CarsCardBig';
import Aside from '../components/aside';
import Footer from '../components/footer';
import NavBar from '../components/navbar';
import axios from "axios";


export default function Home() {

const [data, setData] = useState([])
const [isloading, setIsLoading] = useState(true)

useEffect(() => {
axios
.get('https://rent-shark-wild.netlify.app/api/vehicle')
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
<main className="flex flex-col relative ">
<NavBar />
  <div className="mt-10 md:mt-0">
    <div className="flex w-full max-h-64 overflow-hidden">
      <img className="bg-cover md:h-full object-cover object-bottom phone:hidden" 
        src="/Home_Image.png"
        alt="Picture of the author"
      />
    </div>

    <div className="flex max-h-44 relative">
      <img
      className="w-full object-cover max-h-[33%] bg-[-15rem] absolute " 
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

    
    <div className="flex flex-row md:flex-row gap-4 flex-wrap md:justify-center w-full px-4 md:px-0 md:mx-8">

    {!isloading && data && data.map((vh) => <CarsCardBig key={vh.id} vh={vh}/>)}
    </div>
    </div>
    </section>
    
<Footer/>
</main>
  )
}
