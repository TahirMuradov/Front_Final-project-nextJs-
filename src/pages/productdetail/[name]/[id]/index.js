import React from 'react'
import { getServerSideProps } from '../../../api/hello';
import { useRouter } from 'next/router';
import ProductCard from '@/components/UI/ProductDetails';

const index = ({data}) => {
    const router = useRouter();
    const {pathname,query}=router;
    
    const  productId  = router.query.id;
  
    const selectdetItem=data.find((item)=>productId==item.id)
    query.name=selectdetItem? selectdetItem.title:router.pathname="/404";
    console.log(query);
    console.log(pathname.split("/").splice(1,1,selectdetItem?.title));
    console.log(pathname);
  return (
    <div>
         <ProductCard data={selectdetItem}/>
    </div>
  )
}

export { getServerSideProps }; 

export default index