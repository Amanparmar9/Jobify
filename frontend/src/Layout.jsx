import React from 'react'

import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'

function Layout() {
  return (
    <>
      {/* here the header remains constant at each and every page. */}
      
        <Header/>
        <Outlet/>
    </>
  )
}

export default Layout