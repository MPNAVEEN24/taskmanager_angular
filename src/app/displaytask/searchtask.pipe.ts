import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../addtask/Task';

@Pipe({
  name: 'searchtask'
})
export class SearchtaskPipe implements PipeTransform {

 // transform(tasksdatas:Task[], searchTasks: string,searchParenttasks:string): Task[] {
//     if(!tasksdatas || !searchParenttasks){
//        return tasksdatas
//     }

//     return tasksdatas.filter(tasksdata =>
//     tasksdata.parentTask.toLowerCase().indexOf(searchParenttasks.toLowerCase()) !== -1);
// }
  
transform(tasksdatas: Task[], searchTasks: any,searchPriority:any, searchParenttasks: any,searchStartdate:any,searchEnddate:any){
  if (tasksdatas && tasksdatas.length){
      return tasksdatas.filter(tasksdata =>{
          if (searchTasks && tasksdata.task.toLowerCase().indexOf(searchTasks.toLowerCase()) === -1){
              return false;
          }
          if (searchParenttasks && tasksdata.parentTask.toLowerCase().indexOf(searchParenttasks.toLowerCase()) === -1){
              return false;
          }
           
          var toString = tasksdata.priority.toString();
          
          if (searchPriority && toString.indexOf(searchPriority) === -1){
            return false;
        }
        var sdate = tasksdata.startDate.toString();
        if (searchStartdate && sdate.indexOf(searchStartdate) === -1){
            return false;
        }
        var edate = tasksdata.endDate.toString();
        if (searchEnddate && edate.indexOf(searchEnddate) === -1){
            return false;
        }
          return true;
     })
  }
  else{
      return tasksdatas;
  }
}
}

