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
<<<<<<< HEAD
<main className="h-screen flex flex-col relative">
  <nav className="bg-yellow-500 p-6 px-10 w-full">Najim</nav>
  <div className="md:mt-0">
    <div className="flex md:hidden w-full max-h-64 overflow-hidden">
      <img
      className="bg-cover md:h-full object-cover object-bottom" 
=======
<main className="flex flex-col relative ">
<NavBar />
  <div className="mt-10 md:mt-0">
    <div className="flex phone-[400px]:hidden w-full max-h-64 overflow-hidden">
      <img className="bg-cover md:h-full rounded-lg object-cover object-bottom " 
>>>>>>> 3dba5d16a58028aabcee5e68b4536b39572fc896
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
// caractéristiques image background: md:h-full rounded-lg object-cover object-bottom