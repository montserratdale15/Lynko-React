import { Routes, Route } from "react-router-dom";
import MenuPrincipal from "./components/MenuPrincipal";
import MenuModulos from "./components/MenuModulos";

// Páginas Principales
import Inicio from "./pages/Inicio";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";

// Páginas de Módulos (Tablas)
import Clientes from "./pages/Clientes";
import DetalleCliente from "./pages/DetalleCliente";
import Productos from "./pages/Productos";
import DetalleProducto from "./pages/DetalleProducto";
import Ventas from "./pages/Ventas";
import DetalleVenta from "./pages/DetalleVenta";
import Proveedores from "./pages/Proveedores";
import DetalleProveedor from "./pages/DetalleProveedor";

function App() {
  return (
    <div>
      {/* Se incluyen ambos menús para una navegación completa */}
      <MenuPrincipal />
      <MenuModulos />

      <hr />

      <Routes>
        {/* Rutas Principales */}
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />

        {/* Rutas de las Tablas / Entidades */}
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/clientes/:id" element={<DetalleCliente />} />

        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<DetalleProducto />} />

        <Route path="/ventas" element={<Ventas />} />
        <Route path="/ventas/:id" element={<DetalleVenta />} />

        <Route path="/proveedores" element={<Proveedores />} />
        <Route path="/proveedores/:id" element={<DetalleProveedor />} />
      </Routes>
    </div>
  );
}

export default App;
