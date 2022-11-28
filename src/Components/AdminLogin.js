import React from 'react'
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const AdminLogin = () => {
    const emailAdmin='admin@gmail.com';
    const passwordAdmin='Admin@123';
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    
    let navigate=useNavigate();
    const onInputChange1=(e)=>{
        
        setEmail(e.target.value)
    }
    const onInputChange2=(e)=>{
        setPassword(e.target.value)
    }
    const onSubmit=(e)=>{
        //to prevent variables to show in url path
        e.preventDefault();
      if(emailAdmin===email && passwordAdmin===password)
      {
        navigate('/adminPage');
      }
      else
      {
        alert("Incorrect Email or Password, Please Re-enter");
      }
    }
    return (
        
            <div style={{width:"500px",position:"fixed",left:"400px",top:"100px"}}>

                <form onSubmit={e=>onSubmit(e)}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address:</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                        onChange={(e)=>onInputChange1(e)}/>

                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password:</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" 
                        onChange={(e)=>onInputChange2(e)}/>
                    </div>

                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
    )
}

export default AdminLogin
