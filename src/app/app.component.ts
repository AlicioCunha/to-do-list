import { Component } from '@angular/core';
import { Task } from './model/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: String = 'Lista de tarefas';
  public listaTarefas: Task[] = [];

  constructor() {
    this.listaTarefas.push(new Task(1, 'Ir ao mercado', false));
    this.listaTarefas.push(new Task(2, 'Cortar o cabelo', false));
    this.listaTarefas.push(new Task(3, 'Ir ao posto', false));
  }
}
