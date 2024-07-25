import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Profile from "../../Components/Profile";
import { GlobalContext } from "../../AppContext";

const TeamLeader = () => {
  const employeeDetails=useContext(GlobalContext);
  const navigate=useNavigate();
  console.log(employeeDetails);

  const [jobDescription, setJobDescription] = useState([]);
  const [passwordForm, openPasswordForm] = useState(false);
  const [changePassword, setChangePassword] = useState({
    password: "",
    rePassword: "",
  });

  //getting jobs
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:8080/teamleader/tlshowalljobdescription/${employeeDetails.employeeId}`;
        const response = await axios.get(url);
        setJobDescription(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (employeeDetails.employeeId) {
      fetchData();
    }
  }, []);

 
  //delete job
  const deleteJobHandler = async (jobId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/teamleader/deletejobdescription/${jobId}`
      );
      setJobDescription(jobDescription.filter((item) => item.jobId != jobId));
      console.log("deleted", response);
    } catch (e) {
      console.log(e);
    }
  };

  //update job
  const updateJobHandler = (id) => {
         console.log(id);
         const updateArray =jobDescription.filter((jobs)=>jobs.jobId===id);
        const updateObject=updateArray[0];
    navigate("/addJob",{state:{whileUpdate: updateObject}});
  };

  //add job
  const addJobHandler = () => {
      navigate("/addJob",{state:{whileAdd: employeeDetails.employeeId}})
      console.log("jobForm navigated");
  };
//   const addJobHandlerNew = () => {
//     navigate("/addJob",{state:{whileAdd: employeeDetails.employeeId}})
//     console.log("jobForm navigated");
// };
// const updateJobHandlerNew = (id) => {
//   console.log(id);
//   const updateArray =jobDescription.filter((jobs)=>jobs.jobId===id);
//  const updateObject=updateArray[0];
// navigate("/addJob",{state:{whileUpdate: updateObject}})
// };

  const goToInterview=()=>{
       navigate("/interview",{state:employeeDetails.employeeId});
  }

  return (
    <div>
      {/* TeamLeader details */}
      <Profile/>

      <div className="d-flex justify-content-around m-5">
      <button className="btn btn-primary" onClick={addJobHandler}>Add Job</button>
      <button className="btn btn-primary" onClick={goToInterview}>Take Interview</button>
      </div>

      {/* jobDescription List */}
      <table className="table  table-striped my-5  width-100"  >
        <tr className="my-3">
          <th>Job Id</th>
          <th>Job Description</th>
          <th>Skills</th>
          <th>Experience</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
        {jobDescription.length != 0 ? (
          jobDescription.map((item) => {
            return (
              <tr key={item.jobId} className="my-3">
                <td>{item.jobId}</td>
                <td>{item.title}</td>
                <td>
                  {item.requiredSkill1},{item.requiredSkill2},
                  {item.requiredSkill3}
                </td>
                <td>{item.yearOfExperience}</td>
                <td>{item.status==null ?"Not Initiated": item.status}</td>
                <td>
                  <span>
                    <button className="btn btn-danger" onClick={() => deleteJobHandler(item.jobId)}>
                      Delete
                    </button>
                  </span>
                  <span>
                    <button className="btn btn-warning" onClick={() => updateJobHandler(item.jobId)}>
                      Update
                    </button>
                  </span>
                </td>
              </tr>
            );
          })
        ) : (
          <p>No Jobs Available</p>
        )}
      </table>
    </div>
  );
};

export default TeamLeader;
