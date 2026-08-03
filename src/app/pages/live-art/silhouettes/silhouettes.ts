import { Component } from '@angular/core';
import { FormPresupuesto } from '../../../shared/components/form-presupuesto/form-presupuesto';
import { Breadcrumb } from '../../../shared/components/breadcrumb/breadcrumb';

@Component({
  selector: 'app-silhouettes',
  imports: [FormPresupuesto, Breadcrumb],
  templateUrl: './silhouettes.html',
  styleUrl: './silhouettes.scss'
})
export class Silhouettes {

}
