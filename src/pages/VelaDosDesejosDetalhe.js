import React from 'react';

function VelaDosDesejosDetalhe() {
  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Vela dos Desejos</h2>
      
      <div className="details-grid">
        {/* Foto no canto esquerdo */}
        <div>
          <img 
            src="https://via.placeholder.com/400x400?text=Velas+dos+Desejos" 
            alt="Velas dos Desejos" 
          />
        </div>

        {/* Lista de desejos e fragrâncias no canto direito */}
        <div>
          <h3 style={{ marginBottom: '1rem' }}>Desejos e suas Fragrâncias</h3>
          <p><strong>Harmonia</strong> - Lavanda</p>
          <p><strong>Serenidade</strong> - Orquídea</p>
          <p><strong>Sorte</strong> - Herbal</p>
          <p><strong>Abundância</strong> - Alecrim</p>
          <p><strong>Vitalidade</strong> - Flor de Laranjeira</p>
          <p><strong>Paixão</strong> - Cravo e Canela</p>
        </div>
      </div>
    </div>
  );
}

export default VelaDosDesejosDetalhe; 