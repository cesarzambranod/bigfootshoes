import React from 'react';
import {Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const Cartwidget = () => {
    return (  
        <>
           <Button variant="outline-success">
               <FontAwesomeIcon icon={faShoppingCart} />
            </Button>
        </>
    );
}
 
export default Cartwidget;