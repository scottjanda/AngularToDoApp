import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TaskServiceService } from '../task-service.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private taskServiceService: TaskServiceService){}

  todo: Todo[] = [];

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(){
    this.taskServiceService.getAllTasks().subscribe(x => this.todo = x);
  }
  
  completeTask(searchId: number): void {

  const test = this.todo.filter(x => x.id == searchId)[0].completed = true;

  }

}
