import React from 'react';
import  {BrowserRouter,Switch,Route} from 'react-router-dom'
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import Footer from './Footer';
const Home = () => {
    return (  
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
    );
}
 
export default Home;