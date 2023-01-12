import Link from "next/link";
import React,{useState}from "react";






export default function NavBar(){
  
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
       <nav className="flex justify-end px-5 bg-white-500 p-3 w-full">
        <div className="mr-auto">
            <img src='/image1.svg'></img>
        </div>
        <div class="flex gap-5 px-4 py-6">
          <Link href="/register"className="2xl:bg-[#F3B33D] px-5 rounded-md max-h-[3em] xl: bg-[#F3B33D] px-5 rounded-md max-h-[3em] lg: bg-[#F3B33D] px-5 rounded-md max-h-[3em] md:bg-[#F3B33D] px-5 rounded-md max-h-[3em] sm: bg-[#F3B33D] px-5 py-3 rounded-md max-h-[3em]"><span>Inscription</span></Link>
          <>
          {!isLoggedIn ? (
          <Link href="/login" onClick={() => setIsLoggedIn(false)}  className="2xl:bg-[#F3B33D] px-5 rounded-md max-h-[3em] xl: bg-[#F3B33D] px-5 rounded-md max-h-[3em] lg: bg-[#F3B33D] px-5 rounded-md max-h-[3em] md:bg-[#F3B33D] px-5 rounded-md max-h-[3em] sm: bg-[#F3B33D] px-5 py-3 rounded-md max-h-[3em]">Se connecter</Link>
        ) : (
          <Link href="/" onClick={() => setIsLoggedIn(true)}  className="bg-bg-[#F3B33D] px-5 rounded-md max-h-[3em]">Se deconnecter</Link>
        )}
          </>
          </div>
          </nav>
    )
}