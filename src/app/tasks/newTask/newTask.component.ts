import { Component, Output, EventEmitter, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type NewTaskData } from 'src/tasks/task/task.model';
import { TasksService } from 'src/tasks/tasks.service';

@Component({
  selector: 'app-newTask',
  templateUrl: './newTask.component.html',
  styleUrls: ['./newTask.component.css'],
  standalone: true,
  imports:[FormsModule],
})
export class newTaskComponent {
  @Input({ required: true }) userId!: string; 

  @Output() close = new EventEmitter<void>();

  enteredTitle='';
  enteredSummary='';
  enteredDate='';
    private taskService = inject(TasksService);

      onCancel(){
        this.onCancel();

      }

      onSubmit(){
        this.taskService.addTasks(
          {
          title: this.enteredTitle,
          summary: this.enteredSummary,
          date: this.enteredDate
        },
        this.userId
        ); 
        this.onCancel();
      }
    }
