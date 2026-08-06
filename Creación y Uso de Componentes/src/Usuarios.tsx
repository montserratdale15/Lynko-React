import React from 'react'; 

 

interface Usuario { 

  id: number; 

  nombre: string; 

  curso: string; 

  nivel: number; 

  exp: number; 

  expMax: number; 

} 

 

const usuarios: Usuario[] = [ 

  { id: 1, nombre: 'Rodrigo Pinto', curso: 'Matemáticas', nivel: 4, exp: 720, expMax: 1000 }, 

  { id: 2, nombre: 'Montserrat Serna', curso: 'Español', nivel: 6, exp: 1000, expMax: 600 }, 

  { id: 3, nombre: 'Maria Rojas', curso: 'Biología', nivel: 5, exp: 1450, expMax: 2000 }, 

  { id: 4, nombre: 'Camila Torres', curso: 'Matemáticas', nivel: 2, exp: 180, expMax: 400 }, 

]; 

 

const Usuarios: React.FC = () => { 

  return ( 

    <div className="lynko-usuarios"> 

      <h2>Usuarios</h2> 

      <div className="usuarios-grid"> 

        {usuarios.map((u) => { 

          const porcentajeExp = Math.round((u.exp / u.expMax) * 100); 

          return ( 

            <div key={u.id} className="usuario-card"> 

              <div className="usuario-card__top"> 

                <span className="usuario-avatar">{u.nombre.charAt(0)}</span> 

                <div> 

                  <div className="usuario-card__nombre">{u.nombre}</div> 

                  <div className="usuario-card__curso">{u.curso}</div> 

                </div> 

                <span className="usuario-nivel">Nivel {u.nivel}</span> 

              </div> 

              <div className="usuario-card__exp"> 

                <div className="usuario-card__exp-texto"> 

                  <span>EXP</span> 

                  <span>{u.exp} / {u.expMax}</span> 

                </div> 

                <div className="usuario-card__exp-barra"> 

                  <div className="usuario-card__exp-progreso" style={{ width: ${porcentajeExp}% }} /> 

                </div> 

              </div> 

            </div> 

          ); 

        })} 

      </div> 

    </div> 

  ); 

}; 

 

export default Usuarios; 
