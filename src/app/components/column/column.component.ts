import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit{
  @Input() name: string = '';
  @Input() color: string = '';
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
    console.log(this.tasks);
  }
}
