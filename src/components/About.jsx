import React from 'react'
import { faGlobe, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import Image from 'next/image';
import user1 from "../image/about_user1.webp"
import user2 from  "../image/about_user2.webp"
import user3 from  "../image/about_user3.webp"
import user4 from  "../image/about_user4.webp"

const About = () => {
  const ThemeValue = useSelector((state) => state.darkSlice.ThemeValue);

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed:3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
    return (
  
  <main id='about_main' className={`home_main${ThemeValue=="dark"?"darkMode":""} `}>
  
   <div className={`w-full h-auto bg-[#EEEEEE] ${ThemeValue=="dark"?"darkMode":""}`}>
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
  
  <section className={`sec_about1 w-[100%] h-[80vh] relative ${ThemeValue=="dark"?"darkMode":""}`} >
  <div className="overlay w-full h-full bg-[black] opacity-60 flex justify-center items-center">
  
  </div>
  <div className="content absolute w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
    <h3 className='text-[36px] text-[#2ac37e] text-center'> OUR MISSION</h3>
  <h3 className='text-[white] text-[50px] text-center'>YOUR SUCCESS IS OUR AMBITION. <br />
  YOUR DEFEAT SPURS US ON TO BE BETTER.</h3>
  </div>
  </section>
  
  <section className={`sec_team w-full h-auto ${ThemeValue=="dark"?"darkMode":""}`}>
    <div className="w-4/5 m-auto">
      <div className="title">
        <div className='title_text flex items-center h-[20vh] '>
          <h4 className='text-[22px]'>
          - OUR STAFF
            </h4>
          </div>
      </div>
      <div className="row_user flex  flex-wrap">
        <div className="user_box w-[50%] lg:w-[25%]">
  
        <div className="img-box w-[full] h-auto px-1"><Image src={user1} className='w-full'/></div>
        <div className="content">
        <h3>Christian Gregory</h3>
          <p>CEO - Founder</p>
        </div>
        </div>
        <div className="user_box w-[50%] lg:w-[25%]">
  
  <div className="img-box w-[full] h-auto px-1"><Image src={user1} className='w-full'/></div>
  <div className="content">
  <h3>Christian Gregory</h3>
    <p>CEO - Founder</p>
  </div>
  </div>
  <div className="user_box w-[50%] lg:w-[25%]">
  
  <div className="img-box w-[full] h-auto px-1"><Image src={user1} className='w-full'/></div>
  <div className="content">
  <h3>Christian Gregory</h3>
    <p>CEO - Founder</p>
  </div>
  </div>
  <div className="user_box w-[50%] lg:w-[25%]">
  
  <div className="img-box w-[full] h-auto px-1"><Image src={user1} className='w-full'/></div>
  <div className="content">
  <h3>Christian Gregory</h3>
    <p>CEO - Founder</p>
  </div>
  </div>
      </div>
      
    </div>
  </section>
   </main>
  
  
    )
}

export default About