import { UserRoleDialogComponent } from './../../dialogs/user-role-dialog/user-role-dialog.component';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private api: ApiService, private dialog: MatDialog,
    ) { }

  ngOnInit() {
    this.api.getUsers().subscribe( (users: User[]) => {
      this.users = users;
    });
  }

  addUserRole(user: User) {
    const dialogRef = this.dialog.open(UserRoleDialogComponent, {
      data: { user },
    } );
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.roles) {
        user.roles = result.roles;
      }
    });
  }

  removeRole(user: User, role: string) {
    if (role === 'admin') {
      return;
    }
    this.api.removeUserRole(user, role).subscribe((roles: string[]) => {
      user.roles = roles;
    });
  }

}
