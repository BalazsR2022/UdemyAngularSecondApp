import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;

}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  standalone: true,
  
})
export class TaskComponent {
    @Input({required: true}) task!: Task;
}
