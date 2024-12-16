import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './Component/Navbar';
import Home from './Component/Home';
import Product from './Component/Product';
import Products, { Category1, Category2,Category3 } from './Component/Products';
import Footer from './Component/Footer';

export default function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/Home' element={<Home />}/>
          <Route path='/Product' element={<Product />}/>
          <Route path='/Products' element={<Products />}/>
          <Route path='/Category1' element={<Category1 />}/>
          <Route path='/Category2' element={<Category2 />}/>
          <Route path='/Category3' element={<Category3 />}/>
          <Route path='/Footer' element={<Footer />}/>
        </Routes>
      </Router>
    </>
  );
}


