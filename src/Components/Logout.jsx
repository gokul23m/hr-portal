import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = (props) => {
    const navigate=useNavigate();
    const logout=()=>{
         localStorage.removeItem("appValue");
         navigate("/loginForm");
    }
  return (
    <div>
        <button className="btn btn-danger" onClick={logout}>Logout</button>
    </div>
  )
};

export default Logout;
