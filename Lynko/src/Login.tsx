import React, { useState } from 'react';
import CardAccion from './CardAccion';

const Login: React.FC = () => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mostrarContrasena, setMostrarContrasena] = useState(false);

  // Acción en el padre por el clic del hijo (CardAccion = botón mostrar/ocultar)
  const manejarAccionPassword = () => {
    setMostrarContrasena((prev) => !prev);
    console.log(`Acción: Alternar visibilidad de contraseña -> Módulo: Login`);
  };

  const manejarSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Datos ingresados:\nCorreo: ${correo}\nContraseña: ${contrasena}`);
    console.log(`Acción: Enviar formulario -> Módulo: Login -> Correo: ${correo}`);
  };

  return (
    <div className="auth-container">
      <div className="auth-logo">🔒</div>
      <h1>¡Hola otra vez!</h1>
      <p>Ingresa tus datos para continuar aprendiendo</p>

      <form onSubmit={manejarSubmit}>
        <div className="form-group">
          <label>Correo electrónico</label>
          <input
            type="email"
            placeholder="ejemplo@correo.com"
            required
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Contraseña</label>
          <div className="password-wrapper">
            <input
              type={mostrarContrasena ? 'text' : 'password'}
              placeholder="Mínimo 8 caracteres"
              required
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />
          </div>

          {/* Padre -> Hijo: le pasamos el texto del botón según el estado */}
          <CardAccion
            titulo="Contraseña"
            descripcion={mostrarContrasena ? 'Contraseña visible' : 'Contraseña oculta'}
            textoBoton={mostrarContrasena ? '🙈 Ocultar' : '🙉 Mostrar'}
            onAccion={manejarAccionPassword}
          />
        </div>

        <button type="submit" className="btn-auth">Ingresar</button>
      </form>

      <div className="auth-footer">
        ¿Eres nuevo por aquí? <a href="#">Regístrate gratis</a>
      </div>
    </div>
  );
};

export default Login;
