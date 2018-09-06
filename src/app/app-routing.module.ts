import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentComponent }  from './content/content.component';
import { NewsComponent }  from './news/news.component';
import { JobsComponent }  from './jobs/jobs.component';

import { DetailComponent }  from './detail/detail.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'Home', component: ContentComponent },
  { path: 'News', component: NewsComponent },
  { path: 'Jobs', component: JobsComponent },
  { path: 'jobdetail/:id', component: DetailComponent },
  { path: 'homedetail/:id', component: DetailComponent },
  { path: 'newdetail/:id', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
