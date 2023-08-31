import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeartCircleMinus, faHeartCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { withListActions } from '@/redux/withListSlice'
import { toast } from 'react-toastify'


const ProductCart = ({data}) => {

const disPatch= useDispatch()
  const heartPlusRef= useRef(null)
   const withsListState=useSelector((state)=>state.withList.withListItem);

   useEffect(()=>{
   console.log(withsListState);

   },[withsListState])
  const addToWithList=()=>{
    disPatch(withListActions.withListItemAddDelet({
      id:data.id,
      title:data.title,
      price:data.price,
      image:data.image
    }))
toast.success("Elave edildi")
  }
  return (
  

    <div className="product__item border-collapse">
    <Link href={`/productdetail/${data.title}/${data.id}`}>
        <div className="product__img">
          <Image src={data.image} className=' object-cover object-center'width={343} height={490}/>
        </div>
        <div className="product__info p-2">
            <h3 className="product__name">{data.productName}</h3>
            <span>{data.category}</span>
        </div>
    </Link>
    <div className="product__card-bottom flex items-center justify-between">
        <span className='price'>${data.price}</span>
        <div className="add_product">
        <motion.span whileTap={{scale:1.3}} >
        <FontAwesomeIcon icon={faCartPlus} />
        </motion.span>

        <motion.span whileTap={{scale:1.3}} onClick={addToWithList} className='heart_plus cursor-pointer' ref={heartPlusRef} >
        <FontAwesomeIcon icon={faHeartCirclePlus} />
        </motion.span>

        </div>
        
    </div>
</div>
   
  )
}

export default ProductCart