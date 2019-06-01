import { Injectable } from '@angular/core';
import {NavController} from "@ionic/angular";


/**
 * Service for Todos.
 *
 * @author davinen.s.curoopen
 */
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  /** List of todo items for current session. */
  private todos = ['item1', 'item2', 'item3'];

  private archivedTodos = [];

  constructor() {
    console.log('creating service');
  }

  /**
   * Return all the Todos for this current session.
   */
  getTodos() {
    return this.todos;
  }
  /**
   * Return all the Archived Todos for this current session.
   */
  getArchivedTodo() {
    console.log('get from service..', this.archivedTodos);
    console.log('get from service..', this.todos);
    return this.archivedTodos;
  }

  /**
   * Archived the selected item by removing it from {@link this.todos} and adding it to the archived list.
   * @param todoIndex the index of the selected item.
   */
  archiveTodo(todoIndex: number) { NavController
    const todoToBeArchived = this.todos[todoIndex];
    this.archivedTodos.push(todoToBeArchived);
    console.log('this.archived todo updated..', this.archivedTodos);
    this.todos.splice(todoIndex, 1);
    console.log('todo updated..', this.todos);
  }

  /**
   * Add a todo item to the list for this current session.
   * @param todoItem the todo item to add.
   */
  addTodoItem(todoItem) {
    this.todos.push(todoItem);
  }
}
