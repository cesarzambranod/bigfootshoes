import {useState}from 'react';
import CartContext from './../context/CartContext';
export default function CartProvider({item={}, quantity}) {
    const  [cart,setCart]=useState(item);
    const  [store,setStore]=useState(quantity);
    function getFromCart(id) {
        return cart.find(x => x.id === id);
      }
    
      function isInCart({ id }) {
        return id === undefined ? undefined : getFromCart(id) !== undefined;
      }
    
      function clear({ id }) {
        cart.splice(id,1);
        setCart([...cart]);
      }
    
      function addItem(obj,cantidad) {
        if (isInCart(obj)) {
          console.log('Element already in cache store.');
          return;
        }
        setCart([...cart, obj]);
        setStore(store,cantidad);
        console.log('Elemento agregado!');
      }


      return (
        <CartContext.Provider
          value={{ cart, addItem, isInCart, clear}}
        >

        </CartContext.Provider>
      );}