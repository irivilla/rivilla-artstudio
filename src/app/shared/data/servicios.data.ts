//listado de servicios que se ofrecen en la web, para poder mostrarlos en el formulario de contacto y en la sección de servicios
import { Servicio } from '../models/servicio.model';


//IMPORTANTE!!
// o numero de copias o numero de invitados 
export const SERVICIOS: Servicio[] = [
  { id: 1, nombre: 'LISTADO-SERVICIOS.ILLUSTRATIONS', 
    requiereLugar: true,
    requiereNumeroInvitados: true, 
    requiereNumeroCopias: false },
  { id: 2, nombre: 'LISTADO-SERVICIOS.PAINTING',
    requiereLugar: true,
     requiereNumeroInvitados: false, 
     requiereNumeroCopias: false },
  { id: 3, nombre: 'LISTADO-SERVICIOS.SILHOUETTES', 
    requiereLugar: true,
    requiereNumeroInvitados: true,
    requiereNumeroCopias: false },
  { id: 4, nombre: 'LISTADO-SERVICIOS.INVITATIONS', 
    requiereLugar: false,
    requiereNumeroInvitados: false, 
    requiereNumeroCopias: true },
  { id: 5, nombre: 'LISTADO-SERVICIOS.DIGITAL', 
    requiereLugar: false,
    requiereNumeroInvitados: false, 
    requiereNumeroCopias: false },
  { id: 6, nombre: 'LISTADO-SERVICIOS.OTHER', 
    requiereLugar: false,
    requiereNumeroInvitados: false, 
    requiereNumeroCopias: false }
];