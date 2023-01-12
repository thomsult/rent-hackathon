import React from 'react'
/* T Y P E
Sport  (10)
SUV  (12)
MPV  (16)
Sedan  (20)
Coupe  (14)
Hatchback  (14)
C A P A C I T Y
2 Person  (10)
4 Person  (14)
6 Person  (12)
8 or More  (16)
D O O R S
5 Doors(10)
4  Doors  (14)
P R I C E
Max. 100.00€ */


export default function Aside() {
  const fieldset = [
      {name:"TYPE",value:["Sport","SUV","MPV","Sedan","Coupe","Hatchback"]},
      {name:"CAPACITY",value:["2 Person","4 Person","6 Person","8 or More"]},
      {name:"DOORS",value:["5 Doors","4  Doors"]}
    ]
  
  
    return (



        <aside className="shadow-xl border-r border-gray-300 mr-4 mt-8">
            <nav className=" hidden md:flex  flex-col xl:w-screen h-screen  xl:max-w-[18em]">
            {fieldset.map((item)=>{
              return <fieldset className="pl-4 space-y-2 mt-1">
                <legend className="">{item.name}</legend>
                {item.value.map((inp)=>{
                  return (
                    <div className="pl-2 flex items-start py-0">
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
