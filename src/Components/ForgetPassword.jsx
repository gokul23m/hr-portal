import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgetPassword = (props) => {
    const navigate=useNavigate();
    const[employeeId,setEmployeeId]=useState();
    const[otp,setOtp]=useState();
    const[receivedOtp,setReceivedOtp]=useState();

    const sendOtp=async(e)=>{
            e.preventDefault();
             try{
                console.log(employeeId);
                 const response=await axios.post(`http://localhost:8080/employeedetails/sendotp/${employeeId}`);
                 setReceivedOtp(response.data);
                 console.log(response.data);
             }
             catch(e){
                   console.log(e);
             }
    }

    const validateOtp=()=>{
        console.log(otp);
        console.log(receivedOtp);
                if(otp===receivedOtp){
                    
                }
    }
    
  return (
    <div>
        <h1>Change Your Password</h1>
         <form action="" className="col-4 mx-auto my-5 border" >
             <div className="form-group m-3">
                <label htmlFor="">Employee Id</label>
                <input type="text" className="form-control" name="employeeId" value={employeeId} onChange={(e)=>setEmployeeId(e.target.value)} />
             </div>
             <div className="form-group ">
             <button className="btn btn-primary" onClick={sendOtp}>Send OTP</button>
             </div>
             {
                receivedOtp!=undefined &&
                <div>
                    <div className="form-group m-3">
                        <label htmlFor="">Enter OTP</label>
                <input type="text" className="form-control" name="otp" value={otp} onChange={(e)=>setOtp(e.target.value)} />
             </div>
             <div className="form-group">
             <button className="btn btn-success" onClick={validateOtp}>Validate OTP</button>
             </div>
                </div> 
             }
         </form>
          
    </div>
  )
};

export default ForgetPassword;
