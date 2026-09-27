import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {Subscription} from 'rxjs';
import {LanguageService} from '../../../shared/services/languageService/language-service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-politica-privacidad',
  imports: [CommonModule, TranslateModule],
  templateUrl: './politica-privacidad.html',
  styleUrl: './politica-privacidad.scss'
})
export class PoliticaPrivacidad {
    private langChangeSub!: Subscription;
   constructor(private languageService: LanguageService) {}
  
   get selectedLang(): string {
    return this.languageService.getCurrentLanguage();
  }

}
