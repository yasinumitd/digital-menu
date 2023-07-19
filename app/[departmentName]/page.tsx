import React from "react";
import groupProduct from "@/gropProduct/groupProduct";
function Departments({}){
    const {getDataByDepByGroupByProduct} =groupProduct()
    return(
        <div>
            <p>sfjhjkdhfj</p>
            {console.log(getDataByDepByGroupByProduct)}
        </div>
    )
}
export default Departments