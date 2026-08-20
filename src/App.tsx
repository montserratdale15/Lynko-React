import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import Usuarios from './Components/Usuarios';
import Cursos from './Components/Cursos';
import Login from './Components/Login';
import Registro from './Components/Registro';
import Configuracion from './Components/Configuracion';

function App() {
  const [pagina, setPagina] = useState<string>('cursos');

  // Las páginas de auth no llevan Header/Sidebar/Footer
  if (pagina === 'login') {
    return (
      <div className="app app--auth">
        <Login />
        <p className="ir-a-registro" onClick={() => setPagina('registro')}>Ir a Registro</p>
      </div>
    );
  }

  if (pagina === 'registro') {
    return (
      <div className="app app--auth">
        <Registro />
        <p className="ir-a-registro" onClick={() => setPagina('login')}>Ir a Login</p>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />

      <div className="lynko-layout">
        <Sidebar pagina={pagina} setPagina={setPagina} />

        <main className="lynko-contenido">
          {pagina === 'cursos' && <Cursos />}
          {pagina === 'usuarios' && <Usuarios />}
          {pagina === 'config' && <Configuracion />}
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
