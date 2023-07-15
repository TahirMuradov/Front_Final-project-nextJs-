import React from 'react'
import Image from 'next/image'
import erorGif from "../image/23_52_32_dribbble_1.gif"
const Custom404 = () => {
  return (<>
    <div className='eror_pages w-[100%] text-center h-[100vh]'> 
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

export default Custom404