import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './components/tasks/create-task/create-task.component';
import { GetTaskComponent } from './components/tasks/get-task/get-task.component';
import { UpdateTaskComponent } from './components/tasks/update-task/update-task.component';

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
  {
    path: 'updateTask/:id',
    component: UpdateTaskComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
