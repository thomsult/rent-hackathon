import Link from "next/link";
import React,{useState,useContext}from "react";
import UserContext from '../context/UserContext';
import { useRouter } from 'next/router'

export default function NavBar(){
  const {user,setUser} = useContext(UserContext);
  const router = useRouter()

    return(
       <nav className="flex justify-end px-5 bg-white-500 p-3 w-full">
        <div className="mr-auto">
            <img src='/image1.svg'></img>
        </div>
        <div class="flex gap-5 px-4 py-6">
          {user && user.email === undefined &&<Link href="/register"className="2xl:bg-[#F3B33D] px-5 rounded-md max-h-[3em] xl: bg-[#F3B33D] px-5 rounded-md max-h-[3em] lg: bg-[#F3B33D] px-5 rounded-md max-h-[3em] md:bg-[#F3B33D] px-5 rounded-md max-h-[3em] sm: bg-[#F3B33D] px-5 py-3 rounded-md max-h-[3em]"><span>Inscription</span></Link>
          }
          {user && user.email === undefined ? (
          <Link href="/login"  className="2xl:bg-[#F3B33D] px-5 rounded-md max-h-[3em] xl: bg-[#F3B33D] px-5 rounded-md max-h-[3em] lg: bg-[#F3B33D] px-5 rounded-md max-h-[3em] md:bg-[#F3B33D] px-5 rounded-md max-h-[3em] sm: bg-[#F3B33D] px-5 py-3 rounded-md max-h-[3em]">Connexion</Link>
        ) : (
          <button type="button" onClick={() => {
            router.push("/#")
            setUser({})
          }}  className="bg-[#F3B33D] px-5 py-2 rounded-md max-h-[3em]">Deconnexion</button>
        )}
          </div>
          </nav>
    )
}