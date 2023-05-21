import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor() { }

  todo: Todo[] = [

    {
      id: 1,
      task: "Work out",
      completed: true
    },
    {
      id: 2,
      task: "Go to the grocery store",
      completed: false
    },
    {
      id: 3,
      task: "Get a haircut",
      completed: false
    },
    {
      id: 4,
      task: "Do Grand Circus homework",
      completed: true
    },
    {
      id: 5,
      task: "Fix broken fishing pole",
      completed: false
    },

  ];

  getAllTasks(): Observable<Todo[]> {
    const tasks = of(this.todo)
    return tasks;
  }

   //this.todo.filter(x => x.id == searchId).completed = true;

  //  completeTask(searchId: number): void {
  //   this.todo.forEach(element => {
  //     if (searchId == element.id) {
  //       element.completed = true;
  //     }
  //   });
  // }

}
