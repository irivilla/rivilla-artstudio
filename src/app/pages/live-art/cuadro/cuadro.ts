import { Component } from '@angular/core';
import { FormPresupuesto } from '../../../shared/components/form-presupuesto/form-presupuesto';
import { Breadcrumb } from '../../../shared/components/breadcrumb/breadcrumb';

@Component({
  selector: 'app-cuadro',
  imports: [ FormPresupuesto, Breadcrumb],
  templateUrl: './cuadro.html',
  styleUrl: './cuadro.scss'
})
export class Cuadro {



}
