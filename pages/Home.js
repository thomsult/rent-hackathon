import { React, useEffect, useState } from 'react';
import DatePicker from '../components/datePicker';
import Image from 'next/image';
import { CarsCardBig } from '../components/Card/CarsCardBig';
import Aside from '../components/aside';
import Footer from '../components/footer';
import NavBar from '../components/navbar';
import axios from "axios";


export default function Home({props}) {
  const [query ,setQuery] = useState("")
  const [data, setData] = useState([])
  const [Selected, setSelected] = useState([])
  const [isloading, setIsLoading] = useState(true)

useEffect(() => {
  if(query !== "?where&"){
    axios
    .get('http://localhost:3000/api/vehicle'+query)
    .then((res) => {
      setData(res.data)
      //console.log(res.data)
      setIsLoading(false)
    })
    .catch((err) => {
      console.log(err)
    });
  }else{
    axios
    .get('http://localhost:3000/api/vehicle')
    .then((res) => {
      setData(res.data)
      //console.log(res.data)
      setIsLoading(false)
    })
    .catch((err) => {
      console.log(err)
    });
  }


}, [query])

useEffect(() => {
  if(Selected){
    FilterCars(Selected)
  }
}, [Selected])


function FilterCars(e){
  console.log(e)
  let query = "?where&"
  const qq = Object.keys(e).map((key)=>{
    if(e[key].length > 0){
      return key+"="+[...e[key]].join("&"+key+"=");
    }else{
      return ""
    }
  })
  qq.length>0&&setQuery((e)=>query + qq.filter((e)=>e).join("&"))
  return 
   
}

console.log(query)



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
        <Aside onChange={(e)=>setSelected({...Selected,...e})} Selected={Selected}/>
        <div className='flex flex-col w-screen overflow-x-hidden overflow-y-scroll items-center'>
          <h2 className="text-3xl font-medium py-4">Available Cars</h2>

    
    <div className="flex flex-col lg:flex-row gap-4 flex-wrap md:justify-center w-full px-4 md:px-0 md:mx-8">

            {!isloading && data && data.map((vh,index) => <CarsCardBig key={index} vh={vh} />)}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
