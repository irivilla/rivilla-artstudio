import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule, LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-live-art',
  imports: [CommonModule, TranslateModule],
  templateUrl: './live-art.html',
  styleUrl: './live-art.scss'
})
export class LiveArt implements OnInit{

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
      'PAGES.LIVE-ART.ILLUSTRATIONS.TITLE',
      'PAGES.LIVE-ART.ILLUSTRATIONS.SUBTITLE',
      'PAGES.LIVE-ART.PAINTING.TITLE',
      'PAGES.LIVE-ART.PAINTING.SUBTITLE',
    ]).subscribe(translations => {
      this.cards = [
        { title: translations['PAGES.LIVE-ART.ILLUSTRATIONS.TITLE'],
           subtitle: translations['PAGES.LIVE-ART.ILLUSTRATIONS.SUBTITLE'], 
           image: 'assets/images/live-art1.jpg', 
           route: '/live-art/illustrations' },
        { title: translations['PAGES.LIVE-ART.PAINTING.TITLE'],
           subtitle: translations['PAGES.LIVE-ART.PAINTING.SUBTITLE'], 
           image: 'assets/images/live-art1.jpg', 
           route: '/live-art/paintings' },

    ];
    });
  }
}