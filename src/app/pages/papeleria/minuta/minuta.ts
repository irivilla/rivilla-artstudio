import { Component } from '@angular/core';
import { FormPresupuesto } from '../../../shared/components/form-presupuesto/form-presupuesto';
import { Breadcrumb } from '../../../shared/components/breadcrumb/breadcrumb';



@Component({
  selector: 'app-minuta',
  imports: [FormPresupuesto, Breadcrumb],
  templateUrl: './minuta.html',
  styleUrl: './minuta.scss'
})
export class Minuta {

}
