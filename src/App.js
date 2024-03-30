import React from 'react';
import { Routes, Route,Outlet } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Products } from './pages/Products/Products';
import { Product } from './pages/Product/Product';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import './App.scss'

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="products/:id" element={<Products />} />
        <Route path="product/:id" element={<Product />} />
      </Route>
    </Routes>
  );
};

export default App;
