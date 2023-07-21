import React, { useEffect, useRef } from 'react'
import erorGif from "../image/23_52_32_dribbble_1.gif"
import { useSelector } from 'react-redux';
import Image from 'next/image';
const Custom404 = () => {
  const ThemeValue = useSelector((state) => state.darkSlice.ThemeValue);
 const erorRef=useRef(null);
 useEffect(()=>{
  ThemeValue?erorRef.current.classList.add("darkMode"):erorRef.current.classList.remove("darkMode")

 },[ThemeValue  ])
  return (<>
  <>
      <div ref={erorRef} className={`eror_pages w-[100%] text-center h-[100vh]  `}> 
    <div className="eror_image m-auto w-[40%]">

<Image src={erorGif} className={`w-full ${ThemeValue?'brightness-50':''}`}/>
    </div>
  <div className="eror404_content">

   <h1 className='inline-block text-[50px]'>ERROR 404,Sehife tapilmadi </h1>
  </div>
    </div>
    </>
  </>
  )
}

export default Custom404