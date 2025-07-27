import React from "react";
import { useState, useEffect } from "react";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem,} from 'reactstrap';
import { User, LogOut } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export default function UserInfo ({setRole}){
    const [userName, setUserName] = useState('');
    const [rol, setrole] = useState('')
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const navigate = useNavigate();

    useEffect(()=>{
        const userName = JSON.parse(localStorage.getItem('usuario'));
        const userRol = JSON.parse(localStorage.getItem('rol'))
        setUserName(userName);
        setrole(userRol)
    },[])

    const cargo =  { 
        1 :   "Doctor", 
        2 : "Asistente" 
    }
    
    const handleLogout = () =>{
        localStorage.removeItem('usuario');
        localStorage.removeItem('rol');
        setRole(null);
        navigate('/');
    }
    return (
         <div className="d-flex pe-3">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="start">
        <DropdownToggle className="userinfo border-0 rounded-5 "><User color="black" /></DropdownToggle>
        <DropdownMenu >
          <DropdownItem header>Usuario</DropdownItem>
          <DropdownItem disabled className="d-flex flex-column">
          <span className="text-font text-dark"> {userName} </span>
            <span className="text-muted">{cargo[rol]} </span>
           </DropdownItem>
          <DropdownItem divider/>
          <DropdownItem onClick={handleLogout}><LogOut /> Salir</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
    )
}