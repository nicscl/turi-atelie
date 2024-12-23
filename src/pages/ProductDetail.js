import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext.js';
import { getProductById } from '../services/firestoreService.js';

function ProductDetail() {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [foundProduct, setFoundProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const product = await getProductById(productId);
      setFoundProduct(product);
    }
    fetchProduct();
  }, [productId]);

  if (!foundProduct) {
    return <div style={{ padding: '2rem' }}>Carregando produto ou não encontrado...</div>;
  }

  const handleAddToCart = () => {
    if (!selectedVariant) return;
    const cartItem = {
      id: `${foundProduct.id}-${selectedVariant.id}`,
      productId: foundProduct.id,
      name: foundProduct.name,
      variant: selectedVariant.name,
      price: selectedVariant.price,
      image: selectedVariant.image,
    };
    addToCart(cartItem);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{foundProduct.name}</h2>
      <p style={{ color: '#666' }}>Categoria: {foundProduct.categoryName}</p>

      {foundProduct.variants.length > 1 && <p>Escolha a variante:</p>}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {foundProduct.variants.map((variant) => (
          <div
            key={variant.id}
            onClick={() => setSelectedVariant(variant)}
            style={{
              cursor: 'pointer',
              border: selectedVariant?.id === variant.id ? '2px solid #8b7355' : '1px solid #ccc',
              borderRadius: '6px',
              padding: '1rem',
              textAlign: 'center',
              width: '150px'
            }}
          >
            <img
              src={variant.image}
              alt={variant.name}
              style={{ width: '100%', height: '100px', objectFit: 'cover', marginBottom: '0.5rem' }}
            />
            <strong>{variant.name}</strong>
            <p style={{ margin: '0.5rem 0' }}>R$ {variant.price.toFixed(2)}</p>
            <p style={{ fontSize: '0.8rem', color: '#666' }}>Estoque: {variant.stock ?? 0}</p>
          </div>
        ))}
      </div>

      <button 
        className="btn"
        onClick={handleAddToCart} 
        disabled={!selectedVariant}
        style={{ marginTop: '1rem' }}
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

export default ProductDetail; 