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
      descricao: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.required
      ])]
    });

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

  addTask(){
    const descricaoNovaTarefa = this.form.controls['descricao'].value;
    const id = this.listaTarefas.length + 1;
    this.listaTarefas.push(new Task(id, descricaoNovaTarefa, false));

    this.save();
   
    this.clear();
  }

  clear(){
    this.form.reset();
  }

  save(){
    const data = JSON.stringify(this.listaTarefas);
    localStorage.setItem('tasks', data);
  }
}
