import { Component } from '@angular/core';
import {AlertController} from '@ionic/angular';
import {TodoService} from '../services/todo.service';


/**
 * Component for the Home/Landing page.
 *
 * @author davinen.s.curoopen.
 */
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /** List of todo items to be displayed. */
  todos = [];

  /** FLag denoting whether items are drag & droppable. */
  itemDragDisabled = true;



  constructor(private alertController: AlertController, private todoService: TodoService) {
    // wiring this local 'todos' variable to the object address of the todoService.todos. so that change will be live when pushed.
    this.todos = this.todoService.getTodos();
  }

  /**
   * Toggle the #itemDragDisabled flag.
   */
  toggleDragDisabled() {
    this.itemDragDisabled = ! this.itemDragDisabled;
  }

  /**
   * Opens a popup for user to add a Todo Task.
   */
  async addTodoAlert() {
    const alert = await this.alertController.create({
      header: 'Add a Todo',
      message: 'Enter Your Todo',
      inputs: [
        {
          type: 'text',
          name: 'addTodoInput'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel', // add dismiss function.
          cssClass: 'secondary', // add theme secondary styling.
          handler: () => {
            console.log('cancel button pressed..');
          }
        },
        {
          text: 'Add Todo',
          handler: (inputData) => { // inputData contains all data from all your inputs from the alert.
            const todoText = inputData.addTodoInput; // access the input by its name defined.
            this.todoService.addTodoItem(todoText);
          }
        }
      ]
    });

    await alert.present();
    }

  onRenderItems(event) {
    console.log(`Moving item from ${event.detail.from} to ${event.detail.to}`);
    const draggedItem = this.todos.splice(event.detail.from, 1)[0];
    this.todos.splice(event.detail.to, 0, draggedItem)
    // this.todos = reorderArray(this.todos, event.detail.from, event.detail.to);
    event.detail.complete();
    console.log(this.todos);
  }
}
