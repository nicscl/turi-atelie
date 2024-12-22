import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import VelaDosDesejosDetalhe from './pages/VelaDosDesejosDetalhe';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/vela-dos-desejos" element={<VelaDosDesejosDetalhe />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
