import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-newTask',
  templateUrl: './newTask.component.html',
  styleUrls: ['./newTask.component.css'],
  standalone: true,
  imports:[],
})
export class newTaskComponent {

  @Output() cancel = new EventEmitter<void>()

  onCancel(){
    this.cancel.emit();

  }
}
