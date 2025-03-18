import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
export default function () {
    const navigate = useNavigate()
    let handlelogout=()=>{
        localStorage.removeItem("authtoken")
        console.log('done');
      }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <Link className="navbar-brand fs-1 fsi-italic" to="/">LEAVE MANAGMENT</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mt-2">
                        <li className="nav-item active">
                            <Link className="nav-link fs-5" to="/"><span className="sr-only"></span></Link>
                        </li>
                    </ul>
                    <div className='d-flex'>
                    <Link className="btn bg-white mx-1 text-success"  onClick={handlelogout} to='/' >Logout</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}