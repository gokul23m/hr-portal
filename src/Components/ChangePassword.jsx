import { useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { GlobalContext} from "../AppContext";
import { useContext } from "react";
const ChangePassword = (props) => {
    const employeeDetails=useContext(GlobalContext);
    const [passwordForm, openPasswordForm] = useState(false);
    const [changePassword, setChangePassword] = useState({
      password: "",
      rePassword: "",
    });
    const[show,setShow]=useState(false);

    const changeHandler = (e) => {
        setChangePassword((prev) => {
          return {
            ...prev,
            [e.target.name]: e.target.value,
          };
        });
      };
    
      //password change
      const passwordChange = async (e) => {
        e.preventDefault();
        if (changePassword.password == changePassword.rePassword) {
          try {
            const response = await axios.post(
              "http://localhost:8080/employeedetails/changepassword",
              {
                loginId: employeeDetails.loginDetails.loginId,
                password: changePassword.password,
              }
            );
            setShow(false);
            console.log("ok");
          } catch (e) {
            console.log(e);
          }
        }
      };
  return (
    <div>
         <button
        className="btn btn-success"
          onClick={() => setShow(true)}
        >
          Change Password
        </button>
    

      <Modal show={show} onHide={()=>setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Password Change</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form action="" onSubmit={passwordChange}>
          <div>
          <label htmlFor="">Enter Password :</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={changePassword.password}
            onChange={changeHandler}
          />
          </div>
          <div>
          <label htmlFor="">Re Enter Password :</label>
          <input
            type="password"
            name="rePassword"
            className="form-control"
            value={changePassword.rePassword}
            onChange={changeHandler}
          />
          </div>
          <div className="mx-auto col-4 my-2">
          <button type="submit" className="btn btn-warning ">Change Password</button>
          </div>
        </form>
        </Modal.Body>
        
      </Modal>
    </div>
  )
};

export default ChangePassword;
