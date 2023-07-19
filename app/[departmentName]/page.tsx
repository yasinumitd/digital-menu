import React from "react";
import groupProduct from "@/gropProduct/groupProduct";

function Departments({ params }) {
  const { getDataByDepByGroupByProduct } = groupProduct();
  const paramDepartmentName = params?.departmentName;

  const filteredData = React.useMemo(() => {
    if (paramDepartmentName) {
      return getDataByDepByGroupByProduct.find(
        (item) => item.DEPARTMENTNAME === paramDepartmentName
      );
    }
    return getDataByDepByGroupByProduct;
  }, [getDataByDepByGroupByProduct, paramDepartmentName]);

  if (!filteredData) {
    return <div>No data available.</div>;
  }

  return (
    <div>
        <h3 className="text-xl font-semibold no-underline">{filteredData.DEPARTMENTNAME}</h3>
        {console.log(filteredData.groups)}
      {filteredData.groups.map((item) => (
        <div key={item.ID}>
          <p>{item.NAME}</p>
          
        </div>
      ))}
    </div>
  );
}

export default Departments;