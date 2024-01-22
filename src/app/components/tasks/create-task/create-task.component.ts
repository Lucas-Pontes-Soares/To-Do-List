import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  title: string = '';
  description: string = '';
  progress: 'fazer' | 'fazendo' | 'feito' = 'fazer';
  priority: string = 'Com Prioridade';

  priorityBoolean: boolean = true;

  constructor(private router: Router, private TaskService: TaskService) { }

  ngOnInit(): void {
  }

  navigateToGetTask(){
    this.router.navigate(['/getTask']);
  }

  createTask(form: NgForm){
    if (form.valid) {

      if(this.priority === "Com Prioridade"){
        this.priorityBoolean = true;
      } else {
        this.priorityBoolean = false;
      }

      alert(this.TaskService.addTask(this.title, this.progress, this.description, this.priorityBoolean))
      this.resetForm()

    } else {
      alert("Formulário inválido");
    }
    console.log(form.controls);

  }

  private resetForm() {
    this.title = '';
    this.description = '';
    this.progress = 'fazer';
    this.priority = 'Com Prioridade';
  }
}
