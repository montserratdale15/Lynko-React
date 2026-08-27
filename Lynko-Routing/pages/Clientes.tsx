import { Link } from "react-router-dom";

function Clientes() {
  const clientes = [
    { id: 1, nombre: "Carlos Perez", correo: "Carlos@mail.com" },
    { id: 2, nombre: "Laura Salazar", correo: "laura@mail.com" },
    { id: 3, nombre: "Andrés Ruiz", correo: "andres@mail.com" },
  ];

  return (
    <div>
      <h1>Listado de Clientes</h1>
      <ul>
        {clientes.map((c) => (
          <li key={c.id}>
            <Link to={`/clientes/${c.id}`}>
              {c.id} - {c.nombre}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Clientes;
