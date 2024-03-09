import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskService } from 'src/services/task.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  taskObj = ['task1', 'task2', 'task3', 'task4', 'task5', 'task6', 'task7', 'task8'];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.createNewTask.subscribe((res) => {
      this.taskObj.push(res)
    })
  }

  myObservable = new Observable((observer) => {
    setTimeout(() => { observer.next(1) }, 1000);
    setTimeout(() => { observer.next(2) }, 2000);
    setTimeout(() => { observer.next(3) }, 3000);
    setTimeout(() => { observer.next(4) }, 4000);
    setTimeout(() => { observer.next(5) }, 5000);
  });

  getData(): void {
    this.myObservable.subscribe({
      next(value: any) {
        console.log(value);
      },
      error(err) {
        alert("something went to wrong!");
      },
      complete() {
        alert("All the streams are completed!")
      },
    })
  }


}
