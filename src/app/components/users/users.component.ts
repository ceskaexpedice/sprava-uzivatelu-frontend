import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getUsers().subscribe( (users: User[]) => {
      this.users = users;
    });
  }

}
