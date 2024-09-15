import { Component, Input } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  newTaskComponent } from "../app/tasks/newTask/newTask.component";
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  standalone: true,
  imports: [TaskComponent, NgFor, CommonModule, FormsModule, newTaskComponent],
  
})
export class TasksComponent {


  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  isAddingTask =false;
 

  constructor(private tasksService: TasksService) {
   
  }
 
  trackByTaskId(index: number, task: { id: string }) {
    return task.id;
  }
  
  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }

 

  ontartAddTask(){
    this.isAddingTask= true;
  }
  
  onCloseAddTask(){
    this.isAddingTask = false;
  }
  
  
}
