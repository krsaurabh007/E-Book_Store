import React, { useState } from "react";
import "../auth/auth.css";
import "@heroicons/react";
import axios from "axios";
import {
  UserCircleIcon,
  EnvelopeOpenIcon,
  LockClosedIcon,
} from "@heroicons/react/16/solid";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const navigate=useNavigate();
  console.log(name,email,password)

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3000/api/users/registration',{name,email,password})
    .then(result=>{console.log(result)
      navigate('/');
    })
    .catch(err=>console.log(err))
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-field">
              <UserCircleIcon className="icon" style={{ height: "24px", width: "24px"}} />
              <input
                type="text"
                name="userName"
                placeholder="Enter your name"
                onChange={(e)=>{setName(e.target.value)}}
              />
            </div>
            <div className="input-field">
              <EnvelopeOpenIcon className="icon" style={{ height: "24px", width: "24px" }} />
              <input 
              type="email" 
              name="email" 
              placeholder="Enter your email" 
              onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className="input-field">
              <LockClosedIcon className="icon" style={{ height: "24px", width: "24px" }} />
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={(e)=>{setPassword(e.target.value)}}
              />
            </div>
            <p>Forget Password <a href="#">Click Here!</a></p>
          </div>
          <div className="btn-field">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
