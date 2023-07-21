import React from 'react'
import Image from 'next/image'
import logo from "../../image/logo-white.webp"

const Footer = () => {
  return (
    <>
    <footer id='footer' className='p-10 z-10'>
      
    
<div className="overlay">

</div>
<div className="box w-[90%]] h-[90%] z-20 sticky ">
      <div className="gooter_logo w-[120px] ">
        <Image src={logo} className='w-full'/>
      </div>
      <div className="grid grid-cols-2 gap-y-14 lg:grid-cols-5 gap-x-2 mt-[50px]">
<div className="content">
  <h3 className='text-white'>ADDRESS OFFICE 1</h3>
  <p className='text-white'><strong>460 West 34th Street, 15th floor, New York</strong></p>
            
            
            <p className='text-white'>Email: <a href="mailto:support@store.com">support@store.com</a></p>
            
            
            <p className='text-white'>Phone: +323 32434 5334</p>
            
            
            <p className='text-white'>Fax: ++323 32434 5333</p>
 
</div>
<div className="content">
  <h3 className='text-white'>ADDRESS OFFICE 1</h3>
  <p className='text-white'><strong>460 West 34th Street, 15th floor, New York</strong></p>
            
            
            <p className='text-white'>Email: <a href="mailto:support@store.com">support@store.com</a></p>
            
            
            <p className='text-white'>Phone: +323 32434 5334</p>
            
            
            <p className='text-white'>Fax: ++323 32434 5333</p>
 
</div>
<aside class="text-white">
          <div class="block-header">
            
            <h3 class="ps-widget__title">FIND OUR STORE</h3>
            
          </div>
          <div class="block-content">
            <ul class="ps-list--link">
              
              
              <li>
                <a href="#">coupon code</a>
              </li>
              
              <li>
                <a href="/account">signup for email</a>
              </li>
              
              <li>
                <a href="#">site feedback</a>
              </li>
              
              <li>
                <a href="#">careers</a>
              </li>
              
            </ul>
          </div>
        </aside>
        <div class="text-white">
        <aside class="ps-widget--footer ps-widget--link">
          <div class="block-header">
            
            <h3 class="ps-widget__title">GET HELP</h3>
            
          </div>
          <div class="block-content">
            <ul class="ps-list--line">
              
              
              <li>
                <a href="#">order status</a>
              </li>
              
              <li>
                <a href="#">Shipping and delivery</a>
              </li>
              
              <li>
                <a href="#">returns</a>
              </li>
              
              <li>
                <a href="#">payment options</a>
              </li>
              
              <li>
                <a href="/pages/contact-us">contact us</a>
              </li>
              
            </ul>
          </div>
        </aside>
      </div>
      <div class="text-white ">
        <aside class="ps-widget--footer ps-widget--link">
          <div class="block-header">
            
            <h3 class="ps-widget__title">PRODUCTS</h3>
            
          </div>
          <div class="block-content">
            <ul class="ps-list--line">
              
              
              <li>
                <a href="/collections/all">shoes</a>
              </li>
              
              <li>
                <a href="/collections/all">Clothings</a>
              </li>
              
              <li>
                <a href="#">accessries</a>
              </li>
              
              <li>
                <a href="/collections/all">football shoes</a>
              </li>
              
            </ul>
          </div>
        </aside>
      </div>
      </div>
</div>
     
      </footer></>
  )
}

export default Footer