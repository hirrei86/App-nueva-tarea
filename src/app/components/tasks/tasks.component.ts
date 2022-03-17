import { Component, OnInit } from '@angular/core';
import {Task} from '../../task'
import {TASKS} from '../../mock-tasks'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  task: Task[] = TASKS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
