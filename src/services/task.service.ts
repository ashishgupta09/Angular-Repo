import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  createTask: EventEmitter<string> = new EventEmitter<string>();
  createNewTask = new Subject<string>();

  constructor() { }


  onCreateTask(value: string) {
    // this.createTask.emit(value);
    this.createNewTask.next(value);
  }
}
