import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <>
            <Navbar dark full color='dark' expand="md">
                <NavbarBrand href="/">User Form Task</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href="/user-form">User Form</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/user-list">User List</NavLink>
                        </NavItem>                        
                    </Nav>
                </Collapse>
            </Navbar>
            <main>
            <Outlet />
            </main>
            
        </>
    )
}

export default Layout
