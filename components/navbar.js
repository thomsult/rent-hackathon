import React,{useState}from "react";





export default function NavBar(){
  
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
       <nav className="flex justify-end px-5 bg-white-500 p-3 w-full">
        <div className="mr-auto">
            <img src='/image1.svg'></img>
        </div>
        <div class="flex gap-5 px-4 py-4">
          <button type="button" class="bg-yellow-500 px-5 rounded-md max-h-[3em]"><span>Inscription</span></button>
          <>
          {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}  className="bg-yellow-500 px-5 rounded-md max-h-[3em]">Se connecter</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}  className="bg-yellow-500 px-5 rounded-md max-h-[3em]">Se deconnecter</button>
        )}
          </>
          </div>
          </nav>
    )
}