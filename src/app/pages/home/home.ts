import { CommonModule } from '@angular/common';
import {Component, inject, OnInit} from '@angular/core';
import {LangChangeEvent, TranslateModule, TranslateService} from '@ngx-translate/core';
import { Carrousel } from "../../shared/components/carrousel/carrousel";
import { CardPhoto } from "../../shared/components/card-photo/card-photo";
import { Subscription } from 'rxjs';
import { Reviews } from "../../shared/components/reviews/reviews";
import { Accordion } from "../../shared/components/accordion/accordion";

@Component({
  selector: 'app-home',
  imports: [CommonModule, TranslateModule, Carrousel, CardPhoto, Reviews, Accordion],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
//  public translate = inject(TranslateService);
  public selectedLang: string = 'es';
  cards: { title: string, image: string, route:string }[] = [];
  private langChangeSub!: Subscription;

  constructor(private translate: TranslateService) {}

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
      'PAGES.LIVE-ART.ILLUSTRATIONS.TITLE',
      'PAGES.LIVE-ART.PAINTING.TITLE',
      'PAGES.INVITATIONS.TITLE',
      'PAGES.CRAFT.SEATING-PLAN.TITLE',
      'PAGES.COMMISSIONS.TITLE',
      'PAGES.CRAFT.MENU.TITLE'
    ]).subscribe(translations => {
      this.cards = [
        { title: translations['PAGES.LIVE-ART.ILLUSTRATIONS.TITLE'], image: '../../../assets/img/card/card-ilustracion.webp', route: 'live-art/ilustracion' },
        { title: translations['PAGES.LIVE-ART.PAINTING.TITLE'], image: '../../../assets/img/card/card-cuadro.webp',route: 'live-art/cuadro'  },
        { title: translations['PAGES.INVITATIONS.TITLE'], image: '../../../assets/img/card/card-relleno.webp', route: '/invitaciones' },
        { title: translations['PAGES.CRAFT.SEATING-PLAN.TITLE'], image: '../../../assets/img/card/card-relleno.webp', route: 'papeleria/seating-plan' },
        { title: translations['PAGES.COMMISSIONS.TITLE'], image: '../../../assets/img/card/card-encargo.webp', route: '/encargos'  },
        { title: translations['PAGES.CRAFT.MENU.TITLE'], image: '../../../assets/img/card/card-relleno.webp',  route: '/papeleria/minuta' },
      ];
    });
  }
}

