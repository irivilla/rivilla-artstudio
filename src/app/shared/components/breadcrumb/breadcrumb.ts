import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';

interface BreadcrumbItem {
  label: string;
  url: string;
}

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

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {

        this.breadcrumbs = this.createBreadcrumbs(this.route.root);

      });

  }

  private createBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: BreadcrumbItem[] = []
  ): BreadcrumbItem[] {

    const children = route.children;

    if (!children.length) {
      return breadcrumbs;
    }

    for (const child of children) {

      const routeURL = child.snapshot.url
        .map(segment => segment.path)
        .join('/');

      if (routeURL) {
        url += `/${routeURL}`;
      }

      const label = child.snapshot.data['breadcrumb'];

      if (label) {

        breadcrumbs.push({
          label,
          url
        });

      }

      return this.createBreadcrumbs(child, url, breadcrumbs);

    }

    return breadcrumbs;

  }

}