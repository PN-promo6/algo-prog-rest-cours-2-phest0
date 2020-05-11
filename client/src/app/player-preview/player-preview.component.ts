import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../models/player/player';

@Component({
  selector: 'app-player-preview',
  templateUrl: './player-preview.component.html',
  styleUrls: ['./player-preview.component.css']
})
export class PlayerPreviewComponent implements OnInit {

  @Input() player: Player;

  constructor() { }

  ngOnInit(): void {
  }

}
