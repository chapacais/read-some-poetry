import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './views/author/author.component';
import { AuthorsComponent } from './views/authors/authors.component';
import { HomeComponent } from './views/home/home.component';
import { PoemComponent } from './views/poem/poem.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'poem/:title',
    component: PoemComponent
  },
  {
    path: 'authors',
    component: AuthorsComponent
  },
  {
    path: 'authors/:author',
    component: AuthorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
