import { Component } from '@angular/core';
import { LanguageService } from '../../../shared/services/languageService/language-service';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-ilustracion',
  imports: [CommonModule, TranslateModule],
  templateUrl: './ilustracion.html',
  styleUrl: './ilustracion.scss'
})
export class Ilustracion {
constructor(private languageService: LanguageService) {}

get selectedLang(): string {
  return this.languageService.getCurrentLanguage();
}

}
