import React from "react"
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-brown">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <nav class="navbar navbar-expand-lg navbar-light bg-brown">
          <div class="container-fluid">
            <img src="https://hrms.mindgate.in/Humanware//login/clientLoginLogo.png" alt="Logo" width="100" height="244" class="d-inline-block align-text-top"/>
           
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link " href="#"><b>Home</b>&nbsp; </a>
                </li>
                <li class="nav-item">
                  <Link class="nav-link"  to="/loginForm"><b>Login</b> &nbsp; </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/career"><b>Career</b> &nbsp;</Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" routerLink="about"><b>About us</b></a>
                </li>
                {/* <li class="nav-item">
                  <a class="nav-link" href="#" routerLink="about" ><b>logout</b></a>
                </li> */}
               
                
              </ul>
            </div>
          </div>
        </nav>     
       
      </a>
      
    </div>
  </nav> 
    </div>
  )
};

export default Navbar;
