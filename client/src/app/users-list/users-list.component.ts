import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/datas-list/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public users: any;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.fetchUsers()
      .subscribe(
        res => {
          console.log(res);
          this.users = res;
        },
        error => {
          console.log(error);
        })
  }
}
