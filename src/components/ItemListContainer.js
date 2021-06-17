import React,{ useState,useEffect } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import ItemList from './ItemList';

    
const ItemListContainer = ({greeting}) => {
    var arrayItems = []; 
    const [items, setItems] = useState([]);
    useEffect(() =>{
        arrayItems.push(
            {'id':1,'pictureUrl':'adidas_1.jpg','title':'Adidas 1','price':59,'stock':150 },
            {'id':2,'pictureUrl':'nike_1.jpg','title':'Nike 1','price':53, 'stock':12},
            {'id':3,'pictureUrl':'fila_1.jpg','title':'Fila 1','price':55,'stock':15},
            {'id':4,'pictureUrl':'puma_1.jpg','title':'Puma 1','price':52,'stock':11},    
            {'id':5,'pictureUrl':'adidas_2.jpg','title':'Adidas 2','price':59,'stock':14},
            {'id':6,'pictureUrl':'adidas_3.jpg','title':'Adidas 3','price':53,'stock':20},
            {'id':7,'pictureUrl':'reebok_1.jpg','title':'Reebok 1','price':55,'stock':6}     
            );
        const getItem=(arrayItems) => {
            return new Promise((resolve,reject) => {
                setTimeout(() => {
                    resolve(arrayItems)
                },2000)
            })
        }
        getItem(arrayItems)
        .then((result) => { setItems ([...arrayItems]);})
        .catch(error => console.log(error.message))
    },[])
    
    return ( 
    <>
        <Container >
            <Row className="justify-content-md-center">
                <Col md="auto" xs={12}>
                    <h1>{greeting}</h1> 
                </Col>
            </Row>
        </Container>
        <div style={{display:'table',}}><ItemList items={items} ></ItemList></div>
    </>);
}
 
export default ItemListContainer;