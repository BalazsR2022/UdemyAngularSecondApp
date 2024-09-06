import { Component, Input } from '@angular/core';
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
}
