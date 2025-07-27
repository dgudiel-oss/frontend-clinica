import { Navbar, NavbarBrand, Nav, NavItem, NavLink,NavbarToggler, Collapse } from 'reactstrap';
import { NavLink as RRLink} from 'react-router-dom'
import { administrador, asistente } from '../menu/menu'
import React, { useState } from 'react';
import  UserInfo  from '../user/userInfo';

export const Menu =({role, setRole})=>{
    const roles = role === 1 ? administrador : role === 2 ? asistente : null
    const [ isOpen, setIsOpen ] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
    <div>
      <Navbar expand="md">
        <NavbarBrand href="/" className='ms-1 me-4 pe-4'>Medical Clinic</NavbarBrand>
         <Nav className='ms-auto d-md-none'>
            <UserInfo setRole={setRole} />
          </Nav>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className='mt-3 '>
          <Nav className="ms-auto bg-btn-navbar d-flex align-items-center gap-4 " navbar>
            {roles.map((role)=>(
            <NavItem key={role.path}>
              <RRLink to={role.path}className={({ isActive }) => isActive ? 'bg-btn-active' : 'btg-bnt-inactive'}>{role.title}</RRLink>
            </NavItem>
            ))}
          </Nav>
          <Nav className='d-none d-md-flex ms-auto me-3 align-items-center'>
            <UserInfo setRole={setRole} />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}