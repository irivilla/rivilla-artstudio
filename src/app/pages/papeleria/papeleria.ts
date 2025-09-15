import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule, LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {Subscription} from 'rxjs';
import {CardService} from '../../shared/components/card-service/card-service';

@Component({
  selector: 'app-papeleria',
  imports: [CommonModule, TranslateModule, CardService],
  templateUrl: './papeleria.html',
  styleUrl: './papeleria.scss'
})
export class Papeleria implements OnInit{

  constructor(private translate: TranslateService) {}

  public selectedLang: string = 'es';
  private langChangeSub!: Subscription;
    cards: { title: string, subtitle: string, image: string, route:string }[] = [];
    
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
      this.defineCards();
      this.lenguageCards();
  }

  ngOnDestroy(): void {
    if (this.langChangeSub) {
      this.langChangeSub.unsubscribe();
    }
  }

  lenguageCards(){
  this.langChangeSub = this.translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        this.defineCards();
      }
    );
  }

  defineCards() : void { 
this.translate.get([
      'PAGES.CRAFT.SEATING-PLAN.TITLE',
      'PAGES.CRAFT.SEATING-PLAN.SUBTITLE',
      'PAGES.CRAFT.MENU.TITLE',
      'PAGES.CRAFT.MENU.SUBTITLE',
    ]).subscribe(translations => {
      this.cards = [
        { title: translations['PAGES.CRAFT.SEATING-PLAN.TITLE'],
           subtitle: translations['PAGES.CRAFT.SEATING-PLAN.SUBTITLE'], 
           image: '../../../assets/img/card/ilustracion1x1.webp', 
           route: '/papeleria/seating-plan' },
        { title: translations['PAGES.CRAFT.MENU.TITLE'],
           subtitle: translations['PAGES.CRAFT.MENU.SUBTITLE'], 
           image: '../../../assets/img/card/cuadro1x1.webp', 
           route: '/papeleria/minuta' },

    ];
    });
  }
}