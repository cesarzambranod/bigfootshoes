import React,{ useState } from 'react';
import {Container,Row,Form,Button} from 'react-bootstrap';
import Swal from 'sweetalert2'

const ItemCount = () => {

    const [value, setValue] = useState([]);
    const [stock, setStock] =useState(10);

    const handleChange = (e) =>{
        setValue ([...e.target.value]);
    }

    const onAdd = (e,StockRestante) => {
        e.preventDefault ();
        if(StockRestante > stock) {
            Swal.fire({
                title: 'Error!',
                text: 'Superaste el stock disponible',
                icon: 'error',
                confirmButtonText: 'Ok'
              });
        }else {
            setStock((stock) => stock - StockRestante);
        }
    }

    return ( 
        <>
        <Container>
            <Row xs={12}>
                <Form>
                    <Form.Group controlId="formBasicStock">
                        <Form.Label> Stock Disponible: {stock}</Form.Label>
                        <Form.Control type="number"  className="text-center" value={value} onChange={handleChange} />
                    </Form.Group>
                    <Button className ="container-fluid" variant="outline-primary" onClick = {(e)=> onAdd(e,value)} >AGREGAR</Button>
                </Form>
            </Row>
        </Container>
        </>
     );
}
 
export default ItemCount;