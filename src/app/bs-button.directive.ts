import { ElementRef, Directive, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appBsButton]',
  standalone: true
})
export class BsButtonDirective implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {
    const button = (this.el.nativeElement as HTMLElement);
    button.classList.add('btn');
    button.classList.add('btn-primary');
  }
  }
