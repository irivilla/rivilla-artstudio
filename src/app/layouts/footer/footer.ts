import {Component, inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CommonModule} from '@angular/common';
import {TranslateModule, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule,
        TranslateModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer implements OnInit {
  
  public translate = inject(TranslateService);
  currentYear: number = new Date().getFullYear();

  constructor(private router: Router) {}

  ngOnInit() {
    const lang = localStorage.getItem('lang') || 'es';
    this.translate.use(lang);
  }

  goHome(): void {
    this.router.navigate(['/home']);
  }

    openWhatsApp() {
    window.open('https://wa.me/610828491', '_blank');
  }

  openEmail() {
    window.open('mailto:rivilla.artstudio@gmail.com', '_blank');
  }

  goAbout(): void {
    this.router.navigate(['/about']);
  }
  goContact(): void {
    this.router.navigate(['/contact']);
  }

  goCookies(): void {
    this.router.navigate(['/politica-cookies']);
  }
  goPrivacy(): void {
    this.router.navigate(['/politica-privacidad']);
  }
  goQuestions(): void {
    this.router.navigate(['/preguntas-frecuentes']);
  }
  
}
