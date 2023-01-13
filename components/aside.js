import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'


const Checkbox = ({ inp,Checked,value }) => {
  return <div key={inp} className="pl-2 flex items-start py-0">
    <div className="flex items-center h-5">
      <input
        id={inp}
        aria-describedby="comments-description"
        name={inp}
        type="checkbox"
        onChange={(e)=>{
          if(e.target.checked == true){
            Checked(e.target.name,true)
          }else{
            Checked(e.target.name,false)
          }
        }}
        checked={value}
        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
      />
    </div>
    <div className="ml-3 text-sm h-7">
      <label htmlFor={inp} className="font-medium text-gray-700">
        {inp}
      </label>
    </div>
  </div>
}
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Slider = ({ inp }) => {
  return (<div className="flex flex-col w-full rounded-md px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
  <p className="flex-1 text-left capitalize">{inp.name}</p>
    <input id="small-range" type="range" className="w-4/5 mt-4 h-2 mb-6 bg-blue-600 rounded-full appearance-none cursor-pointer range-sm" />
    <p className="self-start">Max. 100.00€</p>
</div>)
  
  
  
}




export default function Aside({onChange,Selected}) {
  const [data, setData] = useState(null)
  const [fieldset, SetFieldset] = useState(null)





  useEffect(() => {
    axios.get("http://localhost:3000/api/category/all").then((res) => {
      SetFieldset(Object.keys(res.data).map((el) => {
        if (el === "mileage" || el === "daily_cost") {
          return { name: el, value: [...res.data[el]], type: "Slider" }
        } else {
          return { name: el, value: [...res.data[el]] }
        }

      }))
    })

  }, [])
  return fieldset && (



    <aside className=" hidden md:flex shadow-xl border-r border-gray-300 mr-4 mt-8">

      <nav className="md:flex  flex-col xl:w-screen h-screen  xl:max-w-[18em] min-w-[15em]">

        {fieldset
          .filter((el) => el.name !== "category_id")
          .map((item, index) => {
            return <fieldset key={index} className="pl-4 space-y-2 mt-1">
              {
                item.type !== "Slider" ?(
                  <Menu as="div" className="inline-block text-left w-full">
                    <div>
                      <Menu.Button className="inline-flex w-full rounded-md px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                         <p className="flex-1 capitalize text-left">{item.name}</p>
                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right  right-0 mt-2 w-full ">
                        <div className="py-4 ">
                        {item.value.map((inp,index2) => {
                            if (item.type !== "Slider") {
                              return <Checkbox key={index2} inp={inp} 
                              value={Selected[item.name]?.includes(inp)|| false}
                              Checked={(e,Checked)=>{
                                const rest = Selected[item.name]||[]
                                Checked?onChange({[item.name]:[...rest,e]}):onChange({[item.name]:rest.filter(  i=>i!==e )})
                              }}/>



                            }


                          })}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                
                ):<Slider key={index} inp={item} />
              
              
              }
            </fieldset>
          })}
      </nav>

    </aside>
  )
}
