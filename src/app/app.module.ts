import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColumnComponent } from './components/column/column.component';
import { TaskComponent } from './components/tasks/task/task.component';
import { CreateTaskComponent } from './components/tasks/create-task/create-task.component';
import { GetTaskComponent } from './components/tasks/get-task/get-task.component';
import { FormsModule } from '@angular/forms';
import { UpdateTaskComponent } from './components/tasks/update-task/update-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ColumnComponent,
    TaskComponent,
    CreateTaskComponent,
    GetTaskComponent,
    UpdateTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
