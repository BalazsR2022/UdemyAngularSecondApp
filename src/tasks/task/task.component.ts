import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor } from '@angular/common';

import {type Task} from './task.model'
import { CardComponent } from "../../app/shared/card/card.component";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  standalone: true,
  imports: [CardComponent],
  
})
export class TaskComponent {
    @Input({required: true}) task!: Task;
    @Output() complete = new EventEmitter<string>();

    onCompleteTask(){
      this.complete.emit(this.task.id);
    }
}
