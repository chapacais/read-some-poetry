import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
