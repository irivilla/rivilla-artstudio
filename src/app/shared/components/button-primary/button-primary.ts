import { Component } from '@angular/core';

@Component({
  selector: 'app-button-primary',
  imports: [],
  templateUrl: './button-primary.html',
  styleUrl: './button-primary.scss'
})
export class ButtonPrimary {
   @Input() type:  'primary'  |  'secondary' =  'primary';
   @Input()  text:  string  = 'Click';
  @Input() placement:  'header'  |  'footer' |  'sidebar'  =  'header';
   @Input()  customHoverColor?: string;

   isHovered  =  false;

   getClasses()  {
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

}
