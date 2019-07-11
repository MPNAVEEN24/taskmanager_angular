import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddtaskComponent } from './addtask/addtask.component';
import { DisplaytaskComponent } from './displaytask/displaytask.component';
import { PagereloadComponent } from './pagereload/pagereload.component';

const routes: Routes = [
  {path:'',redirectTo:'/addtask',pathMatch:'full'},
  {path:'addtask', component:AddtaskComponent},
  {path:'displaytask', component:DisplaytaskComponent},
  {path:'pageload', component:PagereloadComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[AddtaskComponent,
  DisplaytaskComponent,
  PagereloadComponent
 ]