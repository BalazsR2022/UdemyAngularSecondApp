import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type NewTaskData } from 'src/tasks/task/task.model';

@Component({
  selector: 'app-newTask',
  templateUrl: './newTask.component.html',
  styleUrls: ['./newTask.component.css'],
  standalone: true,
  imports:[FormsModule],
})
export class newTaskComponent {

  @Output() cancel = new EventEmitter<void>()
  @Output() add = new EventEmitter<NewTaskData>();
  enteredTitle='';
  enteredSummary='';
  enteredDate='';

  onCancel(){
    this.cancel.emit();

  }

  onSubmit(){
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    });
  }
}
