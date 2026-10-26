import { Component } from '@angular/core';
import { FormPresupuesto } from '../../../shared/components/form-presupuesto/form-presupuesto';
import { Breadcrumb } from '../../../shared/components/breadcrumb/breadcrumb';
import { CardBudget } from '../../../shared/components/card-budget/card-budget';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-silhouettes',
  imports: [FormPresupuesto, Breadcrumb, CardBudget, TranslateModule],
  templateUrl: './silhouettes.html',
  styleUrl: './silhouettes.scss'
})
export class Silhouettes {

}
