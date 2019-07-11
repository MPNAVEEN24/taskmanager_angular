import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { HomeTaskComponent } from './home-task/home-task.component';
import { DisplaytaskComponent } from './displaytask/displaytask.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchtaskPipe } from './displaytask/searchtask.pipe';
import { FooterComponent } from './footer/footer.component';
import { PagereloadComponent } from './pagereload/pagereload.component';

@NgModule({
  declarations: [
    AppComponent,
    AddtaskComponent,
    HomeTaskComponent,
    DisplaytaskComponent,
    SearchtaskPipe,
    FooterComponent,
    PagereloadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
