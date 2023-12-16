import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './CSS/Login_signin.css';

export default function Login() {
  
  const navigate = useNavigate();
  document.title = "Login";

  const [login,setLogin]=useState({"email":'',"password":''});
  const handleOnchange = (e)=>{
    setLogin({...login, [e.target.name]:e.target.value});
  }

  const API_URL = "http://localhost:" + process.env.REACT_APP_PORT + "/api/user/login"

  const submitLogin = async(event)=>{
    event.preventDefault();
    console.log("Login data : ",login);
    const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(login)
        });
        const json = await response.json()
        console.log(json);
        if (response.ok){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            navigate('/');
            // alert("Login Successfull....")
        }
        else{
            alert("Invalid credentials");
            console.log(API_URL)
        }
  }
  
  return (
    <div className='container d-flex justify-content-center my-5' >
      <form style={{width:'350px'}} id='login-form'>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" name="email" onChange={handleOnchange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" name='password' onChange={handleOnchange} className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-danger" onClick={submitLogin}>Submit</button>
      </form>
    </div>
  )
}
