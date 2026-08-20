import React, { useState } from 'react'; 

const Footer: React.FC = () => { 
  const [modoOscuro, setModoOscuro] = useState<boolean>(false);
  const currentYear = new Date().getFullYear(); 

  return ( 
    <footer className={`lynko-footer ${modoOscuro ? 'footer-oscuro' : ''}`}> 
      <p>&copy; {currentYear} <span>Lynko</span> · Aprende jugando</p> 
      <button 
        onClick={() => setModoOscuro(!modoOscuro)}
        style={{ marginLeft: '15px', padding: '4px 8px', fontSize: '12px', cursor: 'pointer' }}
      >
        {modoOscuro ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
      </button>
    </footer>
  );
};

export default Footer;