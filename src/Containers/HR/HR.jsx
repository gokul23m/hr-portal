import React, { useEffect, useState } from "react";
import Profile from "../../Components/Profile";
import axios from "axios";
import { Modal } from "react-bootstrap";

const HR = (props) => {
  const [jobs, setJobs] = useState([]);
  const [dateModal, showDateModal] = useState(false);

  useEffect(() => {
    const getJobs = async () => {
      const response = await axios.get(
        "http://localhost:8080/hrmodulecontroller/allhrjobdescriptiondetails"
      );
      setJobs(response.data);
      console.log(response.data);
    };
    getJobs();
  }, []);

  const interviewDate = () => {
    showDateModal(true);
  };
  return (
    <div>
      <Profile />
      <div>
        <table className="table">
          <tr>
            <th>JobId</th>
            <th>JobTitle</th>
            <th>Required </th>
            <th>Selected</th>
            <th>ShortListed</th>
            <th>Career Posting</th>
            <th>Status</th>
            <th>Interview Date</th>
            <th>Action</th>
          </tr>
          {jobs.length != 0 ? (
            jobs.map((job) => {
              return (
                <tr>
                  <td>{job.jobId}</td>
                  <td>{job.title}</td>
                  <td>{job.requiredCandidates}</td>
                  <td>{job.selectedCandidates}</td>
                  <td>shorlistedCount</td>
                  <td>
                    <div>
                      <input type="radio" value="Career Posting" />
                      <label htmlFor="">Career Posting</label>
                    </div>
                    <div>
                      <input type="radio" value="Drop" />
                      <label htmlFor="">Drop</label>
                    </div>
                  </td>
                  <td>{job.status}</td>
                  <td>
                    <button className="btn btn-primary" onClick={interviewDate}>
                      Interview Date
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-primary">Candidates</button>
                  </td>
                </tr>
              );
            })
          ) : (
            <p>No data available</p>
          )}
        </table>
      </div>
      <Modal show={dateModal} onHide={() => showDateModal(false)}>
        <Modal.Header closebutton>
          <Modal.Title>Set Interview Date</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="">Select a Date :</label>
          <input type="date" name="interviewDate" id="" />
          <br />
          <button className="btn btn-success">Set Date</button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default HR;
