import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor } from '@angular/common';

import {type Task} from './task.model'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  standalone: true,
  
})
export class TaskComponent {
    @Input({required: true}) task!: Task;
    @Output() complete = new EventEmitter<string>();

    onCompleteTask(){
      this.complete.emit(this.task.id);
    }
}
