import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  standalone: true,
  imports:[TaskComponent, NgFor, CommonModule,FormsModule],
  
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular & how to apply to them ',
      dueDate: '2025-12-31'
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  newTask = {
    id: '',
    title: '',
    summary: '',
    dueDate: ''
  }

  get selectedUserTasks(){
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string){
     this.tasks = this.tasks.filter((task)=>task.id !==id);
  }
  addTasks(){
    if (this.newTask.id && this.newTask.title && this.newTask.summary && this.newTask.dueDate) {
      const taskToAdd = { ...this.newTask, userId: this.userId };
      this.tasks.push(taskToAdd);

      // Clear input fields after adding the task
      this.newTask = {
        id: '',
        title: '',
        summary: '',
        dueDate: ''
      };
    } else {
      alert('Please fill in all fields!');
    }

  }

}
