import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
const mystyle = {

    padding: "30px",
    width: "300px",
    float: "left",
    marginTop: "30px",
    marginRight: "50px",
    marginLeft: "50px"

};
const Home = () => {
    const [pname,setPname]=useState('');
    const [pcategory,setCatgeory]=useState('');
    const [pmin,setMin]=useState('');
    const [pmax,setMax]=useState('');
    const priceRange={
        min:'',
        max:'',
    };
    //const [product,setProduct]=useState([]);
    const headers = {
        "Access-Control-Allow-Origin": "*"
    };
    let navigate=useNavigate();
    const onInputChange1=(e)=>{
        
        setPname(e.target.value)
    }
    const onInputChange2=(e)=>{
        setCatgeory(e.target.value)
    }
    const onInputChange3a=(e)=>{
        setMin(e.target.value)
    }
    const onInputChange3b=(e)=>{
        setMax(e.target.value)
    }
    const onSubmit1=async(e)=>{
        //to prevent variables to show in url path
        e.preventDefault();
      
        const name=pname;
        console.log(name);
        
        //Regex for allowing alphanumeric,-,_ and space
        const alphaNumeric = "^[A-Za-z0-9? ,_-]+$";
        if ((name).search(alphaNumeric)) {
            
            const msg = "for name: Only alphanumeric,-,_ and space are allowed";

            alert(msg);
            document.getElementById('name').value = '';

        }
    
        else{
        const result=await axios.get("http://localhost:8080/products/getProductByName/"+name,{headers})
        
        console.log(result.data);
        if(result.data.length===0)
        {
            alert("products with name: '"+name+"' not found");
        }
        else{
        
     

        navigate('/getProductByName',{state:{pname:{name}}});
        }
    }
        document.getElementById(
            'name').value = ''
    }
    
    const onSubmit2=async(e)=>{
        //to prevent variables to show in url path
        e.preventDefault();
      
        const category=pcategory;
        console.log(category);
        const alphaNumeric = "^[A-Za-z0-9? ,_-]+$";
        if ((category).search(alphaNumeric)) {
            
            const msg = "for category: Only alphanumeric,-,_ and space are allowed";

            alert(msg);
            document.getElementById('pcategory').value = '';

        }
        else
        {
       // const url = 'http://localhost:8080/products/getProductByCategory/${name}';
        const result=await axios.get("http://localhost:8080/products/getProductByCategory/"+category,{headers})
        //setProduct(result.data);
        console.log(result.data);
        //navigate('/getProductByName', { pname:{name}});
        if(result.data.length===0)
        {
            alert("products with category: '"+category+"' not found");
        }
        else
        {
        navigate('/getProductByCategory',{state:{pcategory:{category}}});
        }
    }
        document.getElementById(
            'pcategory').value = ''
    }
    const onSubmit3=async(e)=>{
        //to prevent variables to show in url path
        e.preventDefault();
      
        const minimum=pmin;
        const maximum=pmax;
        console.log(minimum);
        console.log(maximum);
      
        priceRange.min=minimum;
        priceRange.max=maximum;
        console.log(priceRange);
      
        const decimalPattern = "^[0-9]+(\\.[0-9]{5})?$";
      
        if ((priceRange.min).search(decimalPattern)) {
            
            const msg = "for min price: Only positive decimal values are allowed";

            alert(msg);
            document.getElementById('pmin').value = '';

        }
        if ((priceRange.max).search(decimalPattern)) {
            
            const msg = "for max price: Only positive decimal values are allowed";

            alert(msg);
            document.getElementById('pmax').value = '';

        }
        else{
        const result=await axios.post("http://localhost:8080/products/getProductsWithinPriceRange",priceRange,{headers});
       
        console.log(result.data);
        
        if(result.data.length===0)
        {
            alert("product with price range: "+minimum+"-"+maximum+" not found")
        }
        else
        {navigate('/getProductByPriceRange',{state:{pmin:{minimum},pmax:{maximum}}});
    }
}
    document.getElementById(
        'pmin').value = '';
        document.getElementById(
            'pmax').value = ''
    }
    return (
        <div style={{ mt: "30px" }}>
            <div classNameName="card" style={mystyle}>
                <div classNameName="card-header">
                    Feature#1
                </div>
                <div classNameName="card-body">
                    <h5 classNameName="card-title">Get All Products</h5>
                    <p classNameName="card-text">This feature is used to get all the products.</p>
                    <Link type="button" className="btn btn-primary" style={{marginTop:"30px"}} to="/getAllProducts">Search</Link>
                </div>
            </div>
            <div classNameName="card" style={mystyle}>
                <div classNameName="card-header">
                    Feature#2
                </div>
                <div classNameName="card-body">
                    <h5 classNameName="card-title">Get Product By Name</h5>
                    <p classNameName="card-text">This feature is used to get the product by name.</p>
                    <form onSubmit={e=>onSubmit1(e)}>
                        <div className="mb-3">
                            <label for="name" className="form-label">Enter Product Name</label>
                            <input type="text" className="form-control" id="name" name="name" defaultValue={pname}
                            onChange={(e)=>onInputChange1(e)} required="true"
                            />
                              
                        </div>
      
            
                        <button type="submit" className="btn btn-primary">Search</button>
                    </form>
                   
                </div>
            </div>
            <div classNameName="card" style={mystyle}>
                <div classNameName="card-header">
                    Feature#3
                </div>
                <div classNameName="card-body">
                    <h5 classNameName="card-title">Get Product By Category</h5>
                    <p classNameName="card-text">This feature is used to get the product by category.</p>
                    <form onSubmit={e=>onSubmit2(e)}>
                        <div className="mb-3">
                            <label for="pcategory" className="form-label">Enter Product Category</label>
                            <input type="text" className="form-control" id="pcategory" name="pcategory" defaultValue={pcategory}
                             onChange={(e)=>onInputChange2(e)} required="true"/>
                              
                        </div>
      
            
                        <button type="submit" className="btn btn-primary">Search</button>
                    </form>
                   
                </div>
            </div>
            <div classNameName="card" style={mystyle}>
                <div classNameName="card-header">
                    Feature#4
                </div>
                <div classNameName="card-body">
                    <h5 classNameName="card-title">Get Product By Price Range</h5>
                    <p classNameName="card-text">This feature is used to get the product by price range.</p>
                    <form onSubmit={e=>onSubmit3(e)}>
                        <div className="mb-3">
                            <label for="pmin" className="form-label">Enter Product Price Min Value</label>
                            <input type="text" className="form-control" id="pmin" name="pmin" defaultValue={pmin}
                             onChange={(e)=>onInputChange3a(e)} placeholder="min val" required="true" />
                               <label for="pmax" className="form-label">Enter Product Price Max Value</label>
                             <input type="text" className="form-control" id="pmax" name="pmax" defaultValue={pmax}
                             onChange={(e)=>onInputChange3b(e)} placeholder="max val" required="true"/>
                              
                        </div>
      
            
                        <button type="submit" className="btn btn-primary">Search</button>
                    </form>
                   
                </div>
            </div>
        </div>
    )
}

export default Home
