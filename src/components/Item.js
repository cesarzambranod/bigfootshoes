import React,{ useState } from 'react';
import {Card} from 'react-bootstrap';
import ItemCount from './ItemCount';
import Swal from 'sweetalert2'


const Item = ({item}) => {
    
    const [stock, setStock] =useState(item.stock);
    const onAdd = (e,stock,StockRestante) => {
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
        <Card className="text-center" style={{ width: '18rem', float:"left" }} key={item.id}>
        <Card.Img variant="top" src={`./img/${item.pictureUrl}`} />
        <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
                {item.price} $
            </Card.Text>
                <ItemCount  key init={1} stock={stock} onAdd={onAdd}></ItemCount>
        </Card.Body>
        </Card>
     );
}
 
export default Item;