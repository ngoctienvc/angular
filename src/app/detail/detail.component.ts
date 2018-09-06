import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
export interface post {
  title: string;
  description: string;
  imgUrl: string;
}
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() post: post;
  private postsUrl = 'api/posts';  // URL to web api
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getPostId();
  }
  getPostId(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getPostIdUrl(id)
      .subscribe(post => this.post = post);
  }
  /** GET post by id. Will 404 if id not found */
  getPostIdUrl(id: number): Observable<post> {
    const url = `${this.postsUrl}/${id}`;
    return this.http.get<post>(url)
  }
}
