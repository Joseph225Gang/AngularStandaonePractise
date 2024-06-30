import { Directive } from '@angular/core';

@Directive({
  selector: '[appHello]',
  standalone: true
})
export class HelloDirective {

  constructor() { }

}
