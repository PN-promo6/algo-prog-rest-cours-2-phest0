import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayersListComponent } from './players-list/players-list.component';
import { PlayerPreviewComponent } from './player-preview/player-preview.component';
import { PostsListComponent } from './posts-list/posts-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'players', pathMatch: 'full' },
  { path: 'players', component: PlayersListComponent },
  { path: 'posts', component: PostsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
