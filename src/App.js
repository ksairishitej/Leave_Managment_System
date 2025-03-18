      import "./App.css"
      import "./index.css"
      import Home from "./screens/Home"
      import UserLogin from "./screens/UserLogin.js";
      import AdminLogin from "./screens/AdminLogin.js";
      import UserSignup from "./screens/UserSignup.js";
      import AdminDashboard from "./components/AdminDashboard.js";
      import UserDashboard from "./components/UserDashboard.js";
      import AdminSignup from "./screens/AdminSignup.js";
      import {
        BrowserRouter as Router,
        Routes,
        Route,
      } from "react-router-dom";
      import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css"
      import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
      import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
      function App(){
        return(
          <>
            <Router>
              <div>
                <Routes>
                  <Route exact path="/" element={<Home/>}/>
                  <Route exact path="/login" element={<UserLogin/>}/>
                  <Route exact path="/adlogin" element={<AdminLogin/>}/>
                  <Route exact path="/usersignup" element={<UserSignup/>}/>
                  <Route exact path="/userdashboard" element={<UserDashboard/>}/>
                  <Route exact path="/admindashboard" element={<AdminDashboard/>}/>
                  <Route exact path="/adminsignup" element={<AdminSignup/>}/>
                </Routes>
              </div>
            </Router>
          </>
        )
      }
      export default App;