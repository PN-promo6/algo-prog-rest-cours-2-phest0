import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private httpClient: HttpClient) { }

  public fetchPlayers(): Observable<any> {
    // let usersObservable: Observable<any> = this.httpClient.get('http://localhost:3000/players');
    return this.httpClient.get('http://localhost:3000/players');
  }

  public fetchOnePlayer(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/players/:id');
  }
}
