import React from 'react';
import { Link } from 'react-router-dom';
import homeBackground from '../assets/home-background.jpg';

function Products() {
  return (
    <div id="produtos">
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Nossos Produtos</h2>
      <div className="product-container">
        
        {/* Produto I - Velas dos Desejos */}
        <div 
          className="product-card product-card-first" 
          style={{
            backgroundImage: `url(${homeBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="info" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', padding: '1rem' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>Velas dos Desejos</h3>
            <Link to="/vela-dos-desejos" className="btn">
              Detalhes
            </Link>
          </div>
        </div>
        
        {/* Produto II - Velas Clássicas */}
        <div className="product-card">
          <img 
            src="https://via.placeholder.com/300x200?text=Velas+Clássicas" 
            alt="Velas Clássicas" 
          />
          <div className="info">
            <h3>Velas Clássicas</h3>
            <Link to="#" className="btn">
              Detalhes
            </Link>
          </div>
        </div>

        {/* Produto III - Velas no Gesso */}
        <div className="product-card">
          <img 
            src="https://via.placeholder.com/300x200?text=Velas+no+Gesso" 
            alt="Velas no Gesso" 
          />
          <div className="info">
            <h3>Velas no Gesso</h3>
            <Link to="#" className="btn">
              Detalhes
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Products; 