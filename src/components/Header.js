import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Turi Ateliê</h1>
      <nav>
        <Link to="/">Início</Link>
        <Link to="/produtos">Produtos</Link>
      </nav>
    </header>
  );
}

export default Header; 