import React from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';

const Navs = () => {
    return ( 
        <>
            <Navbar collapseOnSelect className="bg-light justify-content-between">
                <Navbar.Brand href="#home">
                    <img
                        src="./logo_bs.png"
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="bigfoot logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <NavDropdown title="Categoria" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#Adidas">Adidas</NavDropdown.Item>
                            <NavDropdown.Item href="#Nike">Nike</NavDropdown.Item>
                            <NavDropdown.Item href="#Puma">Puma</NavDropdown.Item>
                            <NavDropdown.Item href="#Rebook">Rebook</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#Conctacto">Conctacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
     );
}
 
export default Navs;