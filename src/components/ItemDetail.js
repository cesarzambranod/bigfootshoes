import React from 'react';
import {Row,Col,Card} from 'react-bootstrap';
import Zoom from 'react-img-zoom';
import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {
    return ( 
        <Row className="justify-content-md-center">
                <Col md="auto" xs={7}>
                    <Zoom
                    img={`./img/${item.pictureUrl}`}
                    zoomScale={1.3}
                    width={650}
                    height={650}
                    />
                </Col>
                <Col md="auto" xs={5}>
                    <Card style={{ width: '25rem'}}>
                        <Card.Header as="h3">{item.title}</Card.Header>
                        <Card.Body>
                            <Card.Title>{item.price} $</Card.Title>
                            
                            <ItemCount key init={item.init}></ItemCount>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
     );
}
 
export default ItemDetail;