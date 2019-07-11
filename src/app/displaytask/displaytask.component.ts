import { Component, OnInit } from '@angular/core';
import { TaskService } from '../addtask/task.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../addtask/Task';
import { Pipe, PipeTransform } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-displaytask',
  templateUrl: './displaytask.component.html',
  styleUrls: ['./displaytask.component.css']
})
export class DisplaytaskComponent implements OnInit {
public tasksdatas=[];
public tasks;
public errorMsg;
searchTasks = '';
searchParenttasks='';
searchStartdate:any;
searchEnddate:any;
closeResult: string;
public taskModel:Task  =new Task();
messageSuccess = true;

selectedOption: string;
  constructor(private router :Router  ,private _taskService: TaskService,private modalService: NgbModal) { }

ngOnInit() {
 this.getTasks()
}
getTasks(){
  this._taskService.getTasks()
  .subscribe(data => this.tasksdatas = data,
    error => this.errorMsg = error);
}
  open(content,data) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.taskModel=data
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  onSubmit(data){
    this.tasks=data
     this._taskService.updateTask(this.tasks.taskId,this.tasks)
      .subscribe(
        response => console.log('Success!', response),
      )
      this.getTasks(); 
      this.router.navigateByUrl('/pageload', {skipLocationChange: true}).then(()=>
      this.router.navigate(["/displaytask"])); 
    }
  onSelectEndTask(data){
    this.tasks=data;
    this._taskService.endTask(this.tasks.taskId,this.tasks)
    .subscribe(
      response => console.log('Success!', response),
    )

    this.router.navigateByUrl('/pageload', {skipLocationChange: true}).then(()=>
    this.router.navigate(["/displaytask"])); 

    this.getTasks();

  }
 
  }

