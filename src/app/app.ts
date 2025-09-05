import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./layouts/footer/footer";
import { Header } from "./layouts/header/header";
import { HeaderInfo } from "./layouts/header-info/header-info";
import { Body } from "./layouts/body/body";

@Component({
  selector: 'app-root',
  imports: [/* RouterOutlet, */ Footer, Header, HeaderInfo, Body],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('web-rivilla-artstudio');
}
