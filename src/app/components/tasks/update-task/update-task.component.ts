import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../../interfaces/task';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  title: string = '';
  description: string = '';
  progress: 'fazer' | 'fazendo' | 'feito' = 'fazer';
  priority: string = 'Com Prioridade';
  priorityBoolean: boolean = true;

  taskId: string = '';
  task: Task | undefined;

  constructor(private route: ActivatedRoute, private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id')!;

    console.log('Task ID:', this.taskId);

    this.task = this.taskService.getTasksById(parseInt(this.taskId));
    console.log(this.task?.dateToComplete);

    if (this.task) {
      this.title = this.task.title;
      this.description = this.task.description;
      this.progress = this.task.progress;
      this.priority = this.task.priority ? 'Com Prioridade' : 'Sem Prioridade';
    }
  }

  navigateToGetTask(){
    this.router.navigate(['/getTask']);
  }

  updateTask(form: NgForm){
    if (form.valid) {

      if(this.priority === "Com Prioridade"){
        this.priorityBoolean = true;
      } else {
        this.priorityBoolean = false;
      }

      alert(this.taskService.updateTask(parseInt(this.taskId), this.title, this.progress, this.description, this.priorityBoolean))
      this.router.navigate(['/getTask']);
    } else {
      alert("Formulário inválido");
    }
    console.log(form.controls);
  }


}
