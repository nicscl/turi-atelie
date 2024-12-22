import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import categoriesData from '../data/categoriesData';
import { useCart } from '../context/CartContext';

function ProductDetail() {
  const { productId } = useParams(); 
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(null);

  // Find which product in which category matches productId
  let foundProduct = null;

  for (let category of categoriesData) {
    const prod = category.products.find(p => p.id.toString() === productId);
    if (prod) {
      foundProduct = { ...prod, categoryName: category.name };
      break;
    }
  }

  if (!foundProduct) {
    return <div style={{ padding: '2rem' }}>Produto não encontrado.</div>;
  }

  const handleAddToCart = () => {
    if (!selectedVariant) return;

    const cartItem = {
      id: `${foundProduct.id}-${selectedVariant.id}`,  // unique combo
      productId: foundProduct.id,
      name: foundProduct.name,
      variant: selectedVariant.name,
      price: selectedVariant.price,
      image: selectedVariant.image,
    };
    addToCart(cartItem);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 className="text-2xl font-bold mb-4">{foundProduct.name}</h2>
      <p className="text-gray-600 mb-6">Categoria: {foundProduct.categoryName}</p>
      
      {foundProduct.variants.length > 1 && (
        <p className="text-lg mb-4">Escolha a variante:</p>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {foundProduct.variants.map((variant) => (
          <div
            key={variant.id}
            onClick={() => setSelectedVariant(variant)}
            className={`cursor-pointer rounded-lg border p-4 transition-all ${
              selectedVariant?.id === variant.id 
                ? 'border-2 border-amber-600' 
                : 'border-gray-200 hover:border-amber-400'
            }`}
          >
            <img 
              src={variant.image} 
              alt={variant.name} 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">{variant.name}</h3>
            <p className="text-amber-600 font-bold">
              R$ {variant.price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      <button 
        onClick={handleAddToCart} 
        disabled={!selectedVariant}
        className={`mt-8 px-6 py-3 rounded-lg font-semibold transition-all ${
          selectedVariant
            ? 'bg-amber-600 text-white hover:bg-amber-700'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

export default ProductDetail; 