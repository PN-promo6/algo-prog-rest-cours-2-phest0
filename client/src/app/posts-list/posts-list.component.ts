import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../services/datas-list/players.service';
import { Post } from '../models/post/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})

export class PostsListComponent implements OnInit {

  public posts: Post[];

  constructor(private playersService: PlayersService) { }

  ngOnInit(): void {
    this.playersService.fetchPosts()
      .subscribe(
        res => {
          console.log(res);
          this.posts = res;
        },
        error => {
          console.log(error);
        });
  }

}
