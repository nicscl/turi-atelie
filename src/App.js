import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';
import './App.css';
import { app, analytics } from './firebase/config';

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
