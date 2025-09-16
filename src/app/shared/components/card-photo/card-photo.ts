import {Component, Input, inject} from '@angular/core';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {LanguageService} from '../../services/languageService/language-service';

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


constructor(private router: Router, private languageService: LanguageService) {}
get selectedLang(): string {
  return this.languageService.getCurrentLanguage();
}

  navigate() {
    this.router.navigate([this.route]);
  }
  
}
