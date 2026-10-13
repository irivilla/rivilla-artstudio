import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {Button} from '../button/button';
import {Router} from '@angular/router';
import {LanguageService} from '../../services/languageService/language-service';

@Component({
  selector: 'app-card-budget',
  imports: [CommonModule, TranslateModule, Button],
  templateUrl: './card-budget.html',
  styleUrl: './card-budget.scss'
})
export class CardBudget {

  constructor(private router: Router) {}

     navigateToContact(): void {
    this.router.navigate(['/contact']);
  }

}
