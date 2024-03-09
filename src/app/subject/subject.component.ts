import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TaskService } from 'src/services/task.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit{
  newTask:string = ''
  
  constructor(private taskService:TaskService){}

  ngOnInit(): void {
    const newSubject = new BehaviorSubject<number>(100);
    newSubject.subscribe((data)=>{console.log("data1 "+ data)})
    newSubject.subscribe((data)=>{console.log("data2 "+ data)})
    newSubject.next(20034)
    newSubject.subscribe((data)=>{console.log("data3 "+ data)})
  }  

  addNewTask(){
    this.taskService.onCreateTask(this.newTask);
  }
}
