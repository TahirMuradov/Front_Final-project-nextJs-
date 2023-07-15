import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../image/logo.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping, faHeart, faX } from "@fortawesome/free-solid-svg-icons";
import DarkMode from "../darkMode/DarkMode";
import { useSelector } from "react-redux";

import useReadingProgress from "../progressScrool/useReadingProgress";
const Header = () => {
  const themeState = useSelector((state) => state.darkSlice.value);
  let clikcCounter=0
  const navMenuRef=useRef(null);
  const navBarsRef=useRef(null);
  const navXRef=useRef(null);
  const gotoTOPbtn=useRef(null);

  const nav_menu_responsive=()=>{
clikcCounter++;

if (clikcCounter==1) { 

    navMenuRef.current.classList.add("nav-menu_active")  
    navBarsRef.current.classList.add("fabars_active")
    navXRef.current.classList.add("fax_active")
  
}else if(clikcCounter==2){
navMenuRef.current.classList.remove("nav-menu_active")
navBarsRef.current.classList.remove("fabars_active")
navXRef.current.classList.remove("fax_active")
  clikcCounter=0;


}

  }
useEffect(()=>{

  window.onscroll = function () {
      scrollFunction();
    };
},[])
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      gotoTOPbtn.current.style.display = "block";
    } else {
      gotoTOPbtn.current.style.display = "none";
    }
  }
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      gotoTOPbtn.current.style.display = "block";
    } else {
      gotoTOPbtn.current.style.display = "none";
    }
  }
  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  const completion = useReadingProgress();

  return (<>
    <header id="header" className={`w-full h-auto sticky z-[999] ${themeState=="dark"?"darkMode":""}`}>
      <header id="top_header" className="lg:flex justify-between mx-[5px] hidden ">
<div className="info_locations">
  <span>460 West 34th Street, 15th floor, New York - Hotline: 804-377-3580 - 804-399-3580</span>
</div>
<div className="rigth">
  <button className="px-[5px]"> Login&Register</button>
  <select name="" id="">
    <option value="">USD$</option>
    <option value="">AZN₼</option>

  </select>
</div>
      </header>
      <header id="bottom_header">
      <div className="w-[98%] h-auto m-auto">
        <div className="flex justify-between items-center">
          <div className="logo w-[15%]">
            <Link href="/">
              <Image src={logo} className="w-full" />
            </Link>
          </div>
          <div ref={navMenuRef} className="nav-menu absolute lg:sticky top-[100%] left-0 transition-[1s,ease] w-[0] lg:w-[20%]  lg:h-auto invisible opacity-0 lg:visible lg:opacity-[1]">
            <ul className="flex flex-col lg:flex-row w-full h-auto p-[10%]">
              <li  className="p-2 w-full h-auto text-center">
                <Link href="/">Home</Link>
              </li>
              <li className="p-2 w-full h-auto text-center">
                <Link href="/shop">Shop</Link>
              </li>
              <li className="p-2 w-full h-auto text-center">
                <Link href="/about">About</Link>
              </li>
              <li className="p-2 w-full h-auto text-center">
             
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="nav-icons flex items-center justify-center">
            <div className="heart_box relative cursor-pointer">
<span className="absolute left-[41%] top-[-10%]">1</span>
          <FontAwesomeIcon icon={faHeart} className="p-3 text-[30px] text-[#4ed38f]"/>
            </div>
            <div className="cart_box relative cursor-pointer">

          <FontAwesomeIcon icon={faCartShopping} className="p-3 text-[30px] text-[#4ed38f] "/>
          <span className="absolute right-[41%] top-[-10%]">1</span>
            </div>
            <div className="mode_buttons relative">
<DarkMode/>
            </div>
          </div>
          <div  className="nav-bars block lg:hidden cursor-pointer" onClick={()=>nav_menu_responsive()}>
          <FontAwesomeIcon icon={faX} ref={navXRef} className=" fax text-[30px] text-[#4ed38f]"/>
          <FontAwesomeIcon icon={faBars}  ref={navBarsRef} className="fabars text-[30px] text-[#4ed38f]" />
      
          </div>
 
        </div>
      </div>
      </header>
   
    </header>
   
    <button ref={gotoTOPbtn} onClick={backToTop}  type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className="inline-block p-3 bg-[#4ED38F] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out bottom-5 right-5" id="btn-back-to-top">
  <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-4 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path></svg>
</button>
<span
        style={{ transform: `translateX(${completion - 100}%)` }}
        className="fixed bg-[#4ED38F] h-1 w-full bottom-0 right-0"
      />
  </>
  );
};

export default Header;
