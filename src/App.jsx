import { useState } from 'react';
import './App.css';
import Senha from './components/Senha';
import Sobremim from './components/Sobremim';
import Homepage from './components/Tela_inicial';

function App() {
  const [pagina, setPagina] = useState(<Homepage />);
  
  return (
    <>
      <nav className='Nav-Bar'>
        <img src="./Fotos/farmarcia-logo-pq.png" alt="Logo" />
        <button onClick={() => setPagina(<Homepage />)}>Home</button>
        <button onClick={() => setPagina(<Senha />)}>Senha</button>
        <button onClick={() => setPagina(<Sobremim />)}>Sobre-mim</button>
      </nav>
      {pagina}
    </>
  );
}

export default App;
