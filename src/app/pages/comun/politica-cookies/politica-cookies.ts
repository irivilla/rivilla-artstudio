import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {Subscription} from 'rxjs';
import {LanguageService} from '../../../shared/services/languageService/language-service';

@Component({
  selector: 'app-politica-cookies',
  imports: [CommonModule, TranslateModule],
  templateUrl: './politica-cookies.html',
  styleUrl: './politica-cookies.scss'
})
export class PoliticaCookies {

  private langChangeSub!: Subscription;
 constructor(private languageService: LanguageService) {}

 get selectedLang(): string {
  return this.languageService.getCurrentLanguage();
}

}
