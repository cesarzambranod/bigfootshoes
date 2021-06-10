import React from 'react';
import Item from './Item';

const ItemList = ({items}) => {
    return ( 
        <>
            {items.map((item, idx)=>{
            return (
                    <Item key={idx} item={item}></Item>
                )
            })}

        </>
     );
}
 
export default ItemList;