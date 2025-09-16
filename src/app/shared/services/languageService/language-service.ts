import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private defaultLang = 'es';

  constructor(private translate: TranslateService) {
    this.initLanguage();
  }

  initLanguage() {
    const lang = localStorage.getItem('lang') || this.defaultLang;
    this.translate.use(lang);
  }

  setLanguage(lang: string) {
    localStorage.setItem('lang', lang);
    this.translate.use(lang);
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang || this.defaultLang;
  }

  onLanguageChange() {
    return this.translate.onLangChange;
  }

  get(keys: string[]) {
    return this.translate.get(keys);
  }
}