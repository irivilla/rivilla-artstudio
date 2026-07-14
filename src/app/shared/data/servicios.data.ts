//listado de servicios que se ofrecen en la web, para poder mostrarlos en el formulario de contacto y en la sección de servicios
import { Servicio } from '../models/servicio.model';

export const SERVICIOS: Servicio[] = [
  { id: 1, nombre: 'LISTADO-SERVICIOS.ILLUSTRATIONS', requiereNumeroInvitados: true },
  { id: 2, nombre: 'LISTADO-SERVICIOS.PAINTING', requiereNumeroInvitados: false },
  { id: 3, nombre: 'LISTADO-SERVICIOS.SILHOUETTES', requiereNumeroInvitados: true },
  { id: 4, nombre: 'LISTADO-SERVICIOS.INVITATIONS', requiereNumeroInvitados: false },
  { id: 5, nombre: 'LISTADO-SERVICIOS.DIGITAL', requiereNumeroInvitados: false },
  { id: 6, nombre: 'LISTADO-SERVICIOS.OTHER', requiereNumeroInvitados: false }
];