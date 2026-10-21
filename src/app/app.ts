import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./layouts/footer/footer";
import { Header } from "./layouts/header/header";
import { HeaderInfo } from "./layouts/header-info/header-info";
import { Body } from "./layouts/body/body";
import { LanguageService } from './shared/services/languageService/language-service';
import { ScrollToTop } from './shared/components/scroll-to-top/scroll-to-top';

@Component({
  selector: 'app-root',
  imports: [/* RouterOutlet, */ Footer, Header, HeaderInfo, Body, ScrollToTop],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('web-rivilla-artstudio');
  constructor(private languageService: LanguageService) {}
}
