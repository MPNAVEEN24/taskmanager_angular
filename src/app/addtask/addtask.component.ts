import { Component, OnInit } from '@angular/core';
import { Task } from './Task';
import { TaskService } from './task.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
public taskModel:Task  =new Task();

  constructor(private router :Router,private _taskService: TaskService) { }

  ngOnInit() {
  }
  onSubmit(data) {
    //console.log(data.value)
this.taskModel=data

   console.log(this.taskModel)
     this._taskService.addTask(this.taskModel)
      .subscribe(
        response => console.log('Success!', response),
      )
      this.taskModel  =new Task();
      this.router.navigateByUrl('/pageload', {skipLocationChange: true}).then(()=>
      this.router.navigate(["/displaytask"])); 
  }
}
