import React from 'react';

interface CardAccionProps {
  titulo: string;
  descripcion?: string;
  textoBoton: string;
  onAccion: (mensaje: string) => void;
}

const CardAccion: React.FC<CardAccionProps> = ({ titulo, descripcion, textoBoton, onAccion }) => {
  const manejarClick = () => {
    // Hijo -> Padre: le mandamos info al padre a través de la función que nos pasó
    onAccion(titulo);
  };

  return (
    <div className="card-accion">
      <div className="card-accion__texto">
        <h4 className="card-accion__titulo">{titulo}</h4>
        {descripcion && <p className="card-accion__descripcion">{descripcion}</p>}
      </div>
      <button className="card-accion__boton" onClick={manejarClick}>
        {textoBoton}
      </button>
    </div>
  );
};

export default CardAccion;
