import { Component, DoCheck, OnInit } from '@angular/core';
import { Task } from './interfaces/task';
import { TaskService } from './services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'to-do-list';

  constructor(private TaskService: TaskService, private router : Router) { }

  ngOnInit(): void {
    //this.TaskService.addTask('Feito', 'feito', 'testando', true)
  }

  ngDoCheck(): void {
    this.TaskService.updateLocalStorage();
  }

}
