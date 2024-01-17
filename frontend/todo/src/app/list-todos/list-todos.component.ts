import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

// Create a Todo class
export class Todo {
  // create a constructor
  constructor(
    // create a parameters/field for the constructor
    public id: number,
    public description: string,
    public targetDate: Date,
    public done: boolean
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent implements OnInit {
  username = 'tiger';

  todos: Todo[] | undefined;
  // = [
  //   new Todo(1, 'Learning Kotlin', new Date(), false),
  //   new Todo(2, 'Learning Java', new Date(), false),
  //   new Todo(3, 'Learning AWS', new Date(), false),

  //   // creating a list of todos using arrays
  //   // { id: 1, description: 'Learn Kotlin' },
  //   // { id: 2, description: 'Learn Java' },
  //   // { id: 3, description: 'Learn AWS' },
  // ];
  // // create a todo object
  // todo = {
  //   // contents of todo
  //   // object attributes
  //   id: 1,
  //   description: 'Learn Kotlin',
  // };
  constructor(private router: Router, private todoService: TodoDataService) {}

  // handleBack() {
  //   this.router.navigate(['welcome', this.username]);
  // }

  ngOnInit(): void {
    // initialize the todos
    this.todoService.retrieveAllTodos('Mahabir').subscribe(
      // what should happen when get a successful response
      (response) => {
        console.log(response);
        // define the method
        this.todos = response;
      }
    );
  }
}
