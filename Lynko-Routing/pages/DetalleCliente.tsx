import { useParams } from "react-router-dom";

function DetalleCliente() {
  const { id } = useParams();
  return (
    <div>
      <h1>Detalle del Cliente</h1>
      <p>Mostrando la información detallada para el cliente con ID: <strong>{id}</strong></p>
    </div>
  );
}
export default DetalleCliente;
