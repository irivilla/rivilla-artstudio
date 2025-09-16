import {Component, HostListener, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {Router, RouterModule} from '@angular/router';
import {LanguageService} from '../../shared/services/languageService/language-service';

@Component({
  selector: 'app-header',
  imports: [CommonModule,
        TranslateModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

 
  public scrolled = false;

  constructor(private router: Router, 
    private languageService: LanguageService
  ) {}

  ngOnInit() {
 
}
get selectedLang(): string {
  return this.languageService.getCurrentLanguage();
}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }
}
