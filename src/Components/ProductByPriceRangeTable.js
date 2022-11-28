import React, { useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom';

import { useEffect } from 'react';
const ProductByPriceRangeTable = () => {
    const {state} = useLocation();
    const {pmin}=state;
    const {pmax}=state;
    const priceRange={
        min:'',
        max:'',
    };
  //const {min,max}=priceRange;
const headers = {
    "Access-Control-Allow-Origin": "*"
};
    //for storing the get all products result
    const [product,setProduct]=useState([]);
//[] means that this will run only onec when page loads
    useEffect(()=>{
        loadProductsByPriceRange();

    },[]);
//since processing is done line by line therefore no loading will happen until completely processed,
// toavoid this we use asyn and await
    const loadProductsByPriceRange=(async()=>
    {
        const min1=pmin.minimum;
        
       const max1=pmax.maximum;
      // console.log(min1);
       //console.log(max1);
        //setPriceRange({[min]:'60000',[max]:'120000'});
        priceRange.min=min1;
        priceRange.max=max1;
        console.log(priceRange);
        const result=await axios.post("http://localhost:8080/products/getProductsWithinPriceRange",priceRange,{headers})
        setProduct(result.data);
        console.log(result.data);
    
    })
    return (
        <div>
            <table className="table border shadow">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Pin Codes</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((p,index)=>
                        (
                            <tr>
                            <th scope="row" key={index}>{index+1}</th>
                            <td>{p.name}</td>
                            <td>{p.category}</td>
                            <td>{p.qty}</td>
                            <td>{p.price}</td>
                            <td>{p.listOfPinCodes.map((number) =>
                                    //<div style={{padding:"20px"}}>{number}</div>
                                    <div style={{float:"left",padding:"4px"}}>{number}</div>
                                )}</td>
                            
                        </tr>
                        ))
                    }
                   
                   
                </tbody>
            </table>
        </div>
    )
}

export default ProductByPriceRangeTable 
