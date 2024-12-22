import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import homeBackground from '../assets/home-background.png';

function Products() {
  // Example product list (you can replace with your own logic/data):
  const productList = [
    {
      id: 1,
      name: 'Velas dos Desejos',
      image: homeBackground,
      price: 30.0,
      detailsLink: '/vela-dos-desejos',
    },
    {
      id: 2,
      name: 'Velas Clássicas',
      image: 'https://via.placeholder.com/300x200?text=Velas+Cl%C3%A1ssicas',
      price: 15.0,
      detailsLink: '#',
    },
    {
      id: 3,
      name: 'Velas no Gesso',
      image: 'https://via.placeholder.com/300x200?text=Velas+no+Gesso',
      price: 25.0,
      detailsLink: '#',
    },
  ];

  const { addToCart } = useCart();

  return (
    <div id="produtos">
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Nossos Produtos</h2>
      <div className="product-container">
        {productList.map((product) => (
          <div
            key={product.id}
            className={
              product.name === 'Velas dos Desejos'
                ? 'product-card product-card-first'
                : 'product-card'
            }
            style={
              product.name === 'Velas dos Desejos'
                ? {
                    backgroundImage: `url(${product.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }
                : {}
            }
          >
            {product.name !== 'Velas dos Desejos' && (
              <img
                src={product.image}
                alt={product.name}
              />
            )}
            <div
              className="info"
              style={
                product.name === 'Velas dos Desejos'
                  ? { backgroundColor: 'rgba(0, 0, 0, 0.4)', padding: '1rem' }
                  : {}
              }
            >
              <h3 style={{ marginBottom: '0.5rem' }}>{product.name}</h3>
              <p>R$ {product.price.toFixed(2)}</p>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Link
                  to={product.detailsLink}
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
  );
}

export default Products; 