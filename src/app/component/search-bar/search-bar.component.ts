import { Component, OnInit, ViewChild, ElementRef,EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../../data.service';
import { Post } from '../../post';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  form = new FormControl();
  filteredOptions: Observable<string[]>;
  allPosts: Post[];
  autoCompleteList: any[]

  @ViewChild('autoInput') autoInput: ElementRef;
  @Output() selectedOption = new EventEmitter();

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getPosts().subscribe(posts => {
      this.allPosts = posts

    });

    this.form.valueChanges.subscribe(userInput => {
      this.completeList(userInput);
    })
  }

  private completeList(input) {
    let categoryList = this.categoryList(input)
    this.autoCompleteList = categoryList;
  }

  categoryList(val) {
    var categoryList = []
    if (typeof val != "string") {
      return [];
    }
    if (val === '' || val === null) {
      return [];
    }
    return val ? this.allPosts.filter(s => s.title.toLowerCase().indexOf(val.toLowerCase()) != -1)
      : this.allPosts;
  }

  displayFn(post: Post) {
    let k = post ? post.title : post;
    return k;
  }

  postsList(event) {
    var posts = event.source.value;
        if(!posts) {
          this.dataService.search=[]
        }
        else {
          console.log("not")

            this.dataService.search.push(posts);
                 this.selectedOption.emit(this.dataService.search)
        }

        this.placeInput();



  }


  removeOption(option) {

    let index = this.dataService.search.indexOf(option);
    if (index >= 0)
        this.dataService.search.splice(index, 1);
        this.placeInput();

        this.selectedOption.emit(this.dataService.search)
}

placeInput() {
  this.autoInput.nativeElement.focus();
  this.autoInput.nativeElement.value = '';
}


}
