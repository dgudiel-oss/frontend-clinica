import React, { useState,useEffect } from "react";
import { Routes, Route} from 'react-router-dom'
import { administrador, asistente } from "./componentes/menu/menu";
import  Login  from "./paginas/login/login";
import { Menu } from "./componentes/navbar/navbar"
export default function App (){
    const [role, setRole] = useState(()=>{
        const role = localStorage.getItem('roleId');
        return role ? Number(role) : null;
    });
  const roles = role === 1 ? administrador : role === 2 ? asistente : null;

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