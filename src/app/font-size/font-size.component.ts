import { Attribute, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-font-size',
  standalone: true,
  imports: [],
  templateUrl: './font-size.component.html',
  styleUrl: './font-size.component.css'
})
export class FontSizeComponent {
  @Input() size!: number;

  @Output() sizeChange = new EventEmitter<number>();

  constructor(@Attribute('color') public color: string) {}

  onSetFontSize(value: number): void{
    alert('font');
    this.size += value;
    this.sizeChange.emit(this.size);
  }
}
