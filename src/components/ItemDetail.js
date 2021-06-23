import React,{ useState } from 'react';
import {Row,Col,Card} from 'react-bootstrap';
import Zoom from 'react-img-zoom';
import ItemCount from './ItemCount';
import Swal from 'sweetalert2'
const ItemDetail = ({item}) => {
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
        <Row key={item.id} className="justify-content-md-center">
                <Col md="auto" xs={7}>
                    <Zoom
                    img={`../img/${item.pictureUrl}`}
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
                            
                            <ItemCount init={1} stock={stock} onAdd={onAdd} saveProduct={saveProduct}></ItemCount>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
     );
}
 
export default ItemDetail;