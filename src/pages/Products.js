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
            {category.products.map((product) => (
              <div key={product.id} className="product-card">
                <img
                  src={product.image}
                  alt={product.name}
                />
                <div className="info">
                  <h4 style={{ marginBottom: '0.5rem' }}>{product.name}</h4>
                  <p>R$ {product.price.toFixed(2)}</p>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <Link
                      to="#"
                      className="btn"
                      style={{ textDecoration: 'none' }}
                    >
                      Detalhes
                    </Link>
                    <button
                      className="btn"
                      onClick={() => addToCart(product)}
                    >
                      Adicionar ao Carrinho
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products; 