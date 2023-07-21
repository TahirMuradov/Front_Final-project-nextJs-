import React, { useEffect, useState } from 'react'
import counterImg from "../../../image/3_d76fe6af-e867-447e-8073-70cbfd2a8f53_x1024.webp"
import { useSelector } from 'react-redux'

const Oclok = () => {
    const[date,setDate]=useState()
    const[hours,setHours]=useState()
    const[minutes,setMinutes]=useState()
    const[seconds,setSeconds]=useState()
    
   let interval;
  
  const countDown=()=>{
    const destionation=new Date("August 15, 2023").getTime() 
  
    /*hansi tarixe qeder davam edirse onu yaziriq ve yazilis beledi:: 1-ci:: ayi---gun--il::
    .getTime()-- verdiyimiz tarixe qeder olan Millisaniyyeni qaytarir ve destination adina == edir
    */
  
     interval=setInterval(() => { 
      
   const now=new Date().getTime();//bu gunun tarixini Millisaniyye ile aldiq
   const different=destionation - now //verdiyimiz vaxdan bu gunu Millisaniyye edib cixdiq
   const days=Math.floor(different / (1000 * 60 * 60 * 24))/*aldigimiz Milli saniyyeni 1ci gune cevirmek ucun 
   1ci saniyyeye vururuq(1000)
            sonra deqiqeye(60)
            sonra saata(60)
            sonra gune(24)
            //gunu aldiq 
   */
  
   const hours=Math.floor(
    (different % (1000 * 60 * 60 * 24))/(1000 * 60 * 60)
     );
   const minutes=Math.floor(
    (different % (1000 * 60 * 60 ))/(1000 * 60)
   );
   const seconds=Math.floor((different % (1000 * 60)) / 1000); 
   
   
   if(different<0){
    clearInterval(interval)
   }
   else{
    setDate(days)
    setHours(hours)
    setMinutes(minutes)
    setSeconds(seconds)
   }
  
    });
  }
  useEffect(()=>{
        countDown()
      
    },[])
    const ThemeValue = useSelector((state) => state.darkSlice.ThemeValue);

  return (
    <div className={`clock__wrapper mt-5 ${ThemeValue? "darkMode":""}`}>
  
     <div className="grid md:grid-cols-1 lg:grid-cols-2  w-10/12 m-auto">

 <div  className=''>
 <h5 className='mb-2'>Limited Offers</h5>
 <h4 className='mb-3'>Quality Armchair</h4>
 <div className='flex items-center  text-white'>
     <div className="clock__data flex items-center gap-3 justify-center text-center">
       <div className="text-center ">
         <h1 className="text-white text-[50px] mb-2 ">{date}</h1>
         <h5 className='text-white'>Days</h5>
       </div>
     <span className='text-white text-[50px] mb-[40px]'>:</span>
     </div>
 
     <div className="clock__data flex items-center gap-3">
       <div className="text-center justify-center">
         <h1 className="text-white text-[50px]  mb-2">{hours}</h1>
         <h5 className='text-white '>Hours</h5>
       </div>
     <span className='text-white text-[50px] mb-[40px]'>:</span>
     </div>
 
     <div className="clock__data flex  items-center gap-3">
       <div className="text-center justify-center">
         <h1 className="text-white text-[50px] mb-2">{minutes}</h1>
         <h5 className='text-white '>minut</h5>
       </div>
     <span className='text-white text-[50px] mb-[40px]'>:</span>
     </div>
 
     <div className="clock__data flex  items-center gap-3">
       <div className="text-center">
         <h1 className="text-white text-[50px] mb-2">{seconds}</h1>
         <h5 className='text-white '>Seconds</h5>
       </div>
   
     </div>
   
    </div> 

 </div>
 
 
 
  <div >
   <img className='counterImg' src={counterImg} alt="" />
  </div> 
     </div>
 
 
    

    </div>
  )
}

export default Oclok