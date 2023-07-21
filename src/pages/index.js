
import { Cookie, Inter } from 'next/font/google'
import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { faChevronRight, faGlobe, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import Oclok from '@/components/UI/oclok/Oclok';
import { setCookie } from 'cookies-next';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
const mainRef=useRef(null);
const sliderRef=useRef(null);

const ThemeValue = useSelector((state) => state.darkSlice.ThemeValue);

setCookie("themeValue",ThemeValue)
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed:3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  var settings2 = {
    dots: false,
    infinite: true,
    arrows:false,
    speed:1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  autoplaySpeed:3000,
  fade: true,
  cssEase: 'linear'
  };
// const[data,useData]=useState(null)
// useEffect(()=>{
// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>{
//               useData([...json])
//             })
// },[])
// useEffect(()=>{
//   window.addEventListener("load",()=>{
//     console.log("window load eventi isledi");
//   })
// },[])

useEffect(()=>{
ThemeValue?mainRef.current.classList.add("darkMode"):mainRef.current.classList.remove("darkMode")
  ThemeValue? sliderRef.current.classList.add("darkMode"):sliderRef.current.classList.remove("darkMode")
})


  return (
    <>
   {
   
<main ref={mainRef} className={`home_main`}>
  <section id='slider_sections'>

<div ref={sliderRef} className={`w-full h-auto bg-[#5c5858da]`}>
  <div className="w-[50%] m-auto">
  <Slider {...settings} className='text-center'>
<div className='text-center'>
  <div className="flex items-center justify-center">
  <FontAwesomeIcon icon={faGlobe} className='text-[#2DC47F] px-3 text-[20px]'/>
       <p className='text-[#000 !impotant]'>
       <strong>Free delivery</strong>: Get free standard delivery on every order with Shoe Store
       </p>
  </div>

      </div>
      <div className='text-center'>
  <div className="flex items-center justify-center">
  <FontAwesomeIcon icon={faPhoneVolume} className='text-[#2DC47F] px-3 text-[20px]'/>
       <p>
       <strong>Free delivery</strong>: Get free standard delivery on every order with Shoe Store
       </p>
  </div>

      </div>
      <div className='text-center'>
  <div className="flex items-center justify-center">
  <FontAwesomeIcon icon={faLocationDot} className='text-[#2DC47F] px-3 text-[20px]'/>
       <p>
       <strong>Free delivery</strong>: Get free standard delivery on every order with Shoe Store
       </p>
  </div>

      </div>
      
</Slider>
  </div>

</div>
<div className="item_slider">
<Slider {...settings2} className='text-center'>
<div className='item_box3 text-center relative'>
  <div className="content_box absolute ">
    <h3 className='text-white inline-block'>
      <strong className='pe-3'>
      March 2002 
      <br />
      Nike SB Dunk Low Pro
      </strong>
      <hr />
    </h3>

        <p className='text-[#FFF] text-[72px] h-[1.5] text-[500]'>SUBA</p>
        <p className='text-[16px] text-[#FFF] h-[1.4] py-3'>
        Supa wanted something that was going to rep his East Coast
        <br />
        roots and, more specifically, his hometown of <br />

 New York City in  a big way.
        </p>
        <button className='slider_button bg-[#fff]'>
                Purchase Now
                <FontAwesomeIcon icon={faChevronRight} />
                  </button>
  </div>

      </div>
      <div className='item_box2 text-center relative'>
  <div className="content_box absolute">
    <h3 className='text-black inline-block'>
      <strong className='pe-3'>
      March 2002 
      <br />
      Nike SB Dunk Low Pro
      </strong>
      <hr />
    </h3>

        <p className='text-[#c94250] text-[72px] h-[1.5]'>SUBA</p>
        <p className='text-[16px] text-[#000] h-[1.4] py-3'>
        Supa wanted something that was going to rep his East Coast
        <br />
        roots and, more specifically, his hometown of <br />

 New York City in  a big way.
        </p>
        <button className='slider_button bg-[#000]'>
                Purchase Now
                <FontAwesomeIcon icon={faChevronRight} />
                  </button>
  </div>

      </div>
     
      <div className='item_box1 text-center relative'>
  <div  className="content_box absolute">
    <h3 className='text-white inline-block'>
      <strong className='pe-3'>
      March 2002 
      <br />
      Nike SB Dunk Low Pro
      </strong>
      <hr />
    </h3>

        <p className='text-[#46b45e] text-[72px] h-[1.5]'>SUBA</p>
        <p className='text-[16px] text-[#FFF] h-[1.4] py-3'>
        Supa wanted something that was going to rep his East Coast
        <br />
        roots and, more specifically, his hometown of <br />

 New York City in  a big way.
        </p>
        <button className='slider_button bg-[#fff]'>
                Purchase Now
                <FontAwesomeIcon icon={faChevronRight} />
                  </button>
  </div>

      </div>
</Slider>
</div>

  </section>
 <Oclok/>

</main>

   }

    </>


  )
}
