import {Component, HostListener, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule,
        TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  public translate = inject(TranslateService);
  public scrolled = false;

  constructor(private router: Router) {}

  ngOnInit() {
  setTimeout(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const lang = localStorage.getItem('lang') || 'es';
      this.translate.use(lang);
    } else {
      this.translate.use('es');
    }
  });
}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }
}
