import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Player } from '../../models/player/player'
@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private httpClient: HttpClient) { }

  public fetchPlayers(): Observable<Player[]> {
    // let usersObservable: Observable<any> = this.httpClient.get('http://localhost:3000/players');
    return this.httpClient.get<Player[]>('http://localhost:3000/players');
  }

  public fetchOnePlayer(id): Observable<any> {
    return this.httpClient.get<Player[]>('http://localhost:3000/players/' + id);
  }
}
