import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Usuarios from './components/Usuarios';
import Cursos from './components/Cursos';
import Login from './components/Login';
import Registro from './components/Registro';
import Configuracion from './components/Configuracion';

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
