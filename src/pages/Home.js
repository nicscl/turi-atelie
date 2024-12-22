import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/home-background.jpg';

// Import candle images from products folder
import cravoCanela from '../assets/products/cravoecanela.png';
import laranja from '../assets/products/laranja.png';
import coracao from '../assets/products/coracao.png';

function Home() {
    return (
      <div style={{ textAlign: 'center', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
        {/* Hero Section: Full-screen background */}
        <div 
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            color: '#2c2c2c',
            position: 'relative'
          }}
        >
          <div style={{ 
            position: 'relative',
            zIndex: 2,
            padding: '3rem',
            maxWidth: '600px',
            margin: '0 auto',
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            borderRadius: '4px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
            <h1 style={{ 
              fontSize: '3rem', 
              marginBottom: '1.5rem',
              fontWeight: '300',
              letterSpacing: '3px',
              color: '#1a1a1a'
            }}>
              Turi Ateliê
            </h1>
            <p style={{ 
              fontSize: '1.2rem',
              marginBottom: '2rem',
              fontWeight: '300',
              letterSpacing: '1px',
              color: '#4a4a4a',
              lineHeight: '1.6'
            }}>
              Iluminando momentos, criando memórias
            </p>
            <Link 
              to="/produtos" 
              className="btn" 
              style={{ 
                margin: '1rem auto 0 auto',
                textDecoration: 'none',
                fontSize: '1.1rem',
                padding: '1rem 2rem',
                letterSpacing: '1px',
                backgroundColor: '#8b7355',
                border: 'none',
                transition: 'all 0.3s ease'
              }}
            >
              Descubra nossas velas
            </Link>
          </div>
        </div>
  
        {/* Additional Sections */}
        <section style={{ padding: '3rem 1rem', maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#4a3f35' }}>
            Nossas Outras Criações
          </h2>
  
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
            Além das Velas dos Desejos, exploramos diversas linhas para atender cada momento da sua vida. 
            Cada vela é cuidadosamente elaborada com fragrâncias que inspiram e transformam ambientes, 
            trazendo harmonia e bem-estar.
          </p>
  
          {/* Grid of Additional Candle Types */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
            
            {/* Card 1 */}
            <div 
              style={{
                width: '300px',
                border: '1px solid #ddd',
                borderRadius: '6px',
                boxShadow: '0 0 5px rgba(0,0,0,0.05)',
                overflow: 'hidden',
                backgroundColor: '#fff'
              }}
            >
              <img 
                src={cravoCanela} 
                alt="Vela de Cravo e Canela" 
                style={{ width: '100%', height: '250px', objectFit: 'cover' }}
              />
              <div style={{ padding: '1rem', textAlign: 'left' }}>
                <h3 style={{ marginBottom: '0.5rem', color: '#4A3F35' }}>Vela Cravo e Canela</h3>
                <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
                  Estimula a energia e a paixão, trazendo calor e aconchego ao ambiente. 
                  Ideal para jantares românticos ou momentos de reflexão.
                </p>
                <Link to="/produtos" className="btn">Saiba mais</Link>
              </div>
            </div>
  
            {/* Card 2 */}
            <div 
              style={{
                width: '300px',
                border: '1px solid #ddd',
                borderRadius: '6px',
                boxShadow: '0 0 5px rgba(0,0,0,0.05)',
                overflow: 'hidden',
                backgroundColor: '#fff'
              }}
            >
              <img 
                src={laranja} 
                alt="Vela de Flor de Laranjeira" 
                style={{ width: '100%', height: '250px', objectFit: 'cover' }}
              />
              <div style={{ padding: '1rem', textAlign: 'left' }}>
                <h3 style={{ marginBottom: '0.5rem', color: '#4A3F35' }}>Vela Flor de Laranjeira</h3>
                <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
                  Transmite vitalidade e frescor, perfeita para começar o dia 
                  ou para trazer boas energias ao seu espaço.
                </p>
                <Link to="/produtos" className="btn">Saiba mais</Link>
              </div>
            </div>
  
            {/* Card 3 */}
            <div 
              style={{
                width: '300px',
                border: '1px solid #ddd',
                borderRadius: '6px',
                boxShadow: '0 0 5px rgba(0,0,0,0.05)',
                overflow: 'hidden',
                backgroundColor: '#fff'
              }}
            >
              <img 
                src={coracao} 
                alt="Vela em Formato de Coração" 
                style={{ width: '100%', height: '250px', objectFit: 'cover' }}
              />
              <div style={{ padding: '1rem', textAlign: 'left' }}>
                <h3 style={{ marginBottom: '0.5rem', color: '#4A3F35' }}>Vela Coração</h3>
                <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
                  Um toque romântico para ocasiões especiais ou para decorar seu cantinho 
                  de forma delicada e encantadora.
                </p>
                <Link to="/produtos" className="btn">Saiba mais</Link>
              </div>
            </div>
  
          </div>
        </section>
      </div>
    );
  }
  
export default Home;
  