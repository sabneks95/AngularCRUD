import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { IblogPost } from '../dashboard/data-type'

@Injectable({
  providedIn: 'root'
})
export class SreviceService {

  constructor(private http:HttpClient) { }

  getData():Observable<IblogPost[]>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts') as Observable<IblogPost[]>
  }

  postData(data:any){
    return this.http.post('https://jsonplaceholder.typicode.com/posts',data)
  }

  getPostById(id:any){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
  
  updateData(data:any, id:number){
    return this.http.put<any>(`https://jsonplaceholder.typicode.com/posts/${id}`, data)
  }

  deletData(id:number){
    return this.http.delete<any>(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
}
