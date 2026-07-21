import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Presupuesto } from '../../models/presupuesto.model';


@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  private http = inject(HttpClient);

  enviar(datos: Presupuesto) {
    return this.http.post('/api/presupuesto', datos);
}
  
}
