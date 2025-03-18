import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function Signup() {
    const navigate=useNavigate()
    const [credentials, setcredentials] = useState({name:"",email:"",password:"",geolocation:""})
    const handleSubmit=async (e)=>{ 
        e.preventDefault();
        const response=await fetch("http://localhost:7000/api/createuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
        });
        const json=await response.json()
        console.log(json);
        if(!json.success){
            alert("Enter valid")
        }else{
            navigate('/userdashboard')
        }
    }
    const onChange=(event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }
  return (
    <>
    <div className='container bg-black'>
    <h1>USER SIGNUP</h1>
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" name='email' value={credentials.email} aria-describedby="emailHelp" onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputaddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="exampleInputaddress" name='geolocation' value={credentials.geolocation} onChange={onChange}/>
  </div>
  <button type="submit" className="m-3 btn btn-success">Submit</button>
  <Link to="/login" className="m-3 btn btn-danger">Already a useer</Link>
</form>
</div>
    </>
  )
}
