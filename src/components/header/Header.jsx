import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../image/logo.webp";
import logo_white from "../../image/logo-white.webp";
import Router, { useRouter } from 'next/router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping, faComment, faHeart, faX } from "@fortawesome/free-solid-svg-icons";
import DarkMode from "../darkMode/DarkMode";
import { useDispatch, useSelector } from "react-redux";
import useReadingProgress from "../progressScrool/useReadingProgress";
import Loading from "../../pages/loading/loading";
import { multilaungeActions } from "@/redux/multiaungeSlice";
import Chat from "../miniChat/Chat";
import az from "../../pages/api/az.json"
import tr from "../../pages/api/tr.json"
import en from "../../pages/api/en.json"

const Header = () => {
  const ThemeValue = useSelector((state) => state.darkSlice.ThemeValue);
  const Launge = useSelector((state) => state.multilanguage.launge);
  const withListCount = useSelector((state) => state.withList.totalAmount);


  let clikcCounter=0
  const navMenuRef=useRef(null);
  const navBarsRef=useRef(null);
  const navXRef=useRef(null);
  const gotoTOPbtn=useRef(null);
  const headerRef=useRef(null);
  const dispatch=useDispatch();
const linkRef=useRef([{}]);
  const [loading,setLoading]=useState(false);


  useEffect(()=>{

    ThemeValue?headerRef.current.classList.add("darkMode"):headerRef.current.classList.remove("darkMode")
  
  },[ThemeValue])

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
},[Launge])
  function scrollFunction() {
    document.body.style.tarnsition="1s"
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
 Router.events.on("routeChangeStart",()=>{
 setLoading(true)
document.querySelector("body").style.overflow="hidden"
})
  Router.events.on("routeChangeComplete",()=>{
    setLoading(false)
document.querySelector("body").style.overflow="auto"

  })
  const stateLaunge=useSelector((state)=>state.multilanguage.launge)
const selectedLaunge=(e)=>{
const launge=e.target.value;
dispatch(
  multilaungeActions.changeLaunguage({
   value:launge
  })
)






}

  return (<>
    <header ref={headerRef} id="header" className={`w-full h-auto sticky z-10`}>
      <header id="top_header" className="lg:flex justify-between mx-[5px] hidden ">
<div className="info_locations">
  <span>460 West 34th Street, 15th floor, New York - Hotline: 804-377-3580 - 804-399-3580</span>
</div>
<div className="rigth">
  <button className="px-[5px]"> {az.LoginAndRegister}</button>
  <select name="" id="" onChange={selectedLaunge}>
    <option value="az">Az</option>
    <option value="tr">Tr</option>
    <option value="en">En</option>
  </select>
</div>
      </header>
      <header id="bottom_header">
      <div className="w-[98%] h-auto m-auto">
        <div className="flex justify-between items-center">
          <div className="logo w-[15%]">
            <Link href="/">
              <Image src={ThemeValue?logo_white:logo} className="w-full" />
            </Link>
          </div>
          <div ref={navMenuRef} className="nav-menu absolute lg:sticky top-[100%] left-0 transition-[1s,ease] w-[0] lg:w-[20%]  lg:h-auto invisible opacity-0 lg:visible lg:opacity-[1]">
            <ul className="flex flex-col lg:flex-row w-full h-auto p-[10%]">
           
             {
           
              az.header.pages.map((route,index)=>(
                  <li key={index}  className="p-2 w-full h-auto text-center">
                  <Link ref={linkRef} key={index} href={`${route.pathName}`} >{route.displey}</Link>

                </li>
              ))
             }
            </ul>
          </div>
          <div className="nav-icons flex items-center justify-center">
            <div className="heart_box relative cursor-pointer">
<span className="absolute left-[41%] top-[-10%]">{withListCount}</span>
<Link href={'/withList'}>


          <FontAwesomeIcon icon={faHeart} className="p-3 text-[30px] text-[#4ed38f]"/>
</Link>
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
   
    <button ref={gotoTOPbtn} onClick={backToTop}  type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className=" z-20 inline-block p-3 bg-[#4ED38F] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  transition duration-150 ease-in-out bottom-5 right-5" id="btn-back-to-top">
  <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-4 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path></svg>

</button>
<span
        style={{ transform: `translateX(${completion - 100}%)` }}
        className="fixed bg-[#4ED38F] h-1 w-full bottom-0 right-0 z-[9999]"
      />
{loading && <Loading/>}
<Chat/>
  </>
  );
};

export default Header;
