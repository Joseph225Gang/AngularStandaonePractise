import { AfterViewChecked, AfterViewInit,Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, OnInit, HostListener, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FontSizeComponent} from './font-size/font-size.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FontSizeComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked{
  title = 'angular-practise-sample';
  fontSize : number = 12;
  fontSizeType : string | number = 'small';
  @ViewChild(FontSizeComponent, { static: true })
  staticSize!: FontSizeComponent;
  counter: number = 0;

  constructor(private changeDetectorRef: ChangeDetectorRef)
  {

  }
  ngOnInit(): void {
    // 要用右上方的 Open in New Window 功能，利用開發者工具觀察
    console.log('AppComponent - ngOnInit - staticSize', this.staticSize);
  }

  ngAfterViewInit(): void {
    console.log('AppComponent - ngAfterViewInit - staticSize', this.staticSize);
  }

  ngAfterViewChecked(): void {
    console.log('AppComponent - ngAfterViewChecked');
  }

  onIncrease(num : number)
  {
      this.fontSize += num;
  }

  onDecrease(num: number)
  {
    this.fontSize -= num;
  }

  onSetFontSize(num: number)
  {
    alert('app' + num);
    this.fontSize += num;
    alert(this.fontSize);
  }

  onSizeChange(size: number)
  {
    this.fontSize = size;
  }

  @HostListener('window:keydown.enter', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    this.counter++;
    this.changeDetectorRef.detectChanges();
  }
  resetCounter() {
    this.counter = 0;
  }

  get fontClass(): string {
    return `${this.fontSizeType}-font`;
  }
}
