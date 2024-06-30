import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../interfaces/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task:Task
  @Output() removed: EventEmitter<void> = new EventEmitter<void>()
 
  remove(){
    this.removed.emit();
  }
}
