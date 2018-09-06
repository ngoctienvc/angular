import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

export interface post {
  title: string;
  description: string;
  imgUrl: string;
}

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})

export class JobsComponent implements OnInit {
  @Input() content: string;
  constructor(private http: HttpClient) { 

  }
  startPage : Number;
  paginationLimit:Number; 
  posts: post[]
  private postsUrl = 'api/posts';  // URL to web api
  ngOnInit() {
    this.getPosts();
  }
  /** GET posts from the server */
  getPostsUrl (): Observable<post[]> {
    return this.http.get<post[]>(this.postsUrl)
  }
  /** GET posts from the server */
  getPosts(): void {
    this.getPostsUrl()
    .subscribe(posts => this.posts = posts);
    this.startPage = 0;
    this.paginationLimit = 3;
  }
  showMoreItems()
  {
     this.paginationLimit = Number(this.paginationLimit) + 3;        
  }
}
