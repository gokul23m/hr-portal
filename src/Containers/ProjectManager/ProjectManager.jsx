import React, { useContext, useEffect, useState } from "react";
import Profile from "../../Components/Profile";
import axios from "axios";
import { GlobalContext } from "../../AppContext";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProjectManager = (props) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const employeeDetails = useContext(GlobalContext);
  const [jobs, setJobs] = useState([]);
  const [projectDetails, setProjectDetails] = useState({});
  const [oneJob, setOneJob] = useState({});

  const changeHandler = (e) => {
    setOneJob((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/projectmanager/showalljobdescriptionforpm/${employeeDetails.employeeId}`
        );
        setJobs(response.data);
        console.log("response", response.data);
      } catch (e) {
        console.log(e);
      }
    };
    getJobs();
  }, []);

  const Analyse = async (jobId) => {
    const filtered = jobs.filter((job) => job.jobId == jobId);
    const obj = filtered[0];
    setOneJob(obj);
    try {
      console.log("getting project Details");
      const response = await axios.get(
        `http://localhost:8080/projectmanager/projectdetails/${jobId}`
      );
      setProjectDetails(response.data);
      console.log("project Details", response.data);
      setShow(true);
    } catch (e) {
      console.log(e);
    }
  };

  const setSalary = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/projectmanager/setsalary",
        oneJob
      );
      if (response.status === 200) {
        setShow(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const moveToWorkBench = (jobId) => {
    const filtered = jobs.filter((job) => job.jobId == jobId);
    const obj = filtered[0];
    navigate("/workBench", { state: obj });
  };

  const Approve = (jobId) => {
    try {
      const response = axios.post(
        `http://localhost:8080/projectmanager/changeststatus/${jobId}`
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Profile />
      <div>
        <table className="table table-bordered  mx-auto my-5">
          <tr className="lead h-100 ">
            <th>Job Id</th>
            <th>Job Description</th>
            <th>Skills</th>
            <th>Experience</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>

          {jobs.map((job) => {
            return (
              <tr key={job.jobId} className="h-100">
                <td>{job.jobId}</td>
                <td>{job.title}</td>
                <td>
                  {job.requiredSkill1},{job.requiredSkill2},{job.requiredSkill3}
                </td>
                <td>{job.yearOfExperience}</td>
                <td>{job.status == null ? "Not Initiated" : job.status}</td>
                <td className="d-flex justify-content-around">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => Analyse(job.jobId)}
                  >
                    Analyse
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => moveToWorkBench(job.jobId)}
                  >
                    WorkBench
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => Approve(job.jobId)}
                  >
                    Approve
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table>
            <tr>
              <th>Project Id :</th>
              <td>{projectDetails.projectId}</td>
            </tr>
            <tr>
              <th>Description : </th>
              <td>{projectDetails.description}</td>
            </tr>
            <tr>
              <th>Project Budget : </th>
              <td>{projectDetails.projectBudget}</td>
            </tr>
            <tr>
              <th>Used Budget : </th>
              <td>{projectDetails.usedBudget}</td>
            </tr>
            <tr>
              <th>Balance Budget : </th>
              <td>{projectDetails.balanceBudget}</td>
            </tr>
            <tr>
              <th>Set Salary : </th>
              <td>
                <input
                  type="text"
                  name="salary"
                  value={oneJob.salary}
                  onChange={changeHandler}
                />
              </td>
            </tr>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <div className="mx-auto col-3">
          <button className="btn btn-warning" onClick={setSalary} >Set Salary</button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProjectManager;
