import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule, LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {CardService} from '../../shared/components/card-service/card-service';
import {Button} from '../../shared/components/button/button';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-invitaciones',
  imports: [CommonModule, TranslateModule, CardService, Button],
  templateUrl: './invitaciones.html',
  styleUrl: './invitaciones.scss'
})
export class Invitaciones implements OnInit{

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
      'PAGES.INVITATIONS.PAPER.TITLE',
      'PAGES.INVITATIONS.PAPER.SUBTITLE',
      'PAGES.INVITATIONS.WEB.TITLE',
      'PAGES.INVITATIONS.WEB.SUBTITLE',
    ]).subscribe(translations => {
      this.cards = [
        { title: translations['PAGES.INVITATIONS.PAPER.TITLE'],
           subtitle: translations['PAGES.INVITATIONS.PAPER.SUBTITLE'], 
           image: '../../../assets/img/card/invitacion1x1.webp', 
           route: '/live-art/ilustracion' },
        { title: translations['PAGES.INVITATIONS.WEB.TITLE'],
           subtitle: translations['PAGES.INVITATIONS.WEB.SUBTITLE'], 
           image: '../../../assets/img/card/web1x1.webp', 
           route: '/live-art/cuadro' },
    ];
    });
  }
}