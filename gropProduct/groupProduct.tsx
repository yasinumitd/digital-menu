


import Departments from '@/app/[departmentName]/page';
import Data from '@/mocks/raise.json'
interface GroupByProduct {
    ID: number;
    NAME: String;
    products: any[]
}
interface Department {
    ID: number;
    DEPARTMENTNAME: String;
    groups: any[]
}
function groupProduct(){
    const deps = Data[0]
    let groups = Data[1]
    let products = Data[2]

    let getDataByGroupByProduct: GroupByProduct[] =[];
    
    groups.forEach((group)=>{
       
        getDataByGroupByProduct.push({
            ID: group.ID,
            NAME: group.NAME,
            products: []
        })

    })
    
    products.forEach((product)=>{
        let findGroupIndex = getDataByGroupByProduct.findIndex((group) => group.ID === product.PRODUCTGROUPID);
        getDataByGroupByProduct[findGroupIndex].products.push(product);

    })


    let getDataByDepByGroupByProduct : Department[] = [];
    deps.forEach((dep)=>{
       
        getDataByDepByGroupByProduct.push({
            ID: dep.ID,
            DEPARTMENTNAME: dep.DEPARTMENTNAME,
            groups: getDataByGroupByProduct
        })

    })
   
    return {getDataByDepByGroupByProduct}
}

export default groupProduct;

