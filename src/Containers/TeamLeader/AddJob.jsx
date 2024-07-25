import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AddJob = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const empId=location.state;
  const job = location.state.whileAdd
    ? location?.state.whileAdd
    : location?.state.whileUpdate;
  console.log(job);
  // console.log(empId);
  // job => whileAdd ->empliD
  // job => whileUpdate ->ProfileObject

  const [action, setAction] = useState("Add");
  const [jobDescription, setJobDescription] = useState({
    jobId: 0,
    title: "",
    requiredSkill1: "",
    requiredSkill2: "",
    requiredSkill3: "",
    yearOfExperience: 0,
    qualification: "",
    requiredCandidates: 0,
    selectedCandidates: 0,
    status: "",
    salary: 0.0,
    interviewDate: "",
    employeeDetails: {
      employeeId: 2023001,
    },
  });

  useEffect(() => {
    if (job instanceof Object) {
      setAction("Update");
      setJobDescription(job);
    }
  }, [job]);

  const changeHandler = (e) => {
    setJobDescription((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (action == "Add") {
      try {
        const response = await axios.post(
          "http://172.27.1.30:8080/teamleader/addjobdescription",
          jobDescription
        );
        if (response.data === 200) {
          navigate("/teamLeader");
        }
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const response = await axios.post(
          "http://localhost:8080/teamleader/updatejobdescriptionbytl",
          jobDescription
        );
        console.log(response.data);
        // if (response.data==200) {
        navigate("/teamLeader");
        // }
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div>
      <h1>Add Job</h1>
      <form action="" onSubmit={submitHandler}>
        <div>
          <label htmlFor="">Job Title :</label>
          <input
            type="text"
            name="title"
            value={jobDescription.title}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label htmlFor="">Skill 1 :</label>
          <input
            type="text"
            name="requiredSkill1"
            value={jobDescription.requiredSkill1}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label htmlFor="">Skill 2 :</label>
          <input
            type="text"
            name="requiredSkill2"
            value={jobDescription.requiredSkill2}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label htmlFor="">Skill 3 :</label>
          <input
            type="text"
            name="requiredSkill3"
            value={jobDescription.requiredSkill3}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label htmlFor="">Experience :</label>
          <input
            type="number"
            min="0"
            name="yearOfExperience"
            value={jobDescription.yearOfExperience}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label htmlFor="">Qualification :</label>
          <input
            type="radio"
            name="qualification"
            id=""
            value="Bachelor"
            onChange={changeHandler}
            checked={jobDescription.qualification === "Bachelor"}
          />
          <label htmlFor="">Bachelor</label>
          <input
            type="radio"
            name="qualification"
            id=""
            value="Master"
            onChange={changeHandler}
            checked={jobDescription.qualification === "Master"}
          />
          <label htmlFor="">Master</label>
        </div>

        <div>
          <label htmlFor="">Required Candidates :</label>
          <input
            type="number"
            min="0"
            name="requiredCandidates"
            value={jobDescription.requiredCandidates}
            onChange={changeHandler}
          />
        </div>

        <div>
          <button type="submit">{action}</button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
