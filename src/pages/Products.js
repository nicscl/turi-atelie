import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import categoriesData from '../data/categoriesData';

function Products() {
  const { addToCart } = useCart();

  return (
    <div id="produtos">
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Nossos Produtos</h2>

      {categoriesData.map((category) => (
        <div key={category.id} style={{ marginBottom: '3rem' }}>
          <h3 style={{ marginBottom: '1rem', color: '#4A3F35' }}>{category.name}</h3>
          <div className="product-container">
            {category.products.map((product) => {
              // Use the first variant as the display variant
              const displayVariant = product.variants[0];
              
              return (
                <div key={product.id} className="product-card">
                  <img
                    src={displayVariant.image}
                    alt={product.name}
                  />
                  <div className="info">
                    <h4 style={{ marginBottom: '0.5rem' }}>{product.name}</h4>
                    <p>A partir de R$ {displayVariant.price.toFixed(2)}</p>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <Link
                        to={`/produto/${product.id}`}
                        className="btn"
                        style={{ textDecoration: 'none' }}
                      >
                        Ver Variantes
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products; 