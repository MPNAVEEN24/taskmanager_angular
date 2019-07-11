import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterLinkActive, Router } from '@angular/router';
import { DisplaytaskComponent } from '../displaytask/displaytask.component';

@Component({
  selector: 'app-home-task',
  templateUrl: './home-task.component.html',
  styleUrls: ['./home-task.component.css']
})
export class HomeTaskComponent implements OnInit {
  displayTask=true;
  addTask=false;
  public loadComponent;
  constructor(  private router: Router ) { }

  ngOnInit() {
  }
  onSelectAddTask(){
    this.displayTask=false;
    this.addTask=true;
  }
  onSelectDisplayTask(){
    this.addTask=false;
    this.displayTask=true;
    location.reload();
    // this.loadComponent = true;
//     this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
// this.router.navigate(["app-displaytask"]));
  }
}
