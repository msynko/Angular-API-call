import { Injectable } from '@angular/core';
import { Post } from './post';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class DataService {

 search=[]

 public data: Post[]

 postUrl : string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
   return this.http.get<Post[]>(this.postUrl)
 }

 listOptions() {
     let post = this.data;
         let postsList = [];
         for (let post of posts) {
             for (let options of this.search) {
                 if (options.title === post.title) {
                   postsList.push(post);
                 }
}
         }
         console.log(postsList);
         return postsList;
   }



}
