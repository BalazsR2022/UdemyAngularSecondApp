import { Component, Input, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { DatePipe } from '@angular/common';

import {type Task} from './task.model'
import { CardComponent } from "../../app/shared/card/card.component";
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  standalone: true,
  imports: [CardComponent, DatePipe],
  
})
export class TaskComponent {
    @Input({required: true}) task!: Task;
    private tasksService = inject(TasksService);
 

    onCompleteTask(){
      this.tasksService.removeTask(this.task.id);
    }
   
    
}
