import { Component, OnInit } from '@angular/core';
import {TodoService} from '../services/todo.service';

@Component({
  selector: 'app-archived-todos',
  templateUrl: './archived-todos.page.html',
  styleUrls: ['./archived-todos.page.scss'],
})
export class ArchivedTodosPage implements OnInit {

  archivedItems = [];

  constructor( private todoService: TodoService) {

  }

  ngOnInit() {
    this.archivedItems = this.todoService.getArchivedTodo();
    console.log('list from service', this.archivedItems);
  }

}
