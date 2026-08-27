import { useParams } from "react-router-dom";

function DetalleProducto() {
  const { id } = useParams();
  return (
    <div>
      <h1>Detalle del Producto</h1>
      <p>Consultando especificaciones del producto ID: <strong>{id}</strong></p>
    </div>
  );
}
export default DetalleProducto;
