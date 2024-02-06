import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/interfaces/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task! : Task;

  constructor(private TaskService: TaskService, private router: Router ) { }

  ngOnInit(): void {
  }

  changeProgress(){
    console.log("apertou");
    this.TaskService.updateTaskProgress(this.task)
  }

  deleteTask(){
    this.TaskService.deleteTask(this.task.id)
  }

  editTask(){
    this.router.navigate([`/updateTask/${this.task.id}`]);
  }
}
