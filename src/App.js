import React from 'react';
import './App.css';
import  {BrowserRouter,Switch,Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';
import CartProvider from './provider/CartProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>  
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting="DEJANDO GRANDES HUELLAS"/>
          </Route>
          <Route exact path="/category/:category">
            <ItemListContainer greeting="DEJANDO GRANDES HUELLAS"/>
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer/>
          </Route>
        </Switch>
            <Footer/>
      </BrowserRouter>
     </CartProvider>
    </>
  );
}

export default App;
