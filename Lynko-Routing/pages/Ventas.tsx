import { Link } from "react-router-dom";

function Ventas() {
  const ventas = [
    { id: 501, fecha: "2026-08-01", total: 1200 },
    { id: 502, fecha: "2026-08-05", total: 800 },
  ];

  return (
    <div>
      <h1>Reporte de Ventas</h1>
      <ul>
        {ventas.map((v) => (
          <li key={v.id}>
            <Link to={`/ventas/${v.id}`}>
              Venta {v.id} - Fecha: {v.fecha}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Ventas;
