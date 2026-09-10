import React, { createContext, useContext, useState, useEffect } from 'react';

// Tipos de datos
interface Usuario {
  id: number;
  nombre: string;
  email: string;
  curso: string;
  fechaRegistro: string;
}

interface Notificacion {
  id: number;
  titulo: string;
  mensaje: string;
  tipo: 'exito' | 'error' | 'info' | 'advertencia';
  timestamp: string;
}

interface AppContextType {
  // Estado de usuarios
  usuarios: Usuario[];
  totalUsuarios: number;
  
  // Estado de notificaciones
  notificaciones: Notificacion[];
  agregarNotificacion: (titulo: string, mensaje: string, tipo: 'exito' | 'error' | 'info' | 'advertencia') => void;
  
  // Loading
  loading: boolean;
}

// Crear el contexto
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider component
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Estado de usuarios (simulando BD)
  const [usuarios, setUsuarios] = useState<Usuario[]>([
    {
      id: 1,
      nombre: 'Rodrigo Pinto',
      email: 'rodrigo@lynko.com',
      curso: 'Matemáticas',
      fechaRegistro: '2024-01-15',
    },
    {
      id: 2,
      nombre: 'Montserrat Serna',
      email: 'montserrat@lynko.com',
      curso: 'Español',
      fechaRegistro: '2024-02-20',
    },
    {
      id: 3,
      nombre: 'Maria Rojas',
      email: 'maria@lynko.com',
      curso: 'Biología',
      fechaRegistro: '2024-03-10',
    },
    {
      id: 4,
      nombre: 'Camila Torres',
      email: 'camila@lynko.com',
      curso: 'Matemáticas',
      fechaRegistro: '2024-04-05',
    },
  ]);

  const [notificaciones, setNotificaciones] = useState<Notificacion[]>([
    {
      id: 1,
      titulo: 'Bienvenido',
      mensaje: 'Sistema de notificaciones global iniciado',
      tipo: 'exito',
      timestamp: new Date().toISOString(),
    },
  ]);

  const [loading, setLoading] = useState(false);

  // Función para agregar notificaciones
  const agregarNotificacion = (
    titulo: string,
    mensaje: string,
    tipo: 'exito' | 'error' | 'info' | 'advertencia'
  ) => {
    const nuevaNotificacion: Notificacion = {
      id: Date.now(),
      titulo,
      mensaje,
      tipo,
      timestamp: new Date().toISOString(),
    };

    setNotificaciones((prev) => [nuevaNotificacion, ...prev]);

    // Auto-eliminar notificación después de 5 segundos
    setTimeout(() => {
      setNotificaciones((prev) =>
        prev.filter((n) => n.id !== nuevaNotificacion.id)
      );
    }, 5000);
  };

  // Simular carga de datos (aquí irían las llamadas a Supabase)
  useEffect(() => {
    setLoading(true);
    // Simular delay de red
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const value: AppContextType = {
    usuarios,
    totalUsuarios: usuarios.length,
    notificaciones,
    agregarNotificacion,
    loading,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext debe usarse dentro de AppProvider');
  }
  return context;
};
