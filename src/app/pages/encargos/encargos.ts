import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-encargos',
  imports: [CommonModule, TranslateModule],
  templateUrl: './encargos.html',
  styleUrl: './encargos.scss'
})
export class Encargos implements OnInit{

  constructor(private translate: TranslateService) {}

  public selectedLang: string = 'es';
  private langChangeSub!: Subscription;
ngOnInit(): void {
      setTimeout(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
          const lang = localStorage.getItem('lang') || 'es';
          this.selectedLang = lang;
          this.translate.use(lang);
        } else {
          // fallback si no hay localStorage (SSR o Node)
          this.selectedLang = 'es';
          this.translate.use('es');
        }
      });
  }


}
