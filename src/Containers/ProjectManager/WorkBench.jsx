import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "../../AppContext";

const WorkBench = (props) => {
    const employee=useContext(GlobalContext);
    console.log(employee);
     const job=useLocation().state;
      const[workBenchEmployees,setWorkBenchEmployees]=useState([]);
      const[selected,setSelected]=useState([]);
      
     useEffect(()=>{
           const getWorkBenchEmployees=async()=>{
                try{
                    const response=await axios.post("http://localhost:8080/projectmanager/showallbenchedemployees",job);
                   const modified= response.data.map((x)=>{
                        return{
                              ...x,
                              reportingManager:employee.employeeId,
                              projectDetails:{
                                  projectId:employee.projectDetails.projectId
                              }
                        }
               });
               console.log(modified, "modified")
                    setWorkBenchEmployees(modified);
                }
                catch(e){
                     console.log(e);
                }
           }
           getWorkBenchEmployees();
     },[])

//    const updatedWorkBenchEmployees= workBenchEmployees.map((x)=>{
//               return{
//                     ...x,
//                     reportingManager:employee.reportingManager,
//                     projectId:employee.projectDetails.projectId
//               }
//      });
    //  setWorkBenchEmployees(updatedWorkBenchEmployees)
     console.log(workBenchEmployees);

     const checkBoxHandle=(e)=>{
             const updatedSelected=[...selected];
        if (e.target.checked) {
                updatedSelected.push(JSON.parse(e.target.value));
        } else {
          updatedSelected.splice(selected.indexOf(JSON.parse(e.target.value)),1);
        }
        setSelected(updatedSelected);
     }

     const AddOnBench = {
        employees:selected,
        jobDescription:job,
     }

     const addProjects=async(e)=>{
        // setWorkBenchEmployees(updatedWorkBenchEmployees);
            e.preventDefault();
            try{
                console.log("requested",AddOnBench);
                 const response=await axios.post("http://localhost:8080/projectmanager/changebenchstatus",AddOnBench);
                 console.log(response,"response");
            }
            catch(e){
                 console.log(e);
            }
     }

     console.log(selected);


  return (
    <div>
         <h1>WorkBench Employees Availability</h1>
          <table className="table">
                <tr>
                    <th></th>
                    <th>Employee Id</th>
                    <th>Name</th>
                    <th>Skills</th>
                    <th>Experience</th>
                </tr>
                 {
                     workBenchEmployees?.map((emp)=>{
                         return(
                               <tr key={emp.employeeId}>
                                 <td><input key={emp} type="checkbox" value={JSON.stringify(emp)}  onChange={checkBoxHandle}/></td>
                                 <td>{emp.employeeId}</td>
                                 <td>{emp.firstName} {emp.lastName}</td>
                                 <td>{emp.skill1},{emp.skill2},{emp.skill3}</td>
                                 <td>{emp.totalExperience}</td>
                               </tr>
                         )
                     })
                 }
          </table>
          <button className="btn btn-success" onClick={addProjects}>Add To Project</button>
    </div>
  )
};

export default WorkBench;
