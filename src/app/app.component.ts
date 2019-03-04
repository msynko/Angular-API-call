import { Component } from '@angular/core';
import { Post } from './post';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'API';

  post: Post[];
  posts: any;

   constructor(private dataService: DataService) {}

    getPosts() {
     this.posts = this.dataService.getPosts()
   }


   ngOnInit() {
     this.dataService.getPosts().subscribe(posts => {
       this.post = posts
       this.dataService.data = posts
     });
   }

   selectedOption(e) {
     this.filteredList();
   }

   filteredList() {
     if (this.dataService.search.length > 0)
       this.post = this.dataService.listOptions();
     else {
       this.post = this.dataService.data;
     }
     console.log(this.post)
   }

}
