import React from 'react';
import {Card,Button} from 'react-bootstrap';

const Item = ({item}) => {
    return ( 
        <Card className="text-center" style={{ width: '18rem', float:"left" }} key={item.id}>
        <Card.Img variant="top" src={`./img/${item.pictureUrl}`} />
        <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
                {item.price} $
            </Card.Text>
           <Button variant="primary">Agregar</Button>
        </Card.Body>
        </Card>
     );
}
 
export default Item;