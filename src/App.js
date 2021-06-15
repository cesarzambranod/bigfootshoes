import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="DEJANDO GRANDES HUELLAS"/>
      <ItemDetailContainer/>
    </>
  );
}

export default App;
