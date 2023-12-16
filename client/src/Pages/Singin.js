import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './CSS/Login_signin.css';

export default function Singin() {
  document.title = "Sign-In";
  
  const navigate = useNavigate();

  const [signin,setSignin]=useState({"email":'',"password":''});
  const handleOnchange = (e)=>{
    setSignin({...signin, [e.target.name]:e.target.value});
  };

  const API_URL = "http://localhost:"+process.env.REACT_APP_PORT + "/api/user/signin"

  
  const submitSignin = async(event)=>{
    event.preventDefault();
    console.log("Sign-in data : ",signin);
    const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signin)
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
      alert("Fill form carefully");
    }
  }

  return (
    <div className='container d-flex justify-content-center my-5' >
      <form style={{width:'350px'}} id='signin-form'>
        <div className="mb-3">
          <label htmlFor="exampleInputFirstName" className="form-label">First Name</label>
          <input type="text" name='name' onChange={handleOnchange} className="form-control" id="exampleInputFirstName" aria-describedby="emailHelp" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" name='email' onChange={handleOnchange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputMobile" className="form-label">Mobile No.</label>
          <input type="number" name='phone' onChange={handleOnchange} className="form-control" id="exampleInputMobile" aria-describedby="emailHelp" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" name='password' onChange={handleOnchange} className="form-control" id="exampleInputPassword1" required/>
        </div>
        <button type="submit" onClick={submitSignin} className="btn btn-danger">Submit</button>
      </form>
    </div>
  )
}
