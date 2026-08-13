import React, { useState } from 'react'; 

const Header: React.FC = () => { 

  const [mostrarDetalleRacha, setMostrarDetalleRacha] = useState<boolean>(false);
  const rachaActual: number = 12; 

  const toggleRacha = () => {
    setMostrarDetalleRacha((prev) => !prev);
  };

  return ( 
    <header className="lynko-header"> 
      <div className="lynko-header__logo">Lyn<span>ko</span></div> 
      <ul className="lynko-header__nav"> 
        <li><a href="#">Inicio</a></li> 
        <li><a href="#">Cursos</a></li> 
        <li><a href="#">Ranking</a></li> 
      </ul> 

      <div style={{ position: 'relative' }}>
        <div 
          className="lynko-header__usuario" 
          onClick={toggleRacha}
          style={{ cursor: 'pointer' }}
          title="Haz clic para ver detalles de tu racha"
        >
          🔥 {rachaActual} días de racha
        </div> 

        {mostrarDetalleRacha && (
          <div style={{
            position: 'absolute',
            right: 0,
            top: '45px',
            backgroundColor: '#fff',
            color: '#333',
            padding: '15px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            width: '220px',
            zIndex: 100,
            textAlign: 'center',
            border: '1px solid #ddd'
          }}>
            <div style={{ fontSize: '32px', marginBottom: '5px' }}>🔥</div>
            <h4 style={{ margin: '0 0 5px 0', color: '#2c3e50' }}>¡Racha de Estudio!</h4>
            <p style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666' }}>
              Llevas <strong>{rachaActual} días</strong> consecutivos aprendiendo en Lynko sin faltar.
            </p>
            <button 
              onClick={toggleRacha}
              style={{
                background: '#e74c3c',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px'
              }}
            >
              Cerrar
            </button>
          </div>
        )}
      </div>
    </header> 
  ); 
}; 

export default Header;