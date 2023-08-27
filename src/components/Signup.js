import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Signup(props) {
  const host = process.env.REACT_APP_LINK;
  const [signUpCred,setSignUpCred] =  useState({name:"",email:"",password:"",cpassword:""});
    let navigate  = useNavigate();
    let {name,email,password} = signUpCred;

    const handleSubmit = async(e)=>{
      e.preventDefault();
      // console.log(signUpCred.password,signUpCred.cpassword);
      if (signUpCred.password !== signUpCred.cpassword) {
        props.showAlert("Passwords do not match","danger");
      }
      else {
          const response = await fetch(`${host}/api/auth/createUser`,{
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify({name,email,password})
          });
          // eslint-disable-next-line
          const json = await response.json();
          // console.log(json);
          if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem("token",json.authToken);
            navigate("/");
            props.showAlert("Account created successfully","success");
          } else {
            props.showAlert("Invalid Credentials","danger");
          }
        }
    }
    const onChange = (e) =>{
        setSignUpCred({...signUpCred,[e.target.name]:e.target.value});
    }

  return (
    <div className='my-3'>
      <h2>Create an account to use I-Notebook</h2>
      <form onSubmit={handleSubmit} >
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name="name" required onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" required onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name="password" onChange={onChange} required minLength={5} />
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} required minLength={5} />
  </div>
  <button type="submit" className="btn btn-primary">Signup</button>
</form>
    </div>
  )
}
