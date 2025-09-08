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
}
