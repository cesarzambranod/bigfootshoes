import React from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import Cartwidget from './CartWidget';


const Navs = () => {
    const categories =[{"name":"Adidas"},
                        {"name":"Nike"},
                        {"name":"Puma"},
                        {"name":"Rebook"},
                        ];
    return ( 
        <>
            <Navbar collapseOnSelect className="bg-light">
                <Navbar.Brand href="#home">
                    <img
                        src="./bigfoot-shoes.png"
                        width="100"
                        className="d-inline-block align-top"
                        alt="bigfoot logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <NavDropdown title="Categoria" id="basic-nav-dropdown">
                        {categories.map(function(categorie, idx){
                            return (
                                <NavDropdown.Item key={idx} href={`#${categorie.name}`}>{categorie.name}</NavDropdown.Item>)
                            })}
                            
                        </NavDropdown>
                        <Nav.Link href="#Conctacto">Conctacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Cartwidget></Cartwidget>
            </Navbar>
        </>
     );
}
 
export default Navs;