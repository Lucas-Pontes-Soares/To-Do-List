import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './components/tasks/create-task/create-task.component';
import { GetTaskComponent } from './components/tasks/get-task/get-task.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'getTask',
    pathMatch: 'full'
  },
  {
    path: 'createTask',
    component: CreateTaskComponent
  },
  {
    path: 'getTask',
    component: GetTaskComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
