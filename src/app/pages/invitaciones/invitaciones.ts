import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule, LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {CardService} from '../../shared/components/card-service/card-service';
import {Button} from '../../shared/components/button/button';
import {Subscription} from 'rxjs';
import {LanguageService} from '../../shared/services/languageService/language-service';

@Component({
  selector: 'app-invitaciones',
  imports: [CommonModule, TranslateModule, CardService, Button],
  templateUrl: './invitaciones.html',
  styleUrl: './invitaciones.scss'
})
export class Invitaciones implements OnInit{

 

  private langChangeSub!: Subscription;
    cards: { title: string, subtitle: string, image: string, route:string }[] = [];
    constructor(private languageService: LanguageService) {}

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
      'PAGES.INVITATIONS.PAPER.TITLE',
      'PAGES.INVITATIONS.PAPER.SUBTITLE',
      'PAGES.INVITATIONS.WEB.TITLE',
      'PAGES.INVITATIONS.WEB.SUBTITLE',
    ]).subscribe(translations => {
      this.cards = [
        { title: translations['PAGES.INVITATIONS.PAPER.TITLE'],
           subtitle: translations['PAGES.INVITATIONS.PAPER.SUBTITLE'], 
           image: '../../../assets/img/card/invitacion1x1.webp', 
           route: '/invitaciones/papel' },
        { title: translations['PAGES.INVITATIONS.WEB.TITLE'],
           subtitle: translations['PAGES.INVITATIONS.WEB.SUBTITLE'], 
           image: '../../../assets/img/card/web1x1.webp', 
           route: '/invitaciones/web' },
    ];
    });
  }
}