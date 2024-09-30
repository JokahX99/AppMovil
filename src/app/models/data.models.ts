import { Usuario } from "./bd.models"; // Importar la interface de usuario

// bd.models.ts
export const usuariosSimulados: Usuario[] = [
  {
    id: 1,
    nombreCompleto: 'Admin User',
    usuario: 'admin',
    clave: 'admin',
    telefono: '1234567890'
  },
  {
    id: 2,
    nombreCompleto: 'Student User',
    usuario: 'David',
    clave: '1415',
    telefono: '1234567890'
  }
];
