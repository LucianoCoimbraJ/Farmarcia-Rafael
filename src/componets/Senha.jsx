import React, { useState } from 'react';
import './Senha.css';

const Senha = () => {
  const [senhaNormal, setSenhaNormal] = useState(0);
  const [senhaPreferencial, setSenhaPreferencial] = useState(0);
  const [senhaChamada, setSenhaChamada] = useState('');
  const [senhasGeradas, setSenhasGeradas] = useState({
    normal: [],
    preferencial: []
  });

  const gerarSenhaNormal = () => {
    const novaSenha = senhaNormal + 1;
    setSenhaNormal(novaSenha);
    setSenhasGeradas(prev => ({
      ...prev,
      normal: [...prev.normal, novaSenha]
    }));
  };

  const gerarSenhaPreferencial = () => {
    const novaSenha = senhaPreferencial + 1;
    setSenhaPreferencial(novaSenha);
    setSenhasGeradas(prev => ({
      ...prev,
      preferencial: [...prev.preferencial, novaSenha]
    }));
  };

  const chamarSenha = (tipo) => {
    if (tipo === 'normal' && senhaNormal > 0) {
      setSenhaChamada(senhaNormal);
      setSenhaNormal(senhaNormal - 1);
    } else if (tipo === 'preferencial' && senhaPreferencial > 0) {
      setSenhaChamada(senhaPreferencial);
      setSenhaPreferencial(senhaPreferencial - 1);
    } else {
      setSenhaChamada('Nenhuma senha disponível');
    }
  };

  return (
    <div>
      <h1>Gerenciador de Senhas</h1>
      <button className='Gerador-de-senha' onClick={gerarSenhaNormal}>Gerar Senha Normal</button>
      <button className='Gerador-de-senha' onClick={gerarSenhaPreferencial}>Gerar Senha Preferencial</button>
      <button className='Chamador-de-senha' onClick={() => chamarSenha('normal')}>Chamar Senha Normal</button>
      <button className='Chamador-de-senha' onClick={() => chamarSenha('preferencial')}>Chamar Senha Preferencial</button>
      <h2 className='senha-chamada'>Senha Chamada: {senhaChamada}</h2>
      <h2 className='senha-chamada'>Senhas Geradas:</h2>
      <div>
        <h3>Senhas Normais:</h3>
        <ul>
          {senhasGeradas.normal.map((senha, index) => <li key={index}>{senha}</li>)}
        </ul>
        <h3>Senhas Preferenciais:</h3>
        <ul>
          {senhasGeradas.preferencial.map((senha, index) => <li key={index}>{senha}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default Senha;
