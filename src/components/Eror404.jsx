import React from 'react'
import { useSelector } from 'react-redux';
import Image from 'next/image'
import erorGif from "../image/23_52_32_dribbble_1.gif"
const Eror404 = () => {
  const themeState = useSelector((state) => state.darkSlice.value);

  return (
    <>
      <div className={`eror_pages w-[100%] text-center h-[100vh] ${themeState=="dark"?"darkMode eror_img_dark":""} `}> 
    <div className="eror_image m-auto w-[40%]">

<Image src={erorGif} className='w-full'/>
    </div>
  <div className="eror404_content">

   <h1 className='inline-block text-[50px]'>ERROR 404,Sehife tapilmadi </h1>
  </div>
    </div>
    </>
  )
}

export default Eror404