import { Navbar, NavbarBrand, Nav, NavItem, NavLink,NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom'
import { administrador, asistente } from '../menu/menu'
import React, { useState } from 'react';

export const Menu =({role})=>{
    const roles = role === 1 ? administrador : role === 2 ? asistente : null
    const [ isOpen, setIsOpen ] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
    <div>
      <Navbar light expand="md">
        <NavbarBrand href="/" className='ms-3'>Medical Clinic</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className=' justify-content-center pe-4'>
          <Nav className="d-flex gap-md-4 pe-4" navbar>
            {roles.map((role)=>(
            <NavItem key={role.path}>
              <NavLink tag={Link} to={role.path}>{role.title}</NavLink>
            </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}