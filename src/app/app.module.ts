import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import{AppComponent} from './app.component';
import { HeaderComponent } from "src/header/header.component";
import { UserComponent } from "src/user/user.component";
import { TasksComponent } from "src/tasks/tasks.component";


@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports:[ BrowserModule, HeaderComponent, UserComponent, TasksComponent]
})
export class Appmodule{

}