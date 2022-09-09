
import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import NewProduct from './components/NewProduct'
import Product from './components/Product'
import ProductList from './components/ProductList'


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={
          <div>
            <NewProduct/>
            <ProductList/>
          </div>
        }/>
        <Route path='/products/:id' element={<Product/>}/>
      </Routes>
    </div>
  );
}

export default App;
