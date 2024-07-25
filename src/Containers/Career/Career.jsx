import React, { useEffect, useState } from "react";
import meeting from "../../assets/meeting.jpg";
// import "./Career.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Career = (props) => {
  const navigate=useNavigate();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/hrmodulecontroller/allhrjobdescriptiondetails"
        );
        console.log(response.data);
        setJobs(response.data);
      } catch (e) {
        console.log(e);
      }
    };
       getJobs();
  }, []);

  const applyJob=(jobId,empId)=>{
            navigate("/applyJob",{state :{jobId:jobId,employeeId:empId}});
  }
  return (
    <div>
      <div class="image">
        <div class="containers body">
          <div class="text-overlay">
            <h1 class="career">CAREERS</h1>
            <br />
            <h2>Join us, in delivering Innovations.</h2>
            <p>
              {" "}
              At Mindgate we firmly believe in<b> Delivering Innovations</b>.
              Our teams have always delivered tailor-made solutions which
              address the needs of today’s top businesses globally. Our
              professionals work collaboratively to design, integrate, manage &
              evolve all business applications with high quality, greater speed
              and operational efficiency.
            </p>
          </div>
          <br />
          <div>
            {jobs.length==0 && <p class="norecordsfound">No Job Descriptions Found...!!!</p>    }
          </div>

          <div class="table-container ">
            <div class=" justify-content-center">
              <table class="table table-success table-striped">
                <thead class="dark">
                  <tr>
                    <th class="text-center">JobId</th>
                    <th>Title</th>
                    <th>Skills</th>
                    <th class="text-center">Experience</th>
                    <th class="text-center">Qualification</th>
                    <th class="text-center">No Of Position</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((job) => {
                    return (
                      <tr>
                        <td class="text-center">{job.jobId}</td>
                        <td>{job.title}</td>
                        <td>
                          {job.requiredSkill1},{job.requiredSkill2},
                          {job.requiredSkill3}
                        </td>
                        <td class="text-center">{job.yearOfExperience}</td>
                        <td class="text-center">{job.qualification}</td>
                        <td class="text-center">{job.requiredCandidates}</td>
                        <td class="text-center">
                          <button type="button" class="btn btn-warning" onClick={()=>applyJob(job.jobId,job.employeeDetails.employeeId)}>
                            Apply
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <br />

          <div class="content-container">
            <div class="image-container">
              <img src={meeting} className="img-fluid w-75" alt="Descriptive text for the image"/>
            </div>
            <div class="container">
              <h3>Our values</h3>
              <p></p>

              <p>
                <b>Passion:</b> Energy & Enthusiasm that arises from emotional
                engagement with the organization making work joyful while
                inspiring each and every one to deliver their best.
              </p>

              <p>
                {" "}
                <b>Integrity:</b> Following the highest standards of
                professionalism that are fair and honest.
              </p>
              <p>
                <b>Commitment:</b> Focus & continued-drive that delivers value
                to all stakeholders.
              </p>
              <p>
                <b>Impact:</b> To deliver superior value to the society at
                large.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
