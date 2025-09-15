import {Component, Input, inject} from '@angular/core';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-card-service',
  imports: [],
  templateUrl: './card-service.html',
  styleUrl: './card-service.scss'
})
export class CardService {

  @Input() title: string = '';

  @Input() subtitle: string = '';

   @Input() imageSrc: string = '';

   @Input() route!: string;

    translate = inject(TranslateService);
  public selectedLang: string = 'es';

constructor(private router: Router) {}

  navigate() {
    this.router.navigate([this.route]);
  }

}
