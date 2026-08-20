import React, { useState, type ChangeEvent, type FormEvent } from 'react';
import CardAccion from './CardAccion';

const Login: React.FC = () => {
  const [correo, setCorreo] = useState<string>('');
  const [contrasena, setContrasena] = useState<string>('');
  const [mostrarContrasena, setMostrarContrasena] = useState<boolean>(false);
  const [cargando, setCargando] = useState<boolean>(false);

  const manejarAccionPassword = () => {
    setMostrarContrasena((prev) => !prev);
    console.log(`Acción: Alternar visibilidad de contraseña -> Módulo: Login`);
  };

  const manejarSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCargando(true);

    setTimeout(() => {
      setCargando(false);
      alert(`Datos ingresados:\nCorreo: ${correo}`);
      console.log(`Acción: Enviar formulario -> Módulo: Login -> Correo: ${correo}`);
    }, 1500);
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

        <button type="submit" className="btn-auth" disabled={cargando}>
          {cargando ? 'Verificando...' : 'Ingresar'}
        </button>
      </form>

      <div className="auth-footer">
        ¿Eres nuevo por aquí? <a href="#">Regístrate gratis</a>
      </div>
    </div>
  );
};

export default Login;