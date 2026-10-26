import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-accordion',
  imports:  [AccordionModule, TranslateModule],
  templateUrl: './accordion.html',
  styleUrl: './accordion.scss'
})
export class Accordion {

}
