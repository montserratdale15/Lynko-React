
import { useState } from 'react'; 

import './App.css'; 

import Header from './components/Header'; 

import Footer from './components/Footer'; 

import Sidebar from './components/Sidebar'; 

import Usuarios from './components/usuarios'; 

import Cursos from './components/cursos'; 

 

function App() { 

  // Definimos qué página mostrar: 'usuarios' o 'cursos' 

  const [pagina, setPagina] = useState<string>('cursos'); 

 

  return ( 

    <div className="app"> 

      <Header /> 

 

      <div className="lynko-layout"> 

        <Sidebar pagina={pagina} setPagina={setPagina} /> 

 

        <main className="lynko-contenido"> 

          {/* Lógica para mostrar un componente u otro */} 

          {pagina === 'cursos' && <Cursos />} 

          {pagina === 'usuarios' && <Usuarios />} 

        </main> 

      </div> 

 

      <Footer /> 

    </div> 

  ); 

} 

 

export default App;
