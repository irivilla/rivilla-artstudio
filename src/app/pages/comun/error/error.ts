import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Button } from '../../../shared/components/button/button';
import {Router} from '@angular/router';
import {LanguageService} from '../../../shared/services/languageService/language-service';


@Component({
  selector: 'app-error',
  imports: [CommonModule, TranslateModule, Button],
  templateUrl: './error.html',
  styleUrl: './error.scss'
})
export class Error {

  constructor(private router: Router, 
      private languageService: LanguageService) {}

  navigateToContact(): void {
    this.router.navigate(['/contact']);
  }

  get selectedLang(): string {
  return this.languageService.getCurrentLanguage();
}
    
  

}
