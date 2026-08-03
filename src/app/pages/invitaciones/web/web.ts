import { Component } from '@angular/core';
import { FormPresupuesto } from '../../../shared/components/form-presupuesto/form-presupuesto';
import { Breadcrumb } from '../../../shared/components/breadcrumb/breadcrumb';


@Component({
  selector: 'app-web',
  imports: [FormPresupuesto, Breadcrumb],
  templateUrl: './web.html',
  styleUrl: './web.scss'
})
export class Web {

}
