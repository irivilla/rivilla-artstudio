import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header-info',
  imports: [CommonModule,
        TranslateModule],
  templateUrl: './header-info.html',
  styleUrls: ['./header-info.scss']
})

export class HeaderInfo implements OnInit {
  public translate = inject(TranslateService);
  public selectedLang: string = 'es';
  public scrolled = false;

 
  ngOnInit() {
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




  use(lang: string) {
    this.selectedLang = lang;
    this.translate.use(lang);
    // guarda el idioma en memoria local
    localStorage.setItem('lang', lang); 
  }

  openWhatsApp() {
    window.open('https://wa.me/610828491', '_blank');
  }

  openEmail() {
    window.open('mailto:rivilla.artstudio@gmail.com', '_blank');
  }


}
