import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PhotosComponent } from './components/photos/photos.component';
import { PostsComponent } from './components/posts/posts.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'posts'},
  {path: 'posts', component: PostsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'photos', component: PhotosComponent},
  {path: 'signup', component: SignUpComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
