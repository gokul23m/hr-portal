import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SetMarksModal = (props) => {  
        const navigate=useNavigate();
       const interview=useLocation().state;
       console.log(interview);
       const [jobApplication,setJobApplication]=useState({
          applicationId :interview.applicationId,
          dateOfApplication:interview.dateOfApplication,
          interviewDate:interview.interviewDate,
          status:interview.status,
          technicalMark:interview.technicalMark,
          communicationMark:interview.communicationMark,
          totalMark:interview.totalMark,
         jobDescription :{
            jobId:interview.jobDescription.jobId,
            title:interview.jobDescription.title,
            requiredSkill1:interview.jobDescription.requiredSkill1,
            requiredSkill2:interview.jobDescription.requiredSkill2,
            requiredSkill3:interview.jobDescription.requiredSkill3
         },
         candidateDetails :{
                    candidateId:interview.candidateDetails.candidateId,
                    firstName:interview.candidateDetails.firstName,
                    lastName:interview.candidateDetails.lastName,
                    resumeLink:interview.candidateDetails.resumeLink
         },
         employeeDetails : {
            employeeId:interview.jobDescription.employeeId
         }
       });

       const changeHandler=(e)=>{
             setJobApplication((prev)=>{
                   return{
                        ...prev,
                        [e.target.name]:e.target.value
                   }
             })
       }

       const submitHandler=async(e)=>{
             e.preventDefault();
             try{
                 const response=await axios.post("http://localhost:8080/interview/setmark",jobApplication);
                 console.log(response);
                 if(response.status==200){
                      navigate("/interview");
                 }
             }
             catch(e){
                console.log(e);
             }
             
       }

  return (
    <div>
         <form action="" onSubmit={submitHandler}>
             <div>
                <label htmlFor="">Technical Mark</label>
                <input type="number" name="technicalMark" value={jobApplication.technicalMark} onChange={changeHandler}/>
             </div>
             <div>
                <label htmlFor="">Communication Mark</label>
                <input type="number" name="communicationMark" value={jobApplication.communicationMark} onChange={changeHandler} />
             </div>
             <div>
                <button type="submit">Submit</button>
             </div>
         </form>
    </div>
  )
};

export default SetMarksModal;
 