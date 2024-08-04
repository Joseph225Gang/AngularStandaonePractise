import { Component, Input } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './app-task.component.html',
  styleUrl: './app-task.component.css'
})
export class AppTaskComponent {
  @Input() task!: Task;
}
