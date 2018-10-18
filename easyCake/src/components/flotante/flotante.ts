import { Component } from '@angular/core';

/**
 * Generated class for the FlotanteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'flotante',
  templateUrl: 'flotante.html'
})
export class FlotanteComponent {

  text: string;

  constructor() {
    console.log('Hello FlotanteComponent Component');
    this.text = 'Hello World';
  }

}
