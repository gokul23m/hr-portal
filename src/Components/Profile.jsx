
import { useContext, useState } from "react";
import { GlobalContext } from "../AppContext";
import ChangePassword from "./ChangePassword";
import LoginForm from "./LoginForm";
import Logout from "./Logout";


const Profile = (props) => {
     const employeeDetails=useContext(GlobalContext);
     console.log(employeeDetails);
  return (
    <div>
          <div>
            <table className="table" border="1">
              <tr>
                <td>Employee Id</td>
                <td>Name</td>
                <td>Designation</td>
              </tr>
              <tr>
                <td>{employeeDetails.employeeId}</td>
                <td>{employeeDetails.firstName} {employeeDetails.lastName}</td>
                <td>{employeeDetails.designation}</td>
              </tr>
            </table>
             <div className="d-flex justify-content-around">
             <ChangePassword/> 
             <Logout/>
             </div>
          </div>
         
    </div>
  )
};

export default Profile;
