import { Attribute, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-font-size',
  standalone: true,
  imports: [],
  templateUrl: './font-size.component.html',
  styleUrl: './font-size.component.css'
})
export class FontSizeComponent implements OnChanges{
  @Input() size!: number;

  @Output() sizeChange = new EventEmitter<number>();

  @Output() stringChange = new EventEmitter<string>();

  constructor(@Attribute('color') public color: string, private router: Router) {}

  onSetFontSize(value: number): void{
    this.size += value;
    this.sizeChange.emit(this.size);
  }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes.size)
        this.stringChange.emit(`${changes.size.currentValue}pt`);
    }


    onCancel(): void {
      this.router.navigateByUrl('tasks');
    }
}
