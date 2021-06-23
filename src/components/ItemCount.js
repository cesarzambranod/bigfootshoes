import React,{ useState } from 'react';
import {Container,Row,Form,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ItemCount = ({init,stock,onAdd,saveProduct}) => {

    const [value, setValue] = useState(init);
    const handleChange = (e,stock) =>{
        if((e.target.value  <=stock) &&  (e.target.value >=1))
            setValue (e.target.value);
    }

    return ( 
        <>
      
            {!saveProduct?(
                <Form >
                <Form.Group controlId="formBasicStock">
                    <Form.Label> Stock Disponible: {stock}</Form.Label>
                    <Form.Control type="number" className="text-center" value={value} onChange={(e)=> handleChange(e,stock)} />
                </Form.Group>
                <Button className ="container-fluid" variant="outline-primary" onClick = {(e)=> {onAdd(e,stock,value); setValue(init)}} >AGREGAR</Button>
                </Form>)
            :
            ( <Button as={Link} to={`/cart/`} variant="primary" block>TERMINAR MI COMPRA</Button>)}
        </>
     );
}
 
export default ItemCount;