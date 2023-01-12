import '../styles/globals.css'
import React, { useState } from 'react';
import UserContext from '../context/UserContext';

function MyApp({ Component, pageProps }) {

  const [user, setUser] = useState({})


  return (<UserContext.Provider value={{user, setUser}}>
    <Component {...pageProps} />
    </UserContext.Provider>)

}

export default MyApp
