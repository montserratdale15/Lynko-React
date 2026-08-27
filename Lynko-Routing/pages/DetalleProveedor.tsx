import { useParams } from "react-router-dom";

function DetalleProveedor() {
  const { id } = useParams();
  return (
    <div>
      <h1>Detalle del Proveedor</h1>
      <p>Datos del socio comercial con ID: <strong>{id}</strong></p>
    </div>
  );
}
export default DetalleProveedor;
