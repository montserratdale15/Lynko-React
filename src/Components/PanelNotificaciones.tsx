import React from 'react';
import { useAppContext } from '../contexts/AppContext';
import './PanelNotificaciones.css';

const PanelNotificaciones: React.FC = () => {
  const { notificaciones } = useAppContext();

  const getIcono = (tipo: string) => {
    switch (tipo) {
      case 'exito':
        return '✅';
      case 'error':
        return '❌';
      case 'advertencia':
        return '⚠️';
      case 'info':
        return 'ℹ️';
      default:
        return '📢';
    }
  };

  return (
    <div className="panel-notificaciones">
      <h3 className="panel-notificaciones__titulo">
        🔔 Notificaciones ({notificaciones.length})
      </h3>

      {notificaciones.length === 0 ? (
        <div className="panel-notificaciones__vacio">
          <p>No hay notificaciones</p>
        </div>
      ) : (
        <ul className="panel-notificaciones__lista">
          {notificaciones.map((notif) => (
            <li
              key={notif.id}
              className={`panel-notificaciones__item panel-notificaciones__item--${notif.tipo}`}
            >
              <span className="panel-notificaciones__icono">
                {getIcono(notif.tipo)}
              </span>
              <div className="panel-notificaciones__contenido">
                <div className="panel-notificaciones__titulo-notif">
                  {notif.titulo}
                </div>
                <div className="panel-notificaciones__mensaje">
                  {notif.mensaje}
                </div>
                <div className="panel-notificaciones__timestamp">
                  {new Date(notif.timestamp).toLocaleTimeString('es-CO')}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PanelNotificaciones;
