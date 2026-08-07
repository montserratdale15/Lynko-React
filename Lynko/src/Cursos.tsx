import React from 'react';
import CardAccion from './CardAccion';

interface Curso {
  id: number;
  nombre: string;
  icono: string;
  lecciones: number;
  progreso: number;
  color: string;
}

const cursos: Curso[] = [
  { id: 1, nombre: 'Matemáticas', icono: '➗', lecciones: 24, progreso: 65, color: '#FF7A00' },
  { id: 2, nombre: 'Español', icono: '📖', lecciones: 18, progreso: 40, color: '#E85D04' },
  { id: 3, nombre: 'Biología', icono: '🧬', lecciones: 20, progreso: 85, color: '#FFA552' },
];

const Cursos: React.FC = () => {
  // Acción en el padre: recibe la señal del hijo y avisa qué pasó y en qué módulo
  const manejarAccionCurso = (nombreCurso: string) => {
    console.log(`Acción: Continuar curso -> Módulo: Cursos -> Curso: ${nombreCurso}`);
    alert(`Continuando el curso "${nombreCurso}" (Módulo: Cursos)`);
  };

  return (
    <div className="lynko-cursos">
      <h2>Mis Cursos</h2>
      <div className="lynko-cursos__grid">
        {cursos.map((curso) => (
          <div
            key={curso.id}
            className="curso-card"
            style={{ '--curso-color': curso.color } as React.CSSProperties}
          >
            <div className="curso-card__icono">{curso.icono}</div>
            <div className="curso-card__nombre">{curso.nombre}</div>
            <div className="curso-card__lecciones">{curso.lecciones} lecciones</div>
            <div className="curso-card__barra">
              <div className="curso-card__progreso" style={{ width: `${curso.progreso}%` }} />
            </div>
            <div className="curso-card__porcentaje">{curso.progreso}% completado</div>

            {/* Padre -> Hijo: le mandamos título y texto del botón */}
            <CardAccion
              titulo={curso.nombre}
              textoBoton="Continuar"
              onAccion={manejarAccionCurso}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cursos;
