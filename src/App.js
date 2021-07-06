import React from 'react';
import './App.css';
import CartProvider from './provider/CartProvider';
import Home from './components/Home';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>  
      <CartProvider>
        <Home/>
      </CartProvider>
    </>
  );
}

export default App;
