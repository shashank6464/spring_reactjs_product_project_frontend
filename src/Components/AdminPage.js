import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const mystyle = {

    padding: "30px",
    width: "300px",
    float: "left",
    marginTop: "30px",
    marginRight: "50px",
    marginLeft: "50px"

};

const AdminPage = () => {
    const [pid, setPid] = useState('');
    const [pid1, setPid1] = useState('');
    const listOfPinCodes = [];
    const [product, setProduct] = useState(
        {
            name: "",
            category: "",
            qty: "",
            price: "",
        }
    );
    const [product1, setProduct1] = useState(
        {
            name1: "",
            category1: "",
            qty1: "",
            price1: "",
        }
    );
    const { name, category, qty, price } = product;
    const { name1, category1, qty1, price1 } = product1;
    
    const options = [
        {
            label: "12345",
            value: "12345",
        },
        {
            label: "12346",
            value: "12346",
        },
        {
            label: "12347",
            value: "12347",
        },
        {
            label: "12348",
            value: "12348",
        },
        {
            label: "12349",
            value: "12349",
        },
        {
            label: "12340",
            value: "12340",
        }
    ];
    const headers = {
        "Access-Control-Allow-Origin": "*"
    };
    const handleChange = (e) => {
        listOfPinCodes.push(e.target.value);

        console.log(listOfPinCodes);
    }
    const onInputChange1 = (e) => {

        setPid(e.target.value)
    }

    const onInputChange2 = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };
    const onInputChange3= (e) => {

        setPid1(e.target.value)
    }
    const onInputChange4 = (e) => {
        setProduct1({ ...product1, [e.target.name]: e.target.value });
    };
    const onSubmit1 = async (e) => {
        //to prevent variables to show in url path
        e.preventDefault();

        const id = pid;
        console.log(id);

        try{
        const result = await axios.delete("http://localhost:8080/products/deleteProduct/" + id, { headers })
        //setProduct(result.data);
        alert("product with id:" + id + " deleted");
        }
        catch(err)
        {
            alert("product with id: "+id+" not found");
        }
       // let runStatus = result.status;
        //if (runStatus === 204) {
          //  alert("product id not found");
        //}
        //if (runStatus === 200) {
          //  alert("product with id:" + id + " deleted");
        //}
        document.getElementById(
            'id').value = ''

    }

    const onSubmit2 = async (e) => {
        //to prevent variables to show in url path
        e.preventDefault();
        console.log(product);
        const numberPattern = '^[1-9]\\d*$';
        const decimalPattern = "^[0-9]+(\\.[0-9]{5})?$";
        //Regex for allowing alphanumeric,-,_ and space
        const alphaNumeric = "^[A-Za-z0-9? ,_-]+$";
        if ((product.name).search(alphaNumeric)) {
            console.log("invalid");
            const msg = "for name: Only alphanumeric,-,_ and space are allowed";

            alert(msg);
            document.getElementById('name').value = '';

        }
        if ((product.category).search(alphaNumeric)) {
            console.log("invalid");
            const msg = "for category: Only alphanumeric,-,_ and space are allowed";

            alert(msg);
            document.getElementById('category').value = '';

        }
        if ((product.qty).search(numberPattern)) {
            console.log("invalid");
            const msg = "for quantity: Only positive numbers are allowed";

            alert(msg);
            document.getElementById('qty').value = '';

        }
        if ((product.price).search(decimalPattern)) {
            console.log("invalid");
            const msg = "for price: Only positive decimal values are allowed";

            alert(msg);
            document.getElementById('price').value = '';

        }
        else {
            let productArray = {
                name: "",
                category: "",
                qty: "",
                price: "",
                listOfPinCodes: [],
            }
            productArray.name = product.name;
            productArray.category = product.category;
            productArray.qty = product.qty;
            productArray.price = product.price;
            productArray.listOfPinCodes = listOfPinCodes;
            console.log(productArray.listOfPinCodes);
            try{
            const result = await axios.post("http://localhost:8080/products/saveProduct", productArray);
            console.log(result.status);
            alert("product added");
            }
            catch(err)
            {
                alert("due to some error product was not added")
            }
            //document.getElementById('id').value = '';
            document.getElementById('name').value = '';
            document.getElementById('category').value = '';
            document.getElementById('qty').value = '';
            document.getElementById('price').value = '';
            // document.getElementById('listOfPinCodes').value = ''
           

            const len=listOfPinCodes.length;
            listOfPinCodes.splice(0,len);
            console.log(listOfPinCodes);
        }
        //navigate('/'));
    };
    const onSubmit3 = async (e) => {
        e.preventDefault();
        console.log(product1);
        const numberPattern = '^[1-9]\\d*$';
        const decimalPattern = "^[0-9]+(\\.[0-9]{5})?$";
        //Regex for allowing alphanumeric,-,_ and space
        const alphaNumeric = "^[A-Za-z0-9? ,_-]+$";
        if ((product1.name1).search(alphaNumeric)) {
            console.log("invalid");
            const msg = "for name: Only alphanumeric,-,_ and space are allowed";

            alert(msg);
            document.getElementById('nameU').value = '';

        }
        if ((product1.category1).search(alphaNumeric)) {
            console.log("invalid");
            const msg = "for category: Only alphanumeric,-,_ and space are allowed";

            alert(msg);
            document.getElementById('categoryU').value = '';

        }
        if ((product1.qty1).search(numberPattern)) {
            console.log("invalid");
            const msg = "for quantity: Only positive numbers are allowed";

            alert(msg);
            document.getElementById('qtyU').value = '';

        }
        if ((product1.price1).search(decimalPattern)) {
            console.log("invalid");
            const msg = "for price: Only positive decimal values are allowed";

            alert(msg);
            document.getElementById('priceU').value = '';

        }
        else {
            let productArray = {
                name: "",
                category: "",
                qty: "",
                price: "",
                listOfPinCodes: [],
            }
            productArray.name = product1.name1;
            productArray.category = product1.category1;
            productArray.qty = product1.qty1;
            productArray.price = product1.price1;
            productArray.listOfPinCodes = listOfPinCodes;
            console.log(productArray.listOfPinCodes);
            const id=pid1;
            //let errorMessage="";
            try{
            const result = await axios.put("http://localhost:8080/products/updateProduct/"+id, productArray);
            alert("product updated");
            }
            catch(err) {
                alert("product id does not exist")
        
           } 
           // console.log(result.status);
            document.getElementById('idU').value = '';
            document.getElementById('nameU').value = '';
            document.getElementById('categoryU').value = '';
            document.getElementById('qtyU').value = '';
            document.getElementById('priceU').value = '';
            document.getElementById('name').value = '';
            document.getElementById('category').value = '';
            document.getElementById('qty').value = '';
            document.getElementById('price').value = '';
            // document.getElementById('listOfPinCodes').value = ''
            //if(result.status===200)
            //alert("product updated");
            //else
            //alert("product with id does not exist")
            const len=listOfPinCodes.length;
            listOfPinCodes.splice(0,len);
            console.log(listOfPinCodes);
        }
        //navigate('/'));
    };

    return (
        <div>
            <div classNameName="card" style={mystyle} >
                <div classNameName="card-header">
                    Feature#1
                </div>
                <div classNameName="card-body">
                    <h5 classNameName="card-title">Get All Products</h5>
                    <p classNameName="card-text">This feature is used to get all the products.</p>
                    <Link type="button" className="btn btn-primary" style={{ marginTop: "30px" }} to="/getAllProductsWithId">Search</Link>
                </div>
            </div>
            <div classNameName="card" style={mystyle}>
                <div classNameName="card-header">
                    Feature#2
                </div>
                <div classNameName="card-body">
                    <h5 classNameName="card-title">Delete Product By Id</h5>
                    <p classNameName="card-text">This feature is used to delete the product by id.</p>
                    <form onSubmit={e => onSubmit1(e)}>
                        <div className="mb-3">
                            <label for="id" className="form-label">Enter Product Id</label>
                            <input type="text" className="form-control" id="id" name="id" defaultValue={pid}
                                onChange={(e) => onInputChange1(e)} required="true"
                            />

                        </div>


                        <button type="submit" className="btn btn-danger">Delete</button>
                    </form>

                </div>
            </div>
            <div classNameName="card" style={mystyle}>
                <div classNameName="card-header">
                    Feature#3
                </div>
                <div classNameName="card-body">
                    <h5 classNameName="card-title">Add Product </h5>
                    <p classNameName="card-text">This feature is used to add the product.</p>
                    <form onSubmit={e => onSubmit2(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">Enter Product Name</label>
                            <input type="text" className="form-control" name="name" id="name" value={name} required="true"
                                onChange={(e) => onInputChange2(e)}
                            />
                            <label htmlFor="Category" className="form-label">Enter Product Category</label>
                            <input type="text" className="form-control" name="category" id="category" value={category} required="true"
                                onChange={(e) => onInputChange2(e)}
                            />
                            <label htmlFor="Qty" className="form-label">Enter Product Quantity</label>
                            <input type="text" className="form-control" name="qty" id="qty" value={qty} required="true"
                                onChange={(e) => onInputChange2(e)}
                            />



                            <label htmlFor="Price" className="form-label">Enter Product Price</label>
                            <input type="text" className="form-control" name="price" id="price" value={price} required="true"
                                onChange={(e) => onInputChange2(e)} placeholder="enter integral/decimal value"
                            />
                            {/*

                            <label htmlF="ListOfPinCodes" className="form-label">Enter Pincode to where delivery can be made</label>
                            <input type="text" className="form-control" name="listOfPinCodes" id="listOfPinCodes" value={listOfPinCodes}
                                onChange={(e) => onInputChange2(e)} placeholder="format (123,213,232)" required="true"
                            />*/
                            }
                            <br />
                            <label htmlFor="PinCodes" className="form-label">Enter Product Price</label>
                            <br />
                            <select name="pinCodes" id="pinCodes" onChange={(e) => { handleChange(e) }} style={{ width: "200px" }}>
                                {options.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>


                        <button type="submit" className="btn btn-primary">Add Product</button>
                    </form>

                </div>
            </div>
            <div classNameName="card" style={mystyle}>
                <div classNameName="card-header">
                    Feature#4
                </div>

            <div classNameName="card-body">
                <h5 classNameName="card-title">Update Product </h5>
                <p classNameName="card-text">This feature is used to add the product.</p>
                <form onSubmit={e => onSubmit3(e)}>
                    <div className="mb-3">
                    <label htmlFor="Id1" className="form-label">Enter Product Id</label>
                        <input type="text" className="form-control" name="id1" id="idU" value={pid1} required="true"
                            onChange={(e) => onInputChange3(e)}
                        />
                        <label htmlFor="Name1" className="form-label">Enter Product Name</label>
                        <input type="text" className="form-control" name="name1" id="nameU" value={name1} required="true"
                            onChange={(e) => onInputChange4(e)}
                        />
                        <label htmlFor="Category1" className="form-label">Enter Product Category</label>
                        <input type="text" className="form-control" name="category1" id="categoryU" value={category1} required="true"
                            onChange={(e) => onInputChange4(e)}
                        />
                        <label htmlFor="Qty1" className="form-label">Enter Product Quantity</label>
                        <input type="text" className="form-control" name="qty1" id="qtyU" value={qty1} required="true"
                            onChange={(e) => onInputChange4(e)}
                        />



                        <label htmlFor="Price1" className="form-label">Enter Product Price</label>
                        <input type="text" className="form-control" name="price1" id="priceU" value={price1} required="true"
                            onChange={(e) => onInputChange4(e)} placeholder="enter integral/decimal value"
                        />
           
                        <br />
                        <label htmlFor="PinCodes" className="form-label">Enter Product Price</label>
                        <br />
                        <select name="pinCodes" id="pinCodes" onChange={(e) => { handleChange(e) }} style={{ width: "200px" }}>
                            {options.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>


                    <button type="submit" className="btn btn-primary">Update Product</button>
                </form>

            </div>
            </div>
        </div>
        
                            
                            
    )
}

export default AdminPage
