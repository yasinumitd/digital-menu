import React from "react"
import Data from '@/mocks/raise.json'
import Link from "next/link";
import groupProduct from "@/gropProduct/groupProduct";

export default function Home() {
  const { getDataByDepByGroupByProduct } = groupProduct();
  
  return (
    <div>
      {getDataByDepByGroupByProduct.map((department, index) => (
        <div key={department.ID} >
          {index > 0 && <hr className="my-4 border-t" />} 

          <Link href={`${department.DEPARTMENTNAME}`} className="text-xl font-semibold no-underline">
            {department.DEPARTMENTNAME}
        
          </Link>
        </div>
      ))}
    </div>
    
    
   
  )
}

