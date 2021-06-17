import React,{ useState,useEffect } from 'react';
import {Container} from 'react-bootstrap';
import ItemDetail from './ItemDetail';

    
const ItemDetailContainer = () => {
    var arrayItems = [];
    const [items, setItems] = useState([]);
    useEffect(() =>{
        arrayItems.push(
            {'id':1,'pictureUrl':'adidas_1.jpg','title':'Adidas 1','price':59,'stock':10},    
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
            {items.map((item, idx)=>{
            return (
                    <ItemDetail key={idx} item={item}></ItemDetail>
                )
            })}
        </Container>
    </>);
}
 
export default ItemDetailContainer;