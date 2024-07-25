import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useNavigation } from "react-router-dom";

const ApplyJob = (props) => {
    const navigate=useNavigate();
    const employeeId=useLocation()?.state.employeeId;
    const jobId=useLocation()?.state.jobId;
    console.log(employeeId,jobId);
  const [details, setDetails] = useState({
    applicationId:0,
    dateOfApplication:"",
    interviewDate:"",
    status:"",
    technicalMark:"",
    communicationMark:"",
    totalMark:"",
    jobDescription:{
         jobId:jobId
    },
    candidateDetails :{
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    address: "",
    qualification: "",
    gender: "",
    dateOfBirth: "",
    degree: "",
    branch: "",
    skill1: "",
    skill2: "",
    skill3: "",
    yearOfExperience: "",
    panNumber: "",
    resume: "",
    },
    employeeDetails:{
         employeeId:employeeId
    }
  });

  const changeHandler = (e) => {
    setDetails((prev) => {
      return {
        ...prev,
        candidateDetails:{
            ...prev.candidateDetails,
        [e.target.name]: e.target.value,
        }
      };
    });
  };

  const submitHandler = async(e) => {
                e.preventDefault();
                try{
                    const response=await axios.post('http://localhost:8080/candidatedetails/candidateapplication',details);
                    if(response.status===200){
                         navigate("/career")
                    }
                }
                catch(e){
                      console.log(e);
                }
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form action="" onSubmit={submitHandler}>
        <div className="row">
          <div className="col-6 form-group">
            <label htmlFor="">First Name</label>
            <input
              className="form-control"
              type="text"
              name="firstName"
              value={details.candidateDetails.firstName}
              onChange={changeHandler}
            />
          </div>
          <div className="col-6">
            <label htmlFor="">Last Name</label>
            <input
              className="form-control"
              type="text"
              name="lastName"
              value={details.candidateDetails.lastName}
              onChange={changeHandler}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <label htmlFor="">Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              value={details.candidateDetails.email}
              onChange={changeHandler}
            />
          </div>
          <div className="col-6">
            <label htmlFor="">Contact Number</label>
            <input
              className="form-control"
              type="tel"
              name="contactNumber"
              value={details.candidateDetails.contactNumber}
              onChange={changeHandler}
            />
          </div>
        </div>

        <div className="row">
          <label htmlFor="">Address</label>
          <textarea
          className="form-control"
            type="text"
            name="address"
            value={details.candidateDetails.address}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="">Qualification </label>
          <input
             id=""
            type="radio"
            name="qualification"
            value="Bachelor"
            onChange={changeHandler}
            checked={details.candidateDetails.qualification==="Bachelor"}
          />
          <label htmlFor="">Bachelor</label>
          <input
            id=""
            type="radio"
            name="qualification"
            value="Master"
            onChange={changeHandler}
            checked={details.candidateDetails.qualification==="Master"}
          />
          <label htmlFor="">Masters</label>
        </div>
        <div>
          <label htmlFor="">Gender</label>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={changeHandler}
            checked={details.candidateDetails.gender==="Male"}

          />
          <label htmlFor="">Male</label>
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={changeHandler}
            checked={details.candidateDetails.gender==="Female"}
          />
          <label htmlFor="">Female</label>
          <input
            type="radio"
            name="gender"
            value="Others"
            onChange={changeHandler}
            checked={details.candidateDetails.gender==="Others"}
          />
          <label htmlFor="">Others</label>
        </div>
        <div>
          <label htmlFor="">Date Of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={details.candidateDetails.dateOfBirth}
            onChange={changeHandler}
          />
        </div>
        <div className="row">
          <div className="col-6">
            <label htmlFor="">Degree</label>
            <input
              className="form-control"
              type="text"
              name="degree"
              value={details.candidateDetails.degree}
              onChange={changeHandler}
            />
          </div>
          <div className="col-6">
            <label htmlFor="">Branch</label>
            <input
              className="form-control"
              type="text"
              name="branch"
              value={details.candidateDetails.branch}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <label htmlFor="">Skill1</label>
            <input
              className="form-control"
              type="text"
              name="skill1"
              value={details.candidateDetails.skill1}
              onChange={changeHandler}
            />
          </div>
          <div className="col-4">
            <label htmlFor="">Skill2</label>
            <input
              className="form-control"
              type="text"
              name="skill2"
              value={details.candidateDetails.skill2}
              onChange={changeHandler}
            />
          </div>
          <div className="col-4">
            <label htmlFor="">Skill3</label>
            <input
              className="form-control"
              type="text"
              name="skill3"
              value={details.candidateDetails.skill3}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <label htmlFor="">Year Of Experience</label>
            <input
              className="form-control"
              type="number"
              name="yearOfExperience"
              value={details.candidateDetails.yearOfExperience}
              onChange={changeHandler}
            />
          </div>
          <div className="col-6">
            <label htmlFor="">Pan Number</label>
            <input
              className="form-control"
              type="text"
              name="panNumber"
              value={details.candidateDetails.panNumber}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="row">
          <label htmlFor="">Resume</label>
          <textarea
            className="form-control"
            type="text"
            name="resume"
            value={details.candidateDetails.resume}
            onChange={changeHandler}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Apply
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplyJob;
