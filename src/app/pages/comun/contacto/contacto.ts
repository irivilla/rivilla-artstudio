import { Component } from '@angular/core';
import { FormPresupuesto } from '../../../shared/components/form-presupuesto/form-presupuesto';
import { Breadcrumb } from '../../../shared/components/breadcrumb/breadcrumb';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contacto',
  imports: [FormPresupuesto, Breadcrumb, TranslateModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss'
})
export class Contacto {

}
