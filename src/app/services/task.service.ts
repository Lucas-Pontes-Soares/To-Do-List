import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[];

  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  }

  getTasks(){
    return this.tasks;
  }

  criarTask(
      title: string,
      progress: 'fazer' | 'fazendo' | 'feito',
      description: string,
      priority: boolean
    ){
    const id = this.tasks.length + 1
    const task: Task = {
      id: id,
      title: title,
      progress: progress,
      dateToComplete: new Date().toLocaleString('pt-BR'),
      description: description,
      priority: priority,
    }
    return task
  }

  addTask(
      title: string,
      progress: 'fazer' | 'fazendo' | 'feito',
      description: string,
      priority: boolean
    ){
    const item = this.criarTask(title, progress, description, priority)
    this.tasks.push(item);
    this.updateLocalStorage()
    console.log('adicionado');
    return 'Tarefa criada com sucesso'
  }

  updateLocalStorage(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

}
