import { Component, inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header-info',
  imports: [CommonModule,
        TranslateModule],
  templateUrl: './header-info.html',
  styleUrls: ['./header-info.scss']
})
export class HeaderInfo {

  public  translate = inject(TranslateService);

  constructor() {
    this.translate.addLangs(['es', 'en']);
    this.translate.setFallbackLang('en');
    this.translate.use('es'); // opcional: establecer al iniciar
  }

  use(lang: string) { this.translate.use(lang); }

}
