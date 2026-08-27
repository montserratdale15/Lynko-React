import { useParams } from "react-router-dom";

function DetalleVenta() {
  const { id } = useParams();
  return (
    <div>
      <h1>Detalle de Factura / Venta</h1>
      <p>Información de la transacción con ID: <strong>{id}</strong></p>
    </div>
  );
}
export default DetalleVenta;
