import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../services/datas-list/players.service';

import { Player } from '../models/player/player';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  public players: Player[];

  constructor(private playersService: PlayersService) { }

  ngOnInit() {

    this.playersService.fetchPlayers()
      .subscribe(
        res => {
          console.log(res);
          this.players = res;
        },
        error => {
          console.log(error);
        });

    this.playersService.fetchOnePlayer(2)
      .subscribe(
        res => {
          console.log(res);
        });
  }
}
