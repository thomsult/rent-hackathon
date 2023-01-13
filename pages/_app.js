import '../styles/globals.css'
import React, { useState } from 'react';
import UserContext from '../context/UserContext';
import LocationContext from '../context/LocationContext';

function MyApp({ Component, pageProps }) {

  const [user, setUser] = useState({})
  const [location, setLocation] = useState({})


  return (<UserContext.Provider value={{user, setUser}}>
  <LocationContext.Provider value={{location, setLocation}} >
    <Component {...pageProps} />
    </LocationContext.Provider>
    </UserContext.Provider>)

    

}

export default MyApp
