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
  //titulo que viene de donde se llama 
   @Input() title: string = '';

   //foto que queremos que tenga, que tambien se manda
   @Input() imageSrc: string = '';

   //para la ruta que se le pasa, al pulsar vaya a la página
  @Input() route!: string;

   translate = inject(TranslateService);
  public selectedLang: string = 'es';

constructor(private router: Router) {}

  navigate() {
    this.router.navigate([this.route]);
  }
  
}
