import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { PlayerPreviewComponent } from './player-preview/player-preview.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PostPreviewComponent } from './post-preview/post-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponent,
    PlayerPreviewComponent,
    PostsListComponent,
    NavBarComponent,
    PostPreviewComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
