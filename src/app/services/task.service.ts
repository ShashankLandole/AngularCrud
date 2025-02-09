import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../domain/Task';
import { Observable } from 'rxjs';
import { response } from 'express';
import { text } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private stringurl : string;

  constructor(private httpClient : HttpClient){
    this.stringurl = 'http://localhost:8080/task';
  }


  public save(task : Task){
    return this.httpClient.post(this.stringurl,task);
  }

  public getAll() : Observable<Task[]>{
    return this.httpClient.get<Task[]>(this.stringurl);
  }

  public delete(id : number){
    return this.httpClient.delete(`${this.stringurl}/${id}`,{responseType : 'text'});
  }

  public update(task:Task, id:number){
    return this.httpClient.put(`${this.stringurl}/${id}`,task);
  }







  
}
