import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPost(): Observable<Post[]>{
     return   this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPost(id: number): Observable<Post> {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const urlGet = `${url}/${id}`;
    console.log(urlGet);
    return this.http.get<Post>(`${url}/${id}`);
  }
}
