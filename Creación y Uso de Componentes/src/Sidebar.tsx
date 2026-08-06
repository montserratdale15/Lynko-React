import React from 'react'; 

 

interface SidebarProps { 

  pagina: string; 

  setPagina: (pagina: string) => void; 

} 

 

const Sidebar: React.FC<SidebarProps> = ({ pagina, setPagina }) => { 

  const opciones = [ 

    { id: 'cursos', icono: '📚', texto: 'Cursos' }, 

    { id: 'usuarios', icono: '👥', texto: 'Usuarios' }, 

    { id: 'reto', icono: '🏆', texto: 'Reto Semanal' }, 

    { id: 'perfil', icono: '👤', texto: 'Perfil' }, 

    { id: 'config', icono: '⚙️', texto: 'Configuración' }, 

  ]; 

 

  return ( 

    <aside className="lynko-sidebar"> 

      {opciones.map((op) => ( 

        <button 

          key={op.id} 

          onClick={() => setPagina(op.id)} 

          className={lynko-sidebar__item ${pagina === op.id ? 'lynko-sidebar__item--activo' : ''}} 

        > 

          <span>{op.icono}</span> 

          <span>{op.texto}</span> 

        </button> 

      ))} 

    </aside> 

  ); 

}; 

 

export default Sidebar;
