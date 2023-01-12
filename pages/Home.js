import { React, useEffect, useState } from 'react';
import DatePicker from '../components/datePicker';
import Image from 'next/image';
import { CarsCardBig } from '../components/Card/CarsCardBig';
import Aside from '../components/aside';
import Footer from '../components/footer';
import NavBar from '../components/navbar';
import axios from "axios";


export default function Home() {

  const [data, setData] = useState([])
  const [Selected, setSelected] = useState([])
  const [isloading, setIsLoading] = useState(true)

  useEffect(() => {
if(!Object.values(Selected).join("")){
  axios
  .get(`http://localhost:3000/api/vehicle`)
  .then((res) => {
    setData(res.data)
    console.log(res.data)
    setIsLoading(false)
  })
  .catch((err) => {
    console.log(err)
  });

}else{
 axios
  .get("http://localhost:3000/api/vehicle?where&"+Object.keys(Selected).map((el)=>{return el+"="+Selected[el]}).join("&"))
  .then((res) => {
    setData(res.data)
    console.log(res.data)
    setIsLoading(false)
  })
  .catch((err) => {
    console.log(err)
  });
  
  //console.log(`where&${Object.keys(Selected)[0]}=${Object.values(Selected)[0]}`)
}
console.log()

  }, [Selected])
//console.log(Object.values(Selected),Object.keys(Selected))

  return (
<main className="flex flex-col relative ">
<NavBar />
  <div className="mt-10 md:mt-0">
    <div className="flex md:hidden w-full max-h-64 overflow-hidden">
      <img
      className="bg-cover md:h-full rounded-lg object-cover object-bottom lg:" 
        src="/Home_Image.png"
        alt="Picture of the author"
      />
    </div>

        <div className="hidden md:flex max-h-[95vh] ">
          <img
            className="w-full object-cover object-center max-h-[33%]"
            src="/Home_Image.png"
            alt="Picture of the author"
          />
        </div>

        <div className=" mx-10 mt-10 md:absolute bg-slate-100 p-4 top-0 md:translate-y-[40vw] lg:translate-y-[40vh] ">
          <DatePicker />
        </div>
      </div>


      <section className="h-full mt-4  min-h-screen flex flex-row">
        <Aside onChange={(e)=>setSelected({...Selected,...e})}/>
        <div className='flex flex-col w-screen overflow-x-hidden overflow-y-scroll items-center'>
          <h2 className="text-3xl font-medium py-4">Available Cars</h2>


          <div className="flex flex-col md:flex-row gap-4 flex-wrap md:justify-center w-full px-4 md:px-0 md:mx-8">

            {!isloading && data && data.map((vh,index) => <CarsCardBig key={index} vh={vh} />)}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
// rounded-md bg-red-500 mx-10 mt-10 md:absolute bg-slate-100 p-4 top-0 md:translate-y-[40vw] lg:translate-y-[40vh]
// caractéristiques image background: md:h-full rounded-lg object-cover object-bottom