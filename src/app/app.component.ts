import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from './model/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public title: String = 'Lista de tarefas';
  public listaTarefas: Task[] = [];
  public form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      decricao: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.required
      ])]
    });


    this.listaTarefas.push(new Task(1, 'Ir ao mercado', false));
    this.listaTarefas.push(new Task(2, 'Cortar o cabelo', false));
    this.listaTarefas.push(new Task(3, 'Ir ao posto', false));
  }


  remove(item: Task) {

    const indexTask = this.listaTarefas.indexOf(item);

    if(indexTask !== -1){
      this.listaTarefas.splice(indexTask, 1);
    }
    
  }

  markAsDone(item: Task) {
    item.done = true;
  }

  markAsUndone(item: Task) {
    item.done = false; 
  }
}
