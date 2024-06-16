import { Component, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
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
export class AppComponent {
  title = 'angular-practise-sample';
  fontSize : number = 12;
  fontSizeType : string | number = 'small';

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

  get fontClass(): string {
    return `${this.fontSizeType}-font`;
  }
}
