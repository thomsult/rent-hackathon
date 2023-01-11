import "../styles/globals.css"

import React from 'react'

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  )
}
