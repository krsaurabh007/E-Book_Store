import React, { useState } from "react";
import "../auth/auth.css";
import {
  EnvelopeOpenIcon,
  LockClosedIcon,
} from "@heroicons/react/16/solid";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Login() {
  const[password,setPassword]=useState('');
const[email,setEMail]=useState('');
  const navigate=useNavigate();

  function handleClick(e){
    e.preventDefault();
    axios.post('http://localhost:3000/api/users/login',{email,password})
    .then(response => {
      if (response.status === 200) {
        const { user, token } = response.data;
        localStorage.setItem('username', user.name);
        localStorage.setItem('token', token);
        navigate('/dashboard');
      } else {
        alert('Invalid Credentials');
      }
    })
    .catch(err=>console.log(err))
  }
  return (
    <div className="container">
      <div className="form-box">
        <h1>Login</h1>
        <form>
          <div className="input-group1">
            <div className="input-field">
              <EnvelopeOpenIcon className="icon" style={{ height: "24px", width: "24px" }} />
              <input type="email" name="email" placeholder="Enter your email"   onChange={(e) => setEMail(e.target.value)}/>
            </div>
            <div className="input-field">
              <LockClosedIcon className="icon" style={{ height: "24px", width: "24px" }} />
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p>Forget Password <a href="#">Click Here!</a></p>
            <p className="p1">New<a href="/signUp">SignUp Here!</a></p>

          </div>
          <div className="btn-field">
            <button type="button" onClick={handleClick}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
