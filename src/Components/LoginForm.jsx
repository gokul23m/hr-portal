import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = (props) => {
  const navigate = useNavigate();

  const [loginDetails, setLoginDetails] = useState({
    loginId: "",
    password: "",
  });

  // const [employeeDetails, setEmployeeDetails] = useState({
  //   employeeId: 0,
  //   firstName: "",
  //   lastName: "",
  //   designation: "",
  //   onBench: "",
  //   skill1: "",
  //   skill2: "",
  //   skill3: "",
  //   reportingManager: "",
  //   emailId: "",
  //   contactNumber: 0,
  //   totalExperience: 0,
  //   loginDetails: {
  //     loginId: 0,
  //     password: "",
  //   },
  //   projectDetails: {
  //     projectId: 0,
  //     description: "",
  //     projectBudget: 0,
  //     employeeDetails: {},
  //   },
  // });

  const changeHandler = (e) => {
    setLoginDetails((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/employeedetails/getemployeedetails",
        loginDetails
      );
      localStorage.setItem("appValue", JSON.stringify(response.data));
      // setEmployeeDetails(response.data);
      console.log(response.data);
      if (response.data.designation === "Team Leader") {
        navigate("/teamLeader");
      } else if (response.data.designation === "Project Manager") {
        navigate("/projectManager");
      } else if (response.data.designation === "HR") {
        navigate("/hr");
      }
    } catch (e) {
      console.log(e);
    }
  };

  // useEffect(() => {
  //   if (employeeDetails?.firstName?.length > 0) {
  //     navigate("/profile", { state: employeeDetails });
  //   }
  // }, [employeeDetails]);

  // console.log(employeeDetails);

  return (
    <div className="container-sm" >
      <h2>Login Form</h2>
        <div className="row  d-flex justify-content-center">
         <div className="col-12 col-md-12 m-5">
         <form action="" className="col-4 mx-auto border p-4" onSubmit={submitHandler}>
        <div className="form-group m-3">
          <label htmlFor="">Login Id </label>
          <input
            type="text"
            className="form-control"
            name="loginId"
            value={loginDetails.loginId}
            onChange={changeHandler}
          />
        </div>
        <div className="form-group m-3">
          <label htmlFor="">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={loginDetails.password}
            onChange={changeHandler}
          />
        </div>
        <div className="m-3">
           <button className="btn btn-primary">Sign In</button>
        </div>
        <div className="m-3 justify-content-end">
           <Link to="/forgetPassword">forget password?</Link>
        </div>

      </form>
         </div>
        </div>
    </div>
    // <div >
    //   <h1>Login Form</h1>
    //   <form className="w-40 bg-secondary" onSubmit={SubmitHandler} >
    //     {/* <!-- Email input --> */}
    //     <div  class="form-group col-3">
    //       <label class="form-label" for="form2Example1">
    //         Login Id
    //       </label>
    //       <input
    //         type="text"
    //         id="form2Example1"
    //         class="form-control"
    //         name="loginId"
    //         value={loginDetails.loginId}
    //         onChange={changeHandler}
    //       />
    //     </div>

    //     {/* <!-- Password input --> */}
    //     <div class="form-group col-3">
    //       <label class="form-label" for="form2Example2">
    //         Password
    //       </label>
    //       <input
    //         type="password"
    //         id="form2Example2"
    //         class="form-control"
    //         name="password"
    //         value={loginDetails.password}
    //         onChange={changeHandler}
    //       />
    //     </div>

    //     {/* <!-- 2 column grid layout for inline styling --> */}
    //     <div class="row mb-4">
    //       {/* <div class="col d-flex justify-content-center">

    //   <div class="form-check">
    //     <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
    //     <label class="form-check-label" for="form2Example31"> Remember me </label>
    //   </div>
    // </div> */}

    //       <div class="col-2">
    //         {/* <!-- Simple link --> */}
    //         <Link to="/forgetPassword">Forgot password?</Link>
    //       </div>
    //     </div>

    //     {/* <!-- Submit button --> */}
    //     <button
    //       type="submit"
    //       class="btn btn-primary "
    //     >
    //       Sign in
    //     </button>
    //   </form>
    // </div>
  );
};

export default LoginForm;
