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

  getTasksById(taskId: number){
    return this.tasks.find(x => x.id === taskId);
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

  updateTaskProgress(task: Task){
    if(task.progress === 'fazer'){
      task.progress = 'fazendo';
    } else if(task.progress === 'fazendo'){
      task.progress = 'feito';
    }

    const taskEdited: Task = {
      id: task.id,
      title: task.title,
      dateToComplete: task.dateToComplete,
      description: task.description,
      priority: task.priority,
      progress: task.progress
    }

    const id = task.id;
    this.tasks.splice(Number(id)-1, 1, taskEdited)
    this.updateLocalStorage()
    console.log('alterado');
  }

  updateTask(
    id: number,
    title: string,
    progress: 'fazer' | 'fazendo' | 'feito',
    description: string,
    priority: boolean){
    const task: Task = {
      id: id,
      title: title,
      dateToComplete: new Date().toLocaleString('pt-BR'),
      description: description,
      priority: priority,
      progress: progress
    }

    this.tasks.splice(Number(id)-1, 1, task)
    this.updateLocalStorage()
    console.log('alterado');
    return 'Tarefa atualizada com sucesso'
  }

  deleteTask(id: number){
    const index = this.tasks.findIndex((item) => item.id === id);
    this.tasks.splice(index, 1)
    this.updateLocalStorage()
    console.log('excluido');
  }

}
