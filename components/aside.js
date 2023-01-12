import React from 'react'

export default function Aside() {
  const fieldset = [
      {name:"TYPE",value:["Sport","SUV","MPV","Sedan","Coupe","Hatchback"]},
      {name:"CAPACITY",value:["2 Person","4 Person","6 Person","8 or More"]},
      {name:"DOORS",value:["5 Doors","4  Doors"]}
    ]
  
  
    return (



        <aside className=" hidden md:flex shadow-xl border-r border-gray-300 mr-4 mt-8">
            <nav className="md:flex  flex-col xl:w-screen h-screen  xl:max-w-[18em]">
            {fieldset.map((item)=>{
              return <fieldset key={item.name} className="pl-4 space-y-2 mt-1">
                <legend className="">{item.name}</legend>
                {item.value.map((inp)=>{
                  return (
                    <div key={inp} className="pl-2 flex items-start py-0">
                    <div className="flex items-center h-5">
                      <input
                        id={inp}
                        aria-describedby="comments-description"
                        name={inp}
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm h-7">
                      <label htmlFor={inp} className="font-medium text-gray-700">
                        {inp}
                      </label>
                    </div>
                  </div>)
                })}
              </fieldset>
})}

                <fieldset className="py-2 ml-2 ">
                    <legend>PRICE</legend>

                    <div className="p-2  flex flex-col items-center">
                        <input id="small-range" type="range" className="w-4/5 h-2 mb-6 bg-blue-600 rounded-full appearance-none cursor-pointer range-sm"/>
                            <p className="self-start">Max. 100.00€</p>
                    </div>
                </fieldset>
            </nav>

        </aside>
    )
}
