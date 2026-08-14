import React, { useState } from 'react';
import CardAccion from './CardAccion';

interface Curso {
  id: number;
  nombre: string;
  icono: string;
  lecciones: number;
  progreso: number; // Porcentaje de avance
  color: string;
}

// Las 3 materias originales de Lynko
const cursos: Curso[] = [
  { id: 1, nombre: 'Matemáticas', icono: '➗', lecciones: 24, progreso: 65, color: '#FF7A00' },
  { id: 2, nombre: 'Español', icono: '📖', lecciones: 18, progreso: 40, color: '#E85D04' },
  { id: 3, nombre: 'Biología', icono: '🧬', lecciones: 20, progreso: 85, color: '#FFA552' },
];

const Cursos: React.FC = () => {
  // Estado para controlar el filtro activo
  const [filtroEstado, setFiltroEstado] = useState<string>('todos');

  const manejarAccionCurso = (nombreCurso: string) => {
    console.log(`Acción: Continuar curso -> Módulo: Cursos -> Curso: ${nombreCurso}`);
    alert(`Continuando el curso "${nombreCurso}" (Módulo: Cursos)`);
  };

  // Lógica de filtrado basada en el estado
  const cursosFiltrados = cursos.filter((c) => {
    if (filtroEstado === 'completados') return c.progreso === 100;
    if (filtroEstado === 'en-progreso') return c.progreso > 0 && c.progreso < 100;
    if (filtroEstado === 'sin-empezar') return c.progreso === 0;
    return true; // 'todos'
  });

  return (
    <div className="lynko-cursos">
      <h2>Mis Cursos</h2>

      {/* Botones de filtro con diseño estilizado acorde a App.css */}
      <div style={{ display: 'flex', gap: '10px', margin: '20px 0', flexWrap: 'wrap' }}>
        {[
          { id: 'todos', label: 'Todos' },
          { id: 'en-progreso', label: 'En progreso' },
          { id: 'completados', label: 'Completados' },
          { id: 'sin-empezar', label: 'Sin empezar' },
        ].map((boton) => {
          const activo = filtroEstado === boton.id;
          return (
            <button
              key={boton.id}
              onClick={() => setFiltroEstado(boton.id)}
              style={{
                padding: '0.5rem 1.2rem',
                borderRadius: '20px',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                border: activo ? 'none' : '1px solid var(--lynko-naranja-claro)',
                backgroundColor: activo ? 'var(--lynko-naranja)' : 'white',
                color: activo ? 'white' : 'var(--lynko-texto)',
                boxShadow: activo ? '0 4px 12px rgba(255, 122, 0, 0.2)' : 'none',
                transition: 'all 0.2s ease',
              }}
            >
              {boton.label}
            </button>
          );
        })}
      </div>

      <div className="lynko-cursos__grid">
        {cursosFiltrados.length > 0 ? (
          cursosFiltrados.map((curso) => (
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

              <CardAccion
                titulo={curso.nombre}
                textoBoton="Continuar"
                onAccion={manejarAccionCurso}
              />
            </div>
          ))
        ) : (
          <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: 'var(--lynko-gris)', padding: '2rem' }}>
            No hay cursos en esta categoría.
          </p>
        )}
      </div>
    </div>
  );
};

export default Cursos;