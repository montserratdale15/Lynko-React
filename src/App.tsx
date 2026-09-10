import { useState } from 'react';
import './App.css';
import { AppProvider } from './contexts/AppContext';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import Usuarios from './Components/Usuarios';
import Cursos from './Components/Cursos';
import Login from './Components/Login';
import Registro from './Components/Registro';
import Configuracion from './Components/Configuracion';
import ContadorRegistros from './Components/ContadorRegistros';
import PanelNotificaciones from './Components/PanelNotificaciones';

function AppContent() {
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
          {/* Mostrar componentes globales en todas las páginas */}
          {pagina !== 'login' && pagina !== 'registro' && (
            <>
              <PanelNotificaciones />
              <ContadorRegistros />
            </>
          )}

          {pagina === 'cursos' && <Cursos />}
          {pagina === 'usuarios' && <Usuarios />}
          {pagina === 'config' && <Configuracion />}
        </main>
      </div>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
