import Image from "next/image";

import React from "react";
import { useSelector } from "react-redux";

const withList = () => {
  const withListState = useSelector((state) => state.withList.withListItem);
  const mode=useSelector((state)=>state.darkSlice.ThemeValue)

  return (

    <>
{
  withListState.length==0?
  (
    <h1>mehsul yoxdur</h1>
  )
  :(
   

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg py-4">
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase">
                <tr>
                    <th scope="col" className="px-6 py-3 bg-green-400">
                        Product Image
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Product name
                    </th>
                    <th scope="col" className="px-6 py-3  bg-green-400">
                        Price
                    </th>
                </tr>
            </thead>
            <tbody>
              {
                withListState.map((item)=>(
    <tr className="border-b border-gray-200 ">
                    <th scope="row" className="px-6 py-4 font-medium">
                 
                 <Image src={item.image} width={200} height={200}/>
                  
                    </th>
                    <td className="px-6 py-4">
                    {item.title}
    
                    </td>
                  
                    <td className="px-6 py-4">
                   {item.price}$
                    </td>
                </tr>
                ))
              }
                
             
            </tbody>
        </table>
    </div>
    
    
    
      
  )
}


  
    </>

  );
};

export default withList;
