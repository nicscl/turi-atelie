import React, { useState } from 'react';
import { useCart } from '../context/CartContext.js';

function Cart() {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    removeItemCompletely,
    clearCart,
    totalPrice,
  } = useCart();

  const [address, setAddress] = useState('');

  const buildWhatsAppMessage = () => {
    if (cartItems.length === 0) return '';

    let message = 'Olá, Turi Ateliê! Gostaria de finalizar minha compra:%0A%0A';

    cartItems.forEach((item) => {
      message += `- ${item.quantity} x ${item.name} (${item.variant}) - R$ ${item.price.toFixed(2)}%0A`;
    });

    message += `%0AValor total: R$ ${totalPrice.toFixed(2)}`;
    message += `%0AEndereço de entrega: ${encodeURIComponent(address)}`;
    message += '%0A%0AMuito obrigado! Aguardo informações sobre a finalização do pedido.';

    return message;
  };

  const whatsAppLink = `https://wa.me/24992288877?text=${buildWhatsAppMessage()}`;

  if (cartItems.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2>Seu carrinho está vazio.</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Carrinho de Compras</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid #ddd', textAlign: 'left', padding: '0.5rem' }}>Produto</th>
            <th style={{ borderBottom: '1px solid #ddd', textAlign: 'center', padding: '0.5rem' }}>Preço</th>
            <th style={{ borderBottom: '1px solid #ddd', textAlign: 'center', padding: '0.5rem' }}>Quantidade</th>
            <th style={{ borderBottom: '1px solid #ddd', textAlign: 'center', padding: '0.5rem' }}>Subtotal</th>
            <th style={{ borderBottom: '1px solid #ddd', padding: '0.5rem' }}></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => {
            const itemSubtotal = item.price * item.quantity;
            return (
              <tr key={item.id}>
                <td style={{ borderBottom: '1px solid #ddd', padding: '0.5rem' }}>
                  <div>
                    <strong>{item.name}</strong>
                    <div style={{ fontSize: '0.9rem', color: '#666' }}>
                      Variante: {item.variant}
                    </div>
                  </div>
                </td>
                <td style={{ borderBottom: '1px solid #ddd', textAlign: 'center', padding: '0.5rem' }}>
                  R$ {item.price.toFixed(2)}
                </td>
                <td style={{ borderBottom: '1px solid #ddd', textAlign: 'center', padding: '0.5rem' }}>
                  <button
                    className="btn"
                    style={{ marginRight: '0.5rem' }}
                    onClick={() => removeFromCart(item.id)}
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    className="btn"
                    style={{ marginLeft: '0.5rem' }}
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                </td>
                <td style={{ borderBottom: '1px solid #ddd', textAlign: 'center', padding: '0.5rem' }}>
                  R$ {itemSubtotal.toFixed(2)}
                </td>
                <td style={{ borderBottom: '1px solid #ddd', textAlign: 'center', padding: '0.5rem' }}>
                  <button
                    className="btn"
                    style={{ backgroundColor: '#c0392b' }}
                    onClick={() => removeItemCompletely(item.id)}
                  >
                    Remover
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      
      <div style={{ marginBottom: '2rem', textAlign: 'right' }}>
        <h3>Total: R$ {totalPrice.toFixed(2)}</h3>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <label htmlFor="address" style={{ display: 'block', marginBottom: '0.5rem' }}>Endereço de Entrega:</label>
        <input
          id="address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={{
            width: '100%',
            padding: '0.5rem',
            fontSize: '1rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
          placeholder="Digite seu endereço completo..."
        />
      </div>

      <div style={{ textAlign: 'right' }}>
        <button className="btn" style={{ marginRight: '1rem' }} onClick={clearCart}>
          Limpar Carrinho
        </button>
        <a href={whatsAppLink} target="_blank" rel="noopener noreferrer" className="btn">
          Finalizar Compra (WhatsApp)
        </a>
      </div>
    </div>
  );
}

export default Cart; 