import {Component, Input, inject} from '@angular/core';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-card-photo',
  imports: [],
  templateUrl: './card-photo.html',
  styleUrl: './card-photo.scss'
})
export class CardPhoto {
   @Input() title: string = '';

   @Input() imageSrc: string = '';

   @Input() route!: string;

   translate = inject(TranslateService);
  public selectedLang: string = 'es';

constructor(private router: Router) {}

  navigate() {
    this.router.navigate([this.route]);
  }
  
}
