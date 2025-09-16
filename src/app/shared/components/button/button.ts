import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
   @Input() type:  'primary'  |  'secondary' =  'primary';
   @Input()  text:  string  = 'Click';
  @Input() placement:  'header'  |  'footer' |  'sidebar'  =  'header';
   @Input()  customHoverColor?: string;

   isHovered  =  false;

   getType()  {
      return  [
          'btn',
           this.type ===  'primary'  ?  'btn-primary' :  'btn-secondary',
          `btn-${this.placement}`
       ];
   }

   getStyles()  {
       if  (this.isHovered &&  this.customHoverColor)  {
          return  {  backgroundColor: this.customHoverColor,  color:  '#fff'  };
      }
       return  {};
   }
}

