import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons';
library.add(fab);

const Footer = () => {
    const hrefProps = {
        href: "https://www.instagram.com/benjamindstudio/",
        target: "_blank",
      };
    const hrefLinkIn = {
        href: "https://www.linkedin.com/in/cesar-zambrano-delgadillo-94689b123/",
        target: "_blank",
      };
    const hrefGithub = {
        href: "https://github.com/cesarzambranod/",
        target: "_blank",
      };
    return ( 
        <div key="footer" className="text-white bg-dark">
            <Container>
                <Row >
                    <Col className="float-left mt-3" xs={6}>
                        <h4>BigFoot Shoes</h4>
                        <p>Talles grandes 
                        <q>No dejes que te llamen Pie Pequeño 🦕</q></p>
                    </Col>
                    <Col className="text-right mt-3" xs={6}>
                    <a className="text-white text-decoration-none" {...hrefGithub}> <FontAwesomeIcon size='2x' icon={['fab', 'github']}/></a>
                    <a className="text-white text-decoration-none" {...hrefLinkIn}> <FontAwesomeIcon className="ml-2" size='2x' icon={['fab', 'linkedin']}/></a>
                    </Col>
                </Row>
            </Container>
       
        <div className="footer-copyright text-center pb-3">
            <h6>© 2021 Copyright:
                <a className="text-white text-decoration-none"{...hrefProps}> BenjamindStudio</a>
            </h6>
        </div>
    </div>
        
     );
}
 
export default Footer;