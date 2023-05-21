import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Todo } from '../todo';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {

  constructor(private formBuilder: FormBuilder, private taskServiceService: TaskServiceService) {
    this.taskForm = this.formBuilder.group({
      id: [this.taskServiceService.todo.length + 1, Validators.required],
      task: ['', Validators.required],
      completed: [false],
    });
  }


  taskForm: FormGroup;

  onSubmit() {

    if (this.taskForm.valid) {


      const task: Todo = this.taskForm.value;
      this.taskServiceService.todo.push(task);

      //chatGPT
      const initialFormValue: Todo = {
        id: this.taskServiceService.todo.length + 1,
        task: '',
        completed: false
      };

      this.taskForm.patchValue({
        id: this.taskServiceService.todo.length + 1,
      });
      
      this.taskForm.reset(initialFormValue);
      //chapGPT

    }
  }
}
