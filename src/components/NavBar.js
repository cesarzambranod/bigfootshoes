import React from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cartwidget from './CartWidget';


const Navs = () => {
    const categories =[{"name":"adidas"},
                        {"name":"nike"},
                        {"name":"puma"},
                        {"name":"reebok"},
                        ];
    return ( 
        <>
            <Navbar collapseOnSelect className="bg-light">
                <Navbar.Brand as={Link} to="/">
                    <img
                        src="../bigfoot-shoes.png"
                        width="100"
                        className="d-inline-block align-top"
                        alt="bigfoot logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                        <NavDropdown title="Categoria" id="basic-nav-dropdown">
                        {categories.map((categorie, idx)=>{
                            return (
                                <NavDropdown.Item key={idx} as={Link} to={`/category/${categorie.name}`} >{categorie.name.charAt(0).toUpperCase() + categorie.name.substring(1)}</NavDropdown.Item>)
                            })}
                            
                        </NavDropdown>
                        <Nav.Link as={Link} to="footer">Conctacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Cartwidget></Cartwidget>
            </Navbar>
        </>
     );
}
 
export default Navs;