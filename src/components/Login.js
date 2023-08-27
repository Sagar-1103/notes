import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

export default function Login(props) {
  const host = process.env.REACT_APP_LINK;
    const [logCred,setLogCred] =  useState({email:"",password:""});
    let navigate  = useNavigate();

    const handleSubmit = async(e)=>{
    e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`,{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(logCred)
         });
         // eslint-disable-next-line
         const json = await response.json();
         console.log(json);
         if (json.success) {
            // Save the auth token and redirect
            // console.log(json.authToken);
            localStorage.setItem("token",json.authToken);
            props.showAlert("Logged in successfully","success");
            navigate("/");
          } else {
            props.showAlert("Invalid Credentials","danger");
            // alert(json.error);
         }
    }
    const onChange = (e) =>{
        setLogCred({...logCred,[e.target.name]:e.target.value});
    }


  return (
    <div className='my-3'>
      <h2>Login to use I-Notebook</h2>
      <form onSubmit={handleSubmit} >
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name="password" onChange={onChange}/>
  </div>
  <button type="submit" className="btn btn-primary">Login</button>
</form>
    </div>
  )
}
