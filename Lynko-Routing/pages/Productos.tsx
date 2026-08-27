import { Link } from "react-router-dom";

function Productos() {
  const productos = [
    { id: 101, nombre: "Laptop", precio: 1200 },
    { id: 102, nombre: "Teléfono", precio: 800 },
    { id: 103, nombre: "Tablet", precio: 450 },
  ];

  return (
    <div>
      <h1>Listado de Productos</h1>
      <ul>
        {productos.map((p) => (
          <li key={p.id}>
            <Link to={`/productos/${p.id}`}>
              {p.id} - {p.nombre}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Productos;
