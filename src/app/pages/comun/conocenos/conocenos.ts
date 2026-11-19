import {
    Component,
    AfterViewInit,
    OnDestroy,
    ElementRef,
    Inject,
    PLATFORM_ID
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-conocenos',
    imports: [TranslateModule],
    templateUrl: './conocenos.html',
    styleUrl: './conocenos.scss'
})
export class Conocenos implements AfterViewInit, OnDestroy {

    private observers: IntersectionObserver[] = [];

    constructor(
        private elementRef: ElementRef<HTMLElement>,
        @Inject(PLATFORM_ID) private platformId: object
    ) {}

    ngAfterViewInit(): void {

        if (
            !isPlatformBrowser(this.platformId) ||
            window.innerWidth > 991.98 ||
            window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ) {
            return;
        }

        const profiles = this.elementRef.nativeElement.querySelectorAll('.team-profile');

        profiles.forEach(profile => {

            const observer = new IntersectionObserver((entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        profile.classList.add('visible');

                        observer.unobserve(profile);
                    }

                });

            }, {
                threshold: 0.15
            });

            observer.observe(profile);
            this.observers.push(observer);

        });
    }

    ngOnDestroy(): void {
        this.observers.forEach(observer => observer.disconnect());
    }
}