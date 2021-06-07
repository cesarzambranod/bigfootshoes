import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';

const ItemListContainer = ({greeting}) => {
    return ( 
    <>
        <Container >
            <Row className="justify-content-md-center">
                <Col md="auto" xs={12}>
                    <h1>{greeting}</h1> 
                </Col>
            </Row>
        </Container>
    </>);
}
 
export default ItemListContainer;