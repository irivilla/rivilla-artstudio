import { Servicio } from './servicio.model';

export interface Presupuesto {
  nombre: string;
  email: string;
  telefono: string;
  servicio: Servicio;
  fecha: Date;
  lugar: string;
  mensaje: string;
  numeroInvitados?: number;
}