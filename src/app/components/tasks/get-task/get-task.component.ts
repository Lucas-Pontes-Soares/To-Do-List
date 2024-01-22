import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-task',
  templateUrl: './get-task.component.html',
  styleUrls: ['./get-task.component.css']
})
export class GetTaskComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToCreateTask() {
    this.router.navigate(['/createTask']);
  }
}
