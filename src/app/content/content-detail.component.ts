import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';



@Component({
  template: `
    <h3 highlight>Home Detail</h3>
    <div>Home id: {{id}}</div>
    <br>
    <a routerLink="Home">Home List</a>
  `
})
export class HomesDetailComponent implements OnInit {
  id: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = '789';
  }
}



/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/