import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCambiarFondo]'
})
export class CambiarFondoDirective {

  constructor(elem : ElementRef) {
    elem.nativeElement.style.background = 'yellow';
    elem.nativeElement.style.color = 'blue';
   }

}
