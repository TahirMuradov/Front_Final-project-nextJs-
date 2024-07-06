import { Cookie, Inter } from "next/font/google";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  faChevronRight,
  faGlobe,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { useRef } from "react";
import Oclok from "@/components/UI/oclok/Oclok";
import { getServerSideProps } from "../pages/api/hello.js";
import ProductCart from "@/components/UI/ProductCart.jsx";
import Image from "next/image.js";
import sliderImmg1 from "../image/1_c4f83e1f-c314-46cd-865f-dd0435300f62_x1024.webp";
import sliderImmg2 from "../image/2_e017225f-c8a8-4d2e-ab3c-5af4da0e0190_x1024.webp";
import sliderImmg3 from "../image/3_d76fe6af-e867-447e-8073-70cbfd2a8f53_x1024.webp";

const inter = Inter({ subsets: ["latin"] });

 function Home({ data }) {
  const mainRef = useRef(null);
  const sliderRef = useRef(null);


  const ThemeValue = useSelector((state) => state.darkSlice.ThemeValue);
  var newSettings = {
    dots:true,
    autoplay: true,
    speed: 800,
    lazyLoad: "progressive",
    arrows: true,
    dots: false,
  };
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

  };
  var settings2 = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow:1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
  };

  useEffect(() => {
    ThemeValue
      ? mainRef.current.classList.add("darkMode")
      : mainRef.current.classList.remove("darkMode");
    ThemeValue
      ? sliderRef.current.classList.add("darkMode")
      : sliderRef.current.classList.remove("darkMode");
  });

  return (
    <>
      {
         
        <main ref={mainRef} className={`home_main`}>
          <section id="slider_sections">
          
        
            <div ref={sliderRef} className={`w-full h-auto bg-[#5c5858da]`}>
              <div className="w-[50%] m-auto">
                <Slider {...settings} className="text-center">
                  <div className="text-center">
                    <div className="flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faGlobe}
                        className="text-[#2DC47F] px-3 text-[20px]"
                      />
                      <p className="text-[#000 !impotant]">
                        <strong>Free delivery</strong>: Get free standard
                        delivery on every order with Shoe Store
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faPhoneVolume}
                        className="text-[#2DC47F] px-3 text-[20px]"
                      />
                      <p>
                        <strong>Free delivery</strong>: Get free standard
                        delivery on every order with Shoe Store
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="text-[#2DC47F] px-3 text-[20px]"
                      />
                      <p>
                        <strong>Free delivery</strong>: Get free standard
                        delivery on every order with Shoe Store
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
            {/* <section class="banner__slider w-full">
              <div class="slider stick-dots">
                <Slider waitForAnimate={true} {...settings} className="text-center">
                  <div class="slide">
                    <div class="slide__img">
                      <Image 
                      
                         src={sliderImmg1}
                        class="full-image animated"
                        data-animation-in="zoomInImage"
                      />
                    </div>
                    <div class="slide__content ">
                      <div class="slide__content--headings text-center">
                        <p
                          class="animated top-title"
                          data-animation-in="fadeInUp"
                          data-delay-in="0.3"
                        >
                          Welcome to Shareat restaurant
                        </p>
                        <h2 class="animated title" data-animation-in="fadeInUp">
                          Let Enjoy The Rhym Of Fooday Dishes
                        </h2>
                        <button
                          class="btn-light btn button-custom animated"
                          data-animation-in="fadeInUp"
                        >
                          Our menu
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="slide">
                    <div class="slide__img">
                      <Image
                        src={sliderImmg2}
                        alt=""
                        data-lazy="https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        class="full-image animated"
                        data-animation-in="zoomOutImage"
                      />
                    </div>
                    <div class="slide__content slide__content__right">
                      <div class="slide__content--headings text-right">
                        <p
                          class="animated top-title"
                          data-animation-in="fadeInLeft"
                          data-delay-in="0.2"
                        >
                          Wish you have good food at our restaurant
                        </p>
                        <h2
                          class="animated title"
                          data-animation-in="fadeInLeft"
                        >
                          Experience the food
                        </h2>
                        <button
                          class="btn-success btn button-custom animated text-white"
                          data-animation-in="fadeInUp"
                        >
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="slide">
                    <div class="slide__img">
                      <Image
                        src={sliderImmg3}
                        alt=""
                        data-lazy="https://images.unsplash.com/photo-1502741126161-b048400d085d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                        class="full-image animated"
                        data-animation-in="zoomInImage"
                      />
                    </div>
                    <div class="slide__content slide__content__left">
                      <div class="slide__content--headings text-left">
                        <p
                          class="animated top-title"
                          data-animation-in="fadeInRight"
                          data-delay-in="0.2"
                        >
                          Purchase today. just $76
                        </p>
                        <h2
                          class="animated title"
                          data-animation-in="fadeInRight"
                        >
                          SUPER DEAL LUNCH
                        </h2>
                        <button
                          class="btn-light btn button-custom animated"
                          data-animation-in="fadeInUp"
                        >
                          Today's Menu
                        </button>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
             
            </section> */}
          <Oclok />
          <div className="grid grid-cols-3">
            {data?.map((item) => (
              <ProductCart data={item} key={item.id} />
            ))}
          </div>
        </main>
      }
    </>
  );
}
export { getServerSideProps };
export default Home;