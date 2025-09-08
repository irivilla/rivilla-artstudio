import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-body',
  imports: [CommonModule, RouterModule],
  templateUrl: './body.html',
  styleUrl: './body.scss'
})
export class Body {

}
