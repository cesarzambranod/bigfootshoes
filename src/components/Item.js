import React,{ useState } from 'react';
import {Card,Button} from 'react-bootstrap';
import ItemCount from './ItemCount';
import Swal from 'sweetalert2'


const Item = ({item}) => {
    
    const [stock, setStock] =useState(item.stock);
    const [saveProduct, setSaveProduct] =useState(false);
    const onAdd = (e,stock,StockRestante) => {
        e.preventDefault ();
        if(StockRestante > stock) {
            Swal.fire({
                title: 'Error!',
                text: 'Superaste el stock disponible',
                icon: 'error',
                confirmButtonText: 'Ok'
              });
              setSaveProduct(false);

        }else {
            setStock((stock) => stock - StockRestante);
            setSaveProduct(true);
        }
    }
    return ( 
        <Card className="text-center" style={{ width: '18rem', float:"left",height: '36rem'}} key={item.id}>
        <Card.Img variant="top" src={`../img/${item.pictureUrl}`} />
        <Card.Body>
            <Button variant="dark" href={`/item/${item.id}`} block> VER DETALLES</Button>                    
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
                {item.price} $
            </Card.Text>
            <ItemCount  key init={1} stock={stock} onAdd={onAdd} saveProduct={saveProduct}></ItemCount>
        </Card.Body>
        </Card>
     );
}
 
export default Item;