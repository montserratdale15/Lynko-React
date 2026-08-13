import React, { useState, type ChangeEvent, type FormEvent } from 'react';
import CardAccion from './CardAccion';

const Registro: React.FC = () => {
  const [nombre, setNombre] = useState<string>('');
  const [correo, setCorreo] = useState<string>('');
  const [contrasena, setContrasena] = useState<string>('');
  const [mostrarContrasena, setMostrarContrasena] = useState<boolean>(false);
  const [errorValidacion, setErrorValidacion] = useState<string>('');

  const manejarAccionPassword = () => {
    setMostrarContrasena((prev) => !prev);
    console.log(`Acción: Alternar visibilidad de contraseña -> Módulo: Registro`);
  };

  const manejarSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nombre.trim().length < 3) {
      setErrorValidacion('El nombre debe tener al menos 3 caracteres.');
      return;
    }
    setErrorValidacion('');
    alert(`Cuenta creada con:\nNombre: ${nombre}\nCorreo: ${correo}`);
    console.log(`Acción: Enviar formulario -> Módulo: Registro -> Nombre: ${nombre}`);
  };

  return (
    <div className="auth-container">
      <div className="auth-logo">📝</div>
      <h1>¡Únete a Lynko!</h1>
      <p>Crea tu cuenta gratis y empieza la aventura</p>

      <form onSubmit={manejarSubmit}>
        <div className="form-group">
          <label>Tu Nombre</label>
          <input
            type="text"
            placeholder="¿Cómo te llamas?"
            required
            value={nombre}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setNombre(e.target.value)}
          />
          {errorValidacion && <small style={{ color: 'red' }}>{errorValidacion}</small>}
        </div>

        <div className="form-group">
          <label>Correo electrónico</label>
          <input
            type="email"
            placeholder="ejemplo@correo.com"
            required
            value={correo}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setCorreo(e.target.value)}
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
              onChange={(e: ChangeEvent<HTMLInputElement>) => setContrasena(e.target.value)}
            />
          </div>

          <CardAccion
            titulo="Contraseña"
            descripcion={mostrarContrasena ? 'Contraseña visible' : 'Contraseña oculta'}
            textoBoton={mostrarContrasena ? '🙈 Ocultar' : '🙉 Mostrar'}
            onAccion={manejarAccionPassword}
          />
        </div>

        <button type="submit" className="btn-auth">Registrarse</button>
      </form>

      <div className="auth-footer">
        ¿Ya tienes una cuenta? <a href="#">Inicia sesión</a>
      </div>
    </div>
  );
};

export default Registro;