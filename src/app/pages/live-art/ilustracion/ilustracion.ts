import { Component } from '@angular/core';
import { LanguageService } from '../../../shared/services/languageService/language-service';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import { CardService } from "../../../shared/components/card-service/card-service";
import { ReactiveFormsModule } from '@angular/forms';
import { FormPresupuesto } from '../../../shared/components/form-presupuesto/form-presupuesto';
import { Breadcrumb } from '../../../shared/components/breadcrumb/breadcrumb';
@Component({
  selector: 'app-ilustracion',
  imports: [CommonModule, TranslateModule, CardService, FormPresupuesto,Breadcrumb],
  templateUrl: './ilustracion.html',
  styleUrl: './ilustracion.scss'
})
export class Ilustracion {
constructor(private languageService: LanguageService) {}



get selectedLang(): string {
  return this.languageService.getCurrentLanguage();
}



}
