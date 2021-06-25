import React,{ useState } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';

    
const ItemListContainer = ({greeting}) => {
    const {category} = useParams();
    var arrayItems = []; 
    const [items, setItems] = useState([]);
        arrayItems.push(
            {'id':1,'pictureUrl':'adidas_1.jpg','title':'Adidas 1','price':59,'stock':10,'category':'adidas'},
            {'id':2,'pictureUrl':'nike_1.jpg','title':'Nike 1','price':53, 'stock':12,'category':'nike'},
            {'id':3,'pictureUrl':'fila_1.jpg','title':'Fila 1','price':55,'stock':15,'category':'fila'},
            {'id':4,'pictureUrl':'puma_1.jpg','title':'Puma 1','price':52,'stock':11,'category':'puma'},    
            {'id':5,'pictureUrl':'adidas_2.jpg','title':'Adidas 2','price':59,'stock':14,'category':'adidas'},
            {'id':6,'pictureUrl':'adidas_3.jpg','title':'Adidas 3','price':53,'stock':20,'category':'adidas'},
            {'id':7,'pictureUrl':'reebok_1.jpg','title':'Reebok 1','price':55,'stock':6,'category':'reebok'}     
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
    
    let listItems=[];
    if (category) {
        items.filter(filtro=>filtro.category===category).map((item)=> listItems.push(item));

    } else {
        items.map((item)=> listItems.push(item)  );
        }    
        
    return ( 
    <>
        <Container >
            <Row className="justify-content-md-center">
                <Col md="auto" xs={12}>
                    <h1>{greeting}</h1> 
                </Col>
            </Row>
        </Container>
        <div style={{display:'table',}}><ItemList items={listItems} ></ItemList></div>        
    </>);
}
 
export default ItemListContainer;