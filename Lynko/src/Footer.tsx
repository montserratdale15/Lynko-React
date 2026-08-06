import React from 'react'; 

 

const Footer: React.FC = () => { 

  const currentYear = new Date().getFullYear(); 

  return ( 

    <footer className="lynko-footer"> 

      <p>&copy; {currentYear} <span>Lynko</span> · Aprende jugando</p> 

    </footer> 

  ); 

}; 

 

export default Footer; 
