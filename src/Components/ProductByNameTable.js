import React, { useState } from 'react'
//Axios is an HTTP client library based on promises. It makes sending asynchronous 
//HTTP requests to REST endpoints easier and helps you perform CRUD operations. 
//This REST endpoint/API could be an external API like the Google API, GitHub API, 
//and so on – or it could be your own backend Node. js server.
import axios from 'axios'
import { useLocation } from 'react-router-dom';

//if u want to perform anything as soon as the page opens use useEffect hook
import { useEffect } from 'react';
const ProductByNameTable = () => {
    const {state} = useLocation();
    const {pname}=state;

const headers = {
    "Access-Control-Allow-Origin": "*"
};
    //for storing the get all products result
    const [product,setProduct]=useState([]);
//[] means that this will run only onec when page loads
    useEffect(()=>{
        loadProductsByName();

    },[]);
//since processing is done line by line therefore no loading will happen until completely processed,
// toavoid this we use asyn and await
    const loadProductsByName=(async()=>
    {
        const name=pname.name;
        console.log(name);
        
        const result=await axios.get("http://localhost:8080/products/getProductByName/"+name,{headers})
        
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

export default ProductByNameTable