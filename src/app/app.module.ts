import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import {AppComponent} from './app.component';
import { HeaderComponent } from "src/header/header.component";
import { UserComponent } from "src/user/user.component";
import { TasksComponent } from "src/tasks/tasks.component";
import { CardComponent } from "./shared/card/card.component";
import { newTaskComponent } from "./tasks/newTask/newTask.component";
import { TaskComponent } from "src/tasks/task/task.component";



@NgModule({
    declarations: [AppComponent, 
         HeaderComponent, 
         UserComponent,
         CardComponent,
         TasksComponent,
         TaskComponent,
         newTaskComponent
    ],

        bootstrap: [AppComponent],
        imports: [BrowserModule, FormsModule],
    })
    export class Appmodule{

}