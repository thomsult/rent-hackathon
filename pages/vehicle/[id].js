import { React, useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { Battery100Icon } from "@heroicons/react/24/outline";
import { CogIcon, UsersIcon, ViewColumnsIcon } from "@heroicons/react/24/solid";
import axios from 'axios'
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import Booking from '../../components/Booking/Booking';
const carOnePage = () => {

const [showModal, setShowModal] = useState(false)

const handleClick = () => {
    setShowModal(true)
}

const router = useRouter()
const {id} = router.query
console.log(id)

const [data, setData] = useState([])
const [isloading, setIsLoading] = useState(true)

useEffect(() => {
    if(id) {
    axios
    .get(`https://rent-shark-wild.netlify.app/api/vehicle/${id}`)
    .then((res) => {
      setData(res.data)
      console.log(res.data)
      setIsLoading(false)
    })
    .catch((err) => {
      console.log(err)
    })}
    
    }, [id])

    return isloading ? <p>Loading... </p> : (
        <main className="">
        {showModal && <Booking showModal={showModal} setShowModal={setShowModal} data={data}/>}
        <NavBar />
        <div className="h-full w-full py-4 rounded-xl bg-white px-4">
          <div>
            <h1 className="text-3xl font-bold text-[#555555] md:px-8">
              {data.brand} {data.model}
            </h1>
            <h2 className="text-2xl font-medium text-[#6f6d6d] md:px-8">
              {data.detail}
            </h2>
            <div className='flex flex-col lg:flex-row lg:justify-center lg:items-center lg:gap-6 md:flex-row md:justify-center'>
            <div className="">
              <img
                src= {data.image_car}
                alt="voiture"
                className=""
              />
            </div>
            <div className='lg:w-1/3 hidden lg:inline-block'><h2 className='lg:text-justify mx-auto break-word  sm:inline-block font-medium text-base'>{data.description_category}</h2>
            </div>
            </div>
            <div className="flex mt-4 justify-around">
              <div className="flex">
                <ViewColumnsIcon className="h-6 w-6" />{" "}
                <h3 className="text-md font-medium text-[#555555] ml-1">
                 {data.doors}
                </h3>
              </div>
              <div className="flex">
                <Battery100Icon className="h-6 w-6" />{" "}
                <h3 className="text-md font-medium text-[#555555] ml-1">
                  {data.fuel_type}
                </h3>
              </div>
              <div className="flex">
                <CogIcon className="h-6 w-6" />{" "}
                <h3 className="text-md font-medium text-[#555555] ml-1">
                  {data.transmission}
                </h3>
              </div>
              <div className="flex">
                <UsersIcon className="h-6 w-6" />{" "}
                <h3 className="text-md font-medium text-[#555555] ml-1">
                  {data.seats}
                </h3>
              </div>
            </div>
            <div className='max-h-72 overflow-y-scroll'>
            <div className='lg:w-1/3 '><h2 className=' text-justify break-word pt-8 text-sm font-medium lg:hidden px-10'>{data.description_category}</h2>
            </div>
            </div>
            <div className="flex justify-around my-16 ">
              <h4 className="text-md font-bold text-[#555555] text-2xl">
                {data.daily_cost} EUR/<span className="text-[grey]">jour</span>
              </h4>
              <button className="bg-[#F3B33D] text-white px-4 py-2 rounded-lg ml-4 text-xl lg:text-md font-semibold text-center" onClick={handleClick}>
                Reserver
              </button>
            </div>
          </div>
        </div>
        <div className='border-b w-screen mx-auto'>
        <Footer />
        </div>
      </main>
    );
};

export default carOnePage;