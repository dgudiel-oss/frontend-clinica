import React, { useState,useEffect } from "react";
import { Routes, Route} from 'react-router-dom'
import { administrador, empleado } from "./config/menu/menu";
import  Login  from "./pagina/login";
import { Menu } from "../src/config/navbar/navbar"
export default function App (){
    const [role, setRole] = useState(()=>{
        const role = localStorage.getItem('roleId');
        return role ? Number(role) : null;
    });
  const roles = role === 1 ? administrador : role === 2 ? empleado : null;

    useEffect(()=>{
        if(role !== null){
        localStorage.setItem('roleId', role);
        }
    },[role])


    return(
        <>
        {roles ? (
            <>
        <Menu setRole={setRole} role={role}/>
        <Routes>
            {roles.map((role)=>(
                    <Route key={role.path} path={role.path} element={role.component}></Route>
            ))}
        </Routes>
        </>
        ):(
            <Routes>
                <Route path='/' element={<Login setRole={setRole}/>}></Route>
            </Routes>
        )
        }
        </>

    )
    
}