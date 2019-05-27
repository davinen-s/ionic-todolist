import { Injectable } from '@angular/core';


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

  constructor() { }

  /**
   * Return all the Todos for this current session.
   */
  getTodos() {
    return this.todos;
  }

  /**
   * Add a todo item to the list for this current session.
   * @param todoItem the todo item to add.
   */
  addTodoItem(todoItem) {
    this.todos.push(todoItem);
  }
}
