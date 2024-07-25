import { createContext, useState } from "react";

export const GlobalContext=createContext({});

export const GlobalProvider=({children})=>{
    const obj=localStorage.getItem("appValue");
    const[employeeDetails,setEmployeeDetails]=useState(JSON.parse(obj));
    console.log(employeeDetails);

    return(
        <GlobalContext.Provider value={employeeDetails}>
            {children}
        </GlobalContext.Provider>
    )
}