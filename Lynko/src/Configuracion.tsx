import React, { useState } from 'react';
import CardAccion from './CardAccion';

const Configuracion: React.FC = () => {
  const [musica, setMusica] = useState(true);
  const [sonidos, setSonidos] = useState(true);
  const [notificaciones, setNotificaciones] = useState(false);

  const manejarAccionGuardar = () => {
    console.log(
      `Acción: Guardar cambios -> Módulo: Configuración -> Música: ${musica}, Sonidos: ${sonidos}, Notificaciones: ${notificaciones}`
    );
    alert('Cambios guardados en Configuración ⚙️');
  };

  return (
    <div className="lynko-config">
      <h2>Configuración ⚙️</h2>
      <p className="lynko-config__subtitulo">Adapta tu espacio de estudio como más te guste.</p>

      <section className="settings-container">
        <div className="settings-row">
          <div>
            <h3>Música de fondo</h3>
            <p>Melodías tranquilas para concentrarse.</p>
          </div>
          <button
            className={`toggle-control ${musica ? 'toggle-control--activo' : ''}`}
            onClick={() => setMusica(!musica)}
          />
        </div>

        <div className="settings-row">
          <div>
            <h3>Efectos de sonido</h3>
            <p>Sonidos divertidos al ganar estrellas.</p>
          </div>
          <button
            className={`toggle-control ${sonidos ? 'toggle-control--activo' : ''}`}
            onClick={() => setSonidos(!sonidos)}
          />
        </div>

        <div className="settings-row">
          <div>
            <h3>Notificaciones en Pantalla</h3>
            <p>Avisos de nuevas misiones y retos.</p>
          </div>
          <button
            className={`toggle-control ${notificaciones ? 'toggle-control--activo' : ''}`}
            onClick={() => setNotificaciones(!notificaciones)}
          />
        </div>

        <CardAccion
          titulo="Guardar configuración"
          descripcion="Aplica los cambios que hiciste arriba."
          textoBoton="Guardar Cambios"
          onAccion={manejarAccionGuardar}
        />
      </section>
    </div>
  );
};

export default Configuracion;
