import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Task} from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(public http: HttpClient) { }

  getTasks(): Task[] {
    return [
      new Task({ TaskSn: '001', TaskName: '待辦事項 A', State: 'Finish' }),
      new Task({ TaskSn: '002', TaskName: '待辦事項 B', State: 'Doing' }),
      new Task({ TaskSn: '003', TaskName: '待辦事項 C', State: 'None' }),
      new Task({ TaskSn: '004', TaskName: '待辦事項 D', State: 'None' }),
    ];
  }

  getText(): Observable<HttpResponse<string>>{
    return this.http.get('assets/tasks.json', {
      observe: 'response',
      responseType: 'text'
    })
  };

  getList(): Observable<Task[]>{
    return this.http.get<Task[]>('assets/tasks.json');
  }
}
