import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOverHighlight]',
})
export class OverHighlightDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseover')
  onMouseOver() {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.renderer.removeStyle(this.elRef.nativeElement, 'color');
  }
  
}
