import React,{ useState } from 'react';
import {Container,Row,Form,Button} from 'react-bootstrap';

const ItemCount = ({init,stock,onAdd}) => {

    const [value, setValue] = useState(init);
    const handleChange = (e,stock) =>{
        if((e.target.value  <=stock) &&  (e.target.value >=1))
            setValue (e.target.value);
    }

    return ( 
        <>
        <Container>
            <Row xs={12}>
                <Form>
                    <Form.Group controlId="formBasicStock">
                        <Form.Label> Stock Disponible: {stock}</Form.Label>
                        <Form.Control type="number" className="text-center" value={value} onChange={(e)=> handleChange(e,stock)} />
                    </Form.Group>
                    <Button className ="container-fluid" variant="outline-primary" onClick = {(e)=> {onAdd(e,stock,value); setValue(init)}} >AGREGAR</Button>
                </Form>
            </Row>
        </Container>
        </>
     );
}
 
export default ItemCount;