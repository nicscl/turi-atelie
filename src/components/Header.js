import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.js';

function Header() {
  const { cartItems } = useCart();
  
  // Calculate the total quantity for the cart badge
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header>
      <h1>Turi Ateliê</h1>
      <nav>
        <Link to="/">Início</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/cart" style={{ marginLeft: '1rem', position: 'relative' }}>
          Carrinho
          {totalQuantity > 0 && (
            <span
              style={{
                background: '#c0392b',
                color: '#fff',
                borderRadius: '50%',
                padding: '0.2rem 0.5rem',
                fontSize: '0.8rem',
                marginLeft: '0.3rem',
                position: 'absolute',
                top: '-10px',
                right: '-10px',
              }}
            >
              {totalQuantity}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}

export default Header; 