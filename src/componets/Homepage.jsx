import React from 'react';
import './Tela_inicial.css';

function Homepage() {
  return (
    <div className="homepage-container">
      <img className='logo_principal' src="./Fotos/farmarcia-logo-comple.png" alt="Logo Completo" />
      <h1>Bem-vindo à Nova Farmárcia!</h1>
      <p>Estamos de cara nova e convidamos você para nossa inauguração!</p>
    </div>
  );
}

export default Homepage;
