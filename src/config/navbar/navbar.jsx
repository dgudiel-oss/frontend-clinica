import { Navbar, NavbarBrand, Nav, NavItem, NavLink,NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom'
import { administrador, empleado } from '../menu/menu'
import React, { useState } from 'react';




export const Menu =({role})=>{
    const roles = role === 1 ? administrador : role === 2 ? empleado : null
    const [ isOpen, setIsOpen ] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
    <div>
      <Navbar dark expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
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