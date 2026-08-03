import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';
import { BreadcrumbItem } from '../../models/breadcrumb.model';
import { BREADCRUMB_MAP } from '../../data/breadcrumb.data';


@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.scss'
})
export class Breadcrumb {

  breadcrumbs: BreadcrumbItem[] = [];

constructor(private router: Router) {}

 ngOnInit(): void {

    this.buildBreadcrumb();

    this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(() => {

            this.buildBreadcrumb();

        });

}


  private buildBreadcrumb(): void {

    const parts = this.router.url
        .split('?')[0]
        .split('/')
        .filter(Boolean);

      

    let currentUrl = '';

    this.breadcrumbs = parts.map(part => {

        currentUrl += '/' + part;

        return {
            label: BREADCRUMB_MAP[part.toLowerCase()] ?? part,
            url: currentUrl
        };

    });

}

}