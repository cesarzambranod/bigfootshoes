import React,{ useState,useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
    const arrayItems = [];
    const [items, setItems] = useState([]);
    const {id} = useParams();
    useEffect(() =>{
        arrayItems.push(
            {'id':1,'pictureUrl':'adidas_1.jpg','title':'Adidas 1','price':59,'stock':10 },
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
            {items.filter(detalle=>detalle.id===(parseInt(id))).map((item, idx)=>{
             
                
            return (
                <>
                 
                    <ItemDetail key={idx} item={item}></ItemDetail>
                 
                </>
                )
            })}
        </Container>
    </>);
}
 
export default ItemDetailContainer;