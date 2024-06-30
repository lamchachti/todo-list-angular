import { Component } from '@angular/core';
import { Task } from './interfaces/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  description:string=''
  tasks:Task[]=[
    {
      description:"Do home schools",
      isDone:true
    },
    {
      description:"Cook diner",
      isDone:false
    }
  ]
  onRemove(index:number){
    this.tasks.splice(index,1)
  }
  removeDoneTasks(){
    for(let i=0 ; i< this.tasks.length;i++){
      if(this.tasks[i].isDone){
        this.tasks.splice(i,1)
      }
    }
  }
  add(){
    if(this.description){
      const newTask= {
        description:this.description,
        isDone:false
      }
      this.tasks.push(newTask)
    }
  
  }
  clean(){
    this.tasks=[]
  }
}
