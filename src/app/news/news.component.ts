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
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit {
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
  /** GET post from the server */
  getPostsUrl (): Observable<post[]> {
    return this.http.get<post[]>(this.postsUrl)
  }
  /** GET post from the server */
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
