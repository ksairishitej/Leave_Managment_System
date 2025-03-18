import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
export default function () {
    const navigate = useNavigate()
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
                        <div>
                        <Link className="btn bg-white mx-1 text-success" to="/adminsignup">Admin SignUp </Link>
                            <Link className="btn bg-white mx-1 text-success" to="/usersignup">User SignUp </Link>
                            <Link className="btn bg-white mx-1 text-success" to="/adlogin">Admin Login</Link>
                            <Link className="btn bg-white mx-1 text-success" to="/login">User Login</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container mt-5 bg-black">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 className="text-success fw-bold     ">Welcome to Employee Leave Management System</h1>
                        <p className="mt-3 fs-5">
                            The Employee Leave Management System is a web-based platform designed to simplify the leave application and approval process.
                            Employees can apply for leave easily, and administrators can efficiently manage and track leave requests.
                        </p>
                    </div>
                </div>
                <div className="row mt-5">
          <div className="col-md-6">
            <h3 className="text-success">For Employees:</h3>
            <ul className="list-group">
              <li className="list-group-item">Apply for leave by selecting start and end dates.</li>
              <li className="list-group-item">Provide a reason for leave.</li>
              <li className="list-group-item">View the status of submitted leave requests.</li>
              <li className="list-group-item">Edit or cancel pending leave requests.</li>
            </ul>
          </div>
          <div className="col-md-6 bg-black">
            <h3 className="text-success">For Admin:</h3>
            <ul className="list-group">
              <li className="list-group-item">View all leave applications.</li>
              <li className="list-group-item">Approve or reject leave requests.</li>
              <li className="list-group-item">Filter leave requests by employee or status.</li>
            </ul>
          </div>
        </div>
            </div>
        </>
    )
}