import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";

const Interview = (props) => {
     const navigate=useNavigate();
     const[show,setShow]=useState(false);
    const[interviews,setInterviews]=useState([]);
    const[oneInterview,setOneInterview]=useState({});
    const employeeId=2023001;

     useEffect(()=>{
        const getInterview=async()=>{
             console.log("getting interviews");
              try{
                    const response=await axios.get(`http://localhost:8080/interview/showjobapplications/${employeeId}`)
                    setInterviews(response.data);
                    console.log(response.data);
              }
              catch(e){
                  console.log(e);
              }
        }
        if(employeeId){
              getInterview();
        }
     },[])

     const setMarks=(appId)=>{
                const arr=interviews.filter((interview)=>interview.applicationId==appId);
                const obj=arr[0];
                setOneInterview(obj);
                setShow(true);
     }

     const changeHandler=(e)=>{
      setOneInterview((prev)=>{
            return{
                 ...prev,
                 [e.target.name]:e.target.value
            }
      })
}

const submitHandler=async(e)=>{
      e.preventDefault();
      try{
          const response=await axios.post("http://localhost:8080/interview/setmark",oneInterview);
          setShow(false);
      }
      catch(e){
         console.log(e);
      }
      
}
      
  return (
    <div>
            <h1>Interview</h1>
            <div>
                 <table className="table">
                      <tr>
                        <th>Application Id</th>
                        <th>Job Role</th>
                        <th>Candidate Name</th>
                        <th>Skills</th>
                        <th>Action</th>
                      </tr>
                      {
                        interviews.length!=0 ? (
                             interviews.map((interview)=>{
                                 return(
                                   <tr key={interview.applicationId}>
                                     <td>{interview.applicationId}</td>
                                     <td>{interview.jobDescription.title}</td>
                                     <td>{interview.candidateDetails.firstName} {interview.candidateDetails.lastName}</td>
                                     <td>{interview.jobDescription.requiredSkill1} {interview.jobDescription.requiredSkill2} {interview.jobDescription.requiredSkill3}</td>
                                     <td><button className="btn btn-primary" onClick={()=>setMarks(interview.applicationId)}>Set Marks</button></td>
                                   </tr>
                                 )
                             })
                        ) :
                        (
                          <p>No Interviews available</p>
                        )
                      }
                 </table>
            </div>

            <Modal show={show} onHide={()=>setShow(false)}>
                <Modal.Header closebutton>
                      <Modal.Title>Set Marks</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form action="" onSubmit={submitHandler}>
             <div>
                <label htmlFor="">Technical Mark</label>
                <input type="number" name="technicalMark" value={oneInterview.technicalMark} onChange={changeHandler}/>
             </div>
             <div>
                <label htmlFor="">Communication Mark</label>
                <input type="number" name="communicationMark" value={oneInterview.communicationMark} onChange={changeHandler} />
             </div>
             <div>
                <button type="submit">Submit</button>
             </div>
         </form>
                </Modal.Body>
            </Modal>

    </div>
  )
};

export default Interview;
