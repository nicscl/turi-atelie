import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.js';
import Home from './pages/Home.js';
import Products from './pages/Products.js';
import ProductDetail from './pages/ProductDetail.js';
import Cart from './pages/Cart.js';
import { CartProvider } from './context/CartContext.js';
import './App.css';
import { app, analytics } from './firebase/config.js';

function App() {
  return (
    <Router>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/produto/:productId" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Layout>
      </CartProvider>
    </Router>
  );
}

export default App;