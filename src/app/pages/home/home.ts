import { CommonModule } from '@angular/common';
import {Component,  OnInit} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import { Carrousel } from "../../shared/components/carrousel/carrousel";
import { CardPhoto } from "../../shared/components/card-photo/card-photo";
import { Subscription } from 'rxjs';
import { Reviews } from "../../shared/components/reviews/reviews";
import { Accordion } from "../../shared/components/accordion/accordion";
import {LanguageService} from '../../shared/services/languageService/language-service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, TranslateModule, Carrousel, CardPhoto, Reviews, Accordion],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {

  cards: { title: string, image: string, route:string }[] = [];
  private langChangeSub!: Subscription;


constructor(private languageService: LanguageService) {}

get selectedLang(): string {
  return this.languageService.getCurrentLanguage();
}
  ngOnInit(): void {
    
      this.defineCards();
      this.lenguageCards();
  }
   ngOnDestroy(): void {
    if (this.langChangeSub) {
      this.langChangeSub.unsubscribe();
    }
  }

  lenguageCards(){
 this.langChangeSub = this.languageService.onLanguageChange().subscribe(() => {
      this.defineCards();
    });
  }

 
   defineCards() : void {
    this.languageService.get([
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

