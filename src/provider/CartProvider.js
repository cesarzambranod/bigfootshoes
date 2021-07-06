import {useState}from 'react';
import CartContext from './../context/CartContext';
import Home from './../components/Home';
const CartProvider = ({item={}, quantity}) => {
    const  [cart,setCart]=useState([item]);
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
    
      function addItem(item,quantity) {
        if (isInCart(item)) {
          console.log('Element already in cache store.');
          return;
        }
        console.log(item,'objeto')
        setCart([...cart,item]);
        setStore(quantity);
        console.log(quantity);
        console.log(store);
        console.log('Elemento agregado!');
      }


      return (
        <CartContext.Provider
          value={{addItem, isInCart, clear, cart,store}}
        >
            <Home/>
        </CartContext.Provider>
      );
}
export default CartProvider;