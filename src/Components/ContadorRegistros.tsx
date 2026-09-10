import React from 'react';
import { useAppContext } from '../contexts/AppContext';
import './ContadorRegistros.css';

const ContadorRegistros: React.FC = () => {
  const { totalUsuarios, usuarios } = useAppContext();

  // Contar usuarios por curso
  const usuariosPorCurso = usuarios.reduce(
    (acc, usuario) => {
      const curso = usuario.curso;
      acc[curso] = (acc[curso] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  return (
    <div className="contador-registros">
      <div className="contador-registros__header">
        <h3>📊 Estadísticas de Registros</h3>
      </div>

      <div className="contador-registros__total">
        <div className="contador-registros__numero">{totalUsuarios}</div>
        <div className="contador-registros__label">Usuarios Registrados</div>
      </div>

      <div className="contador-registros__por-curso">
        <h4>Usuarios por Curso</h4>
        <ul className="contador-registros__lista">
          {Object.entries(usuariosPorCurso).map(([curso, cantidad]) => (
            <li key={curso} className="contador-registros__item">
              <span className="contador-registros__curso-nombre">{curso}</span>
              <span className="contador-registros__cantidad">{cantidad}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="contador-registros__ultimos">
        <h4>Últimos Registros</h4>
        <ul className="contador-registros__usuarios-recientes">
          {usuarios.slice(0, 3).map((usuario) => (
            <li key={usuario.id} className="contador-registros__usuario-item">
              <span className="contador-registros__usuario-nombre">
                {usuario.nombre}
              </span>
              <span className="contador-registros__usuario-fecha">
                {new Date(usuario.fechaRegistro).toLocaleDateString('es-CO')}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContadorRegistros;
