import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import {LanguageService} from '../../shared/services/languageService/language-service';

@Component({
  selector: 'app-encargos',
  imports: [CommonModule, TranslateModule],
  templateUrl: './encargos.html',
  styleUrl: './encargos.scss'
})
export class Encargos implements OnInit{

constructor(private languageService: LanguageService) {}


ngOnInit(): void {

  }
  
get selectedLang(): string {
  return this.languageService.getCurrentLanguage();
}


}
