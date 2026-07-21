import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  private http = inject(HttpClient);

  enviar(datos: any) {
    return this.http.post('/api/presupuesto', datos);
  }

}