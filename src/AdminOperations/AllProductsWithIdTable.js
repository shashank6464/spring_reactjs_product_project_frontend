

import React, { useState } from 'react'
//Axios is an HTTP client library based on promises. It makes sending asynchronous 
//HTTP requests to REST endpoints easier and helps you perform CRUD operations. 
//This REST endpoint/API could be an external API like the Google API, GitHub API, 
//and so on – or it could be your own backend Node. js server.
import axios from 'axios'

import { useNavigate } from 'react-router-dom';

//if u want to perform anything as soon as the page opens use useEffect hook
import { useEffect } from 'react';
const AllProductsWithIdTable = () => {
    //for storing the get all products result
    const [allProducts, setAllProducts] = useState([]);
    //[] means that this will run only onec when page loads
    useEffect(() => {
        loadAllProducts();

    }, []);

    let navigate = useNavigate();
    const handleClick = (e) => {
        navigate('/adminPage');
    }
    //since processing is done line by line therefore no loading will happen until completely processed,
    // toavoid this we use asyn and await
    const loadAllProducts = (async () => {
        const result = await axios.get("http://localhost:8080/products/getAllProducts");

        setAllProducts(result.data);
        //console.log(setAllProducts);
    })


    return (
        <div>
            <table className="table border shadow">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Pin Codes</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        //map will create a new array from calling a function for every element

                        allProducts.map((product, index) =>
                        (
                            <tr>
                                <th scope="row" >{product.id}</th>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>{product.qty}</td>
                                <td>{product.price}</td>
                                <td>{product.listOfPinCodes.map((number) =>
                                    //<div style={{padding:"20px"}}>{number}</div>
                                    <div style={{float:"left",padding:"4px"}}>{number}</div>
                                )}</td>

                            </tr>
                        ))
                    }

                </tbody>
            </table>
            <button className="btn btn-primary" onClick={handleClick}>Return</button>
        </div>
    )
}


export default AllProductsWithIdTable
