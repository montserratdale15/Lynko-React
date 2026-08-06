import React from 'react'; 

 

const Header: React.FC = () => { 

  return ( 

    <header className="lynko-header"> 

      <div className="lynko-header__logo">Lyn<span>ko</span></div> 

      <ul className="lynko-header__nav"> 

        <li><a href="#">Inicio</a></li> 

        <li><a href="#">Cursos</a></li> 

        <li><a href="#">Ranking</a></li> 

      </ul> 

      <div className="lynko-header__usuario">🔥 12 días de racha</div> 

    </header> 

  ); 

}; 

 

export default Header; 
