import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchNotificaciones } from "../redux/notificacionesSlice";

function Notificaciones() {
  const dispatch = useAppDispatch();
  const { items, loading, error, ultimaActualizacion, panelAbierto } = useAppSelector(
    (state) => state.notificaciones
  );

  useEffect(() => {
    dispatch(fetchNotificaciones());
    const intervalo = setInterval(() => {
      dispatch(fetchNotificaciones());
    }, 30000);
    return () => clearInterval(intervalo);
  }, [dispatch]);

  if (!panelAbierto) return null; // solo se muestra al abrirlo desde el Sidebar

  return (
    <div className="notificaciones-panel">
      <h3>🔔 Notificaciones</h3>
      {loading && <p>Cargando...</p>}
      {error && <p className="notificaciones-error">{error}</p>}
      {!loading && !error && (
        <ul>
          {items.map((n) => (
            <li key={n.id}>
              <strong>{n.title}</strong>
              <p>{n.body}</p>
            </li>
          ))}
        </ul>
      )}
      {ultimaActualizacion && (
        <p className="notificaciones-hora">Última actualización: {ultimaActualizacion}</p>
      )}
    </div>
  );
}

export default Notificaciones;