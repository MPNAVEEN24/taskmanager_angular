import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './Task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'http://localhost:9000/api/task';
  constructor(private http:HttpClient) { }

  addTask(task: Task) : Observable<any> {
    return this.http.post(`${this.baseUrl}` + `/create`, task);
}
getTasks(): Observable<any>{
  return this.http.get<any>(`${this.baseUrl}`);
}

updateTask(id:number,task: any): Observable<any> {
  return this.http.put(`${this.baseUrl}/update/${id}`, task);
}
endTask(id:number,task: any): Observable<any> {
  console.log("service")
  return this.http.put(`${this.baseUrl}/endtask/${id}`, task);
}
}
