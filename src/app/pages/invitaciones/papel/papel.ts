import { Component } from '@angular/core';
import { FormPresupuesto } from '../../../shared/components/form-presupuesto/form-presupuesto';
import { Breadcrumb } from '../../../shared/components/breadcrumb/breadcrumb';


@Component({
  selector: 'app-papel',
  imports: [FormPresupuesto, Breadcrumb],
  templateUrl: './papel.html',
  styleUrl: './papel.scss'
})
export class Papel {

}
