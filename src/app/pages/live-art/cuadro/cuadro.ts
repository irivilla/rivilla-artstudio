import { Component } from '@angular/core';
import { Breadcrumb } from '../../../shared/components/breadcrumb/breadcrumb';
import { CardBudget } from '../../../shared/components/card-budget/card-budget';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cuadro',
  imports: [ CardBudget, Breadcrumb, TranslateModule],
  templateUrl: './cuadro.html',
  styleUrl: './cuadro.scss'
})
export class Cuadro {



}
