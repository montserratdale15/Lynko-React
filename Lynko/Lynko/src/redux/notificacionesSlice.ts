import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Notificacion {
  id: number;
  title: string;
  body: string;
}

interface NotificacionesState {
  items: Notificacion[];
  loading: boolean;
  error: string | null;
  ultimaActualizacion: string | null;
  noLeidas: number;
  panelAbierto: boolean;
}

const initialState: NotificacionesState = {
  items: [],
  loading: false,
  error: null,
  ultimaActualizacion: null,
  noLeidas: 0,
  panelAbierto: false,
};

export const fetchNotificaciones = createAsyncThunk(
  "notificaciones/fetch",
  async () => {
    const response = await axios.get<Notificacion[]>(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    return response.data;
  }
);

const notificacionesSlice = createSlice({
  name: "notificaciones",
  initialState,
  reducers: {
    togglePanel: (state) => {
      state.panelAbierto = !state.panelAbierto;
      if (state.panelAbierto) {
        state.noLeidas = 0; // al abrir el panel, se marcan como leídas
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotificaciones.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNotificaciones.fulfilled, (state, action) => {
        const huboNuevas = state.items.length > 0; // evita contar la carga inicial como "nuevas"
        state.loading = false;
        state.items = action.payload;
        state.ultimaActualizacion = new Date().toLocaleTimeString();
        if (huboNuevas && !state.panelAbierto) {
          state.noLeidas = action.payload.length;
        }
      })
      .addCase(fetchNotificaciones.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Error al obtener notificaciones";
      });
  },
});

export const { togglePanel } = notificacionesSlice.actions;
export default notificacionesSlice.reducer;