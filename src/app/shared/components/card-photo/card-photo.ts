import {
    Component,
    Input,
    AfterViewInit,
    OnDestroy,
    ElementRef,
    Inject,
    PLATFORM_ID,
    HostBinding
} from '@angular/core';
import { Router } from '@angular/router';
import {LanguageService} from '../../services/languageService/language-service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-card-photo',
  imports: [],
  templateUrl: './card-photo.html',
  styleUrl: './card-photo.scss'
})
export class CardPhoto implements AfterViewInit, OnDestroy {
   @Input() title: string = '';

   @Input() imageSrc: string = '';

   @Input() route!: string;

   @Input() animationIndex: number = 0;

   private observer?: IntersectionObserver;

   @HostBinding('style.--animation-delay')
get animationDelay(): string {
    return `${this.animationIndex * 0.12}s`;
}


constructor(private router: Router, private languageService: LanguageService,private elementRef: ElementRef<HTMLElement>,
        @Inject(PLATFORM_ID) private platformId: object
    ) {}


    get selectedLang(): string {
      return this.languageService.getCurrentLanguage();
    }

     ngAfterViewInit(): void {

        // Solo ejecutar en navegador y en móvil/tablet
        if (
            !isPlatformBrowser(this.platformId) ||
            window.innerWidth > 991.98 ||
            window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ) {
            return;
        }

        this.observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    this.elementRef.nativeElement.classList.add('visible');

                    this.observer?.unobserve(entry.target);
                }

            });

        }, {
            threshold: 0.15
        });

        const target = this.elementRef.nativeElement.parentElement
    ?? this.elementRef.nativeElement;

this.observer.observe(target);
    }

    ngOnDestroy(): void {
        this.observer?.disconnect();
    }


  navigate() {
    this.router.navigate([this.route]);
  }
  
}
