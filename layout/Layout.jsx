import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'

import React from 'react'
import { useSelector } from 'react-redux';


const Layout = ({children}) => {
  const ThemeValue = useSelector((state) => state.darkSlice.ThemeValue);

  return (
<>



<Header/>
{children}
<Footer/>

</>


  )
}

export default Layout