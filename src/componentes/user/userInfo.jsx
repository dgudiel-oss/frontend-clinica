import React from "react";
import { useState, useEffect } from "react";
import { NavItem } from "reactstrap";
export default function UserInfo (){
    const [userName, setUserName] = useState('');
    const [rol, setRole] = useState('')

    useEffect(()=>{
        const userName = JSON.parse(localStorage.getItem('usuario'));
        const userRol = JSON.parse(localStorage.getItem('rol'))
        setUserName(userName);
        setRole(userRol)
    },[])

    const cargo =  { 
        1 :   "Doctor", 
        2 : "Asistente" 
    }
    
    return (
        <>
           {userName && (
            <NavItem className='navbar-user' >
              <span>{userName}</span>
              <span>{cargo[rol]}</span>
            </NavItem>)}
        </>
    )
}