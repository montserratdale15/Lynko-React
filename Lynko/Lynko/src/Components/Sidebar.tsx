import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { togglePanel } from '../redux/notificacionesSlice';

interface SidebarProps {
  pagina: string;
  setPagina: (pagina: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ pagina, setPagina }) => {
  const [expandido, setExpandido] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const noLeidas = useAppSelector((state) => state.notificaciones.noLeidas);

  const opciones = [
    { id: 'cursos', icono: '📚', texto: 'Cursos' },
    { id: 'usuarios', icono: '👥', texto: 'Usuarios' },
    { id: 'reto', icono: '🏆', texto: 'Reto Semanal' },
    { id: 'perfil', icono: '👤', texto: 'Perfil' },
    { id: 'config', icono: '⚙️', texto: 'Configuración' },
  ];

  return (
    <aside className={`lynko-sidebar ${expandido ? 'expandido' : 'colapsado'}`}>
      <button
        onClick={() => setExpandido(!expandido)}
        style={{
          marginBottom: '1rem',
          width: '100%',
          cursor: 'pointer',
          padding: '0.6rem 1rem',
          borderRadius: '10px',
          border: '1px solid var(--lynko-naranja-claro)',
          backgroundColor: 'white',
          color: 'var(--lynko-gris)',
          fontWeight: 600,
          fontSize: '0.9rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--lynko-naranja-claro)';
          e.currentTarget.style.color = 'var(--lynko-naranja-oscuro)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'white';
          e.currentTarget.style.color = 'var(--lynko-gris)';
        }}
      >
        <span>{expandido ? '«' : '»'}</span>
        {expandido && <span>Ocultar menú</span>}
      </button>

      <button
        onClick={() => dispatch(togglePanel())}
        className="lynko-sidebar__item"
        style={{ position: 'relative' }}
      >
        <span>🔔</span>
        {expandido && <span>Notificaciones</span>}
        {noLeidas > 0 && (
          <span
            style={{
              position: 'absolute',
              top: '4px',
              left: expandido ? 'auto' : '22px',
              right: expandido ? '10px' : 'auto',
              backgroundColor: '#e63946',
              color: 'white',
              borderRadius: '999px',
              fontSize: '0.7rem',
              fontWeight: 700,
              minWidth: '18px',
              height: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 4px',
            }}
          >
            {noLeidas}
          </span>
        )}
      </button>

      {opciones.map((op) => (
        <button
          key={op.id}
          onClick={() => setPagina(op.id)}
          className={`lynko-sidebar__item ${pagina === op.id ? 'lynko-sidebar__item--activo' : ''}`}
        >
          <span>{op.icono}</span>
          {expandido && <span>{op.texto}</span>}
        </button>
      ))}
    </aside>
  );
};

export default Sidebar;