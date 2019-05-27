import { Component } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todos = [];
  constructor(private alertController: AlertController) {}


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
            this.todos.push(todoText);
          }
        }
      ]
    });

    await alert.present();
    }
}
