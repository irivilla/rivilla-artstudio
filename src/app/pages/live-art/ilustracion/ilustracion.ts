import { Component } from '@angular/core';
import { LanguageService } from '../../../shared/services/languageService/language-service';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import { CardService } from "../../../shared/components/card-service/card-service";
import { ReactiveFormsModule } from '@angular/forms';
import { FormService } from '../../../shared/components/form-service/form-service';

@Component({
  selector: 'app-ilustracion',
  imports: [CommonModule, TranslateModule, CardService, FormService],
  templateUrl: './ilustracion.html',
  styleUrl: './ilustracion.scss'
})
export class Ilustracion {
constructor(private languageService: LanguageService) {}

description: string = 'prueba';
title: string = 'prueba';

get selectedLang(): string {
  return this.languageService.getCurrentLanguage();
}

procesarDatos(datos: any) {
  console.log('Datos recibidos:', datos);
}


}
