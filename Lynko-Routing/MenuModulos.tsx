import { Link } from "react-router-dom";

function MenuModulos() {
  return (
    <nav style={{ padding: "10px", background: "#e2e8f0", marginBottom: "20px" }}>
      <strong>Módulos Lynko: </strong>
      <Link to="/clientes">Clientes</Link> {" | "}
      <Link to="/productos">Productos</Link> {" | "}
      <Link to="/ventas">Ventas</Link> {" | "}
      <Link to="/proveedores">Proveedores</Link>
    </nav>
  );
}

export default MenuModulos;
