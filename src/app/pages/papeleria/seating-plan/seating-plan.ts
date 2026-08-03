import { Component } from '@angular/core';
import { FormPresupuesto } from '../../../shared/components/form-presupuesto/form-presupuesto';
import { Breadcrumb } from '../../../shared/components/breadcrumb/breadcrumb';


@Component({
  selector: 'app-seating-plan',
  imports: [Breadcrumb, FormPresupuesto],
  templateUrl: './seating-plan.html',
  styleUrl: './seating-plan.scss'
})
export class SeatingPlan {

}
