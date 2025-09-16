import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule, LangChangeEvent} from '@ngx-translate/core';
import {Subscription} from 'rxjs';
import { CardService } from "../../shared/components/card-service/card-service";
import { Button } from "../../shared/components/button/button";
import {LanguageService} from '../../shared/services/languageService/language-service';

@Component({
  selector: 'app-live-art',
  imports: [CommonModule, TranslateModule, CardService, Button],
  templateUrl: './live-art.html',
  styleUrl: './live-art.scss'
})
export class LiveArt implements OnInit{

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
      'PAGES.LIVE-ART.ILLUSTRATIONS.TITLE',
      'PAGES.LIVE-ART.ILLUSTRATIONS.SUBTITLE',
      'PAGES.LIVE-ART.PAINTING.TITLE',
      'PAGES.LIVE-ART.PAINTING.SUBTITLE',
    ]).subscribe(translations => {
      this.cards = [
        { title: translations['PAGES.LIVE-ART.ILLUSTRATIONS.TITLE'],
           subtitle: translations['PAGES.LIVE-ART.ILLUSTRATIONS.SUBTITLE'], 
           image: '../../../assets/img/card/ilustracion1x1.webp', 
           route: '/live-art/ilustracion' },
        { title: translations['PAGES.LIVE-ART.PAINTING.TITLE'],
           subtitle: translations['PAGES.LIVE-ART.PAINTING.SUBTITLE'], 
           image: '../../../assets/img/card/cuadro1x1.webp', 
           route: '/live-art/cuadro' },

    ];
    });
  }
}