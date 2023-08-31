import Link from 'next/link';
import React from 'react'
import { getServerSideProps } from '../api/hello';

import ProductCart from '@/components/UI/ProductCart';

 const  index = ({data}) => {

   

  return (
    <>
<div className="grid grid-cols-2 lg:grid-cols-4">

   {
    data?.map((item)=>(
      <ProductCart data={item} key={item.id}/>
    ))
   }
</div>

    </>
  )
}
export {getServerSideProps};
export default index;

