import { Link } from "react-router-dom";

function Proveedores() {
  const proveedores = [
    { id: 201, nombre: "Suministros Colombia" },
    { id: 202, nombre: "Distribuidora Internacional" },
  ];

  return (
    <div>
      <h1>Listado de Proveedores</h1>
      <ul>
        {proveedores.map((pr) => (
          <li key={pr.id}>
            <Link to={`/proveedores/${pr.id}`}>
              {pr.id} - {pr.nombre}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Proveedores;
