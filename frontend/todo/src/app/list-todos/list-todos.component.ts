import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent implements OnInit {
  // creating a list of todos using arrays
  todos = [
    { id: 1, description: 'Learn Kotlin' },
    { id: 2, description: 'Learn Java' },
    { id: 3, description: 'Learn AWS' },
  ];
  // // create a todo object
  // todo = {
  //   // contents of todo
  //   // object attributes
  //   id: 1,
  //   description: 'Learn Kotlin',
  // };
  constructor() {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
