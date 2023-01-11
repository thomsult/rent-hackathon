import React from 'react'
import Image from 'next/image'

export default function PublicLayout({children}) {
  return (
    <div className="min-h-full flex">
         
    <div className="hidden lg:block relative w-0 flex-1">
    <Image
    className="absolute inset-0 h-full w-full object-cover"
      src="/Home_Image.png"
      alt="Picture of the author"
      fill
      sizes=" 100vh"
    />
  </div>
  {children} 
  </div>
  )
}
