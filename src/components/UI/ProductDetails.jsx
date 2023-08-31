import React from 'react'

import Image from 'next/image'
import Link from 'next/link'


const ProductCard = ({data}) => {
  return (
<Link href={`/productdetail/${data.title}/${data.id}`}>

  <div className="w-4/5 m-auto">

    <div className="grid lg:grid-cols-2 grid-cols-1 grid-rows-3">

 <div className="item_img  w-full h-full">
<Image src={data.image} className=' object-cover object-center'width={343} height={490}/>
 </div>
 <div className="item_content">
<h1>{data.title}</h1>
 </div>
    </div>
  </div>
  </Link>

  )
}

export default ProductCard