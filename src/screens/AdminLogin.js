import { Link } from "react-router-dom";
import Reaact,{ useState } from "react";
import { useNavigate } from "react-router-dom";
export default function () {
    const navigate=useNavigate();
    const [credentials, setCredentials] = useState({
        email:"",
        password:""
    });
    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:7000/api/loginuser", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
          });
          const json = await response.json()
          console.log(json);
          if (!json.success) {
            alert("Enter valid")
          }
          if(json.success){
            localStorage.setItem("authtoken",json.authtoken)
            console.log(localStorage.getItem("authtoken"))
            navigate("/")
      
          }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-dark text-white">
            <div className="container p-4 bg-black rounded shadow-lg" style={{ maxWidth: "400px" }}>
                <h1 className="text-center mb-4">ADMIN LOGIN</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={credentials.email} onChange={onChange} />
                        <div id="emailHelp" className="form-text text-white-50">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={credentials.password} onChange={onChange} />
                    </div>
                    <button type="submit" className="btn btn-success w-100">Submit</button>
                </form>
            </div>
        </div>
    );
}
