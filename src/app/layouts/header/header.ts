
import {
    Component,
    HostListener,
    ElementRef,
    ViewChild,
    OnInit,
    OnDestroy
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {Router, RouterModule, NavigationEnd} from '@angular/router';
import {LanguageService} from '../../shared/services/languageService/language-service';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [CommonModule,
        TranslateModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit, OnDestroy {

 
  public scrolled = false;
  public isHome = false;

  private routerSubscription?: Subscription;

  constructor(private router: Router, 
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
        this.updateHomeState();
        this.onWindowScroll();

        this.routerSubscription = this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(() => {
                this.updateHomeState();
                this.onWindowScroll();
            });
    }
get selectedLang(): string {
  return this.languageService.getCurrentLanguage();
}

private updateHomeState(): void {
        const currentUrl = this.router.url.split('?')[0].split('#')[0];

        this.isHome = currentUrl === '/' || currentUrl === '/home';
    }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }


  @ViewChild('navbarToggler')
navbarToggler!: ElementRef<HTMLButtonElement>;

closeMenu(): void {
    if (window.innerWidth >= 992) {
        return;
    }

    const navbar = document.getElementById('navbarNav');

    if (navbar?.classList.contains('show')) {
        this.navbarToggler.nativeElement.click();
    }


}

ngOnDestroy(): void {
        this.routerSubscription?.unsubscribe();
    }
}
