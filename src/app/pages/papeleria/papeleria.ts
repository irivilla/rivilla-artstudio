import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {Subscription} from 'rxjs';
import {CardService} from '../../shared/components/card-service/card-service';
import {LanguageService} from '../../shared/services/languageService/language-service';

@Component({
  selector: 'app-papeleria',
  imports: [CommonModule, TranslateModule, CardService],
  templateUrl: './papeleria.html',
  styleUrl: './papeleria.scss'
})
export class Papeleria implements OnInit{

  constructor(private languageService: LanguageService) {}


  private langChangeSub!: Subscription;
    cards: { title: string, subtitle: string, image: string, route:string }[] = [];
    
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