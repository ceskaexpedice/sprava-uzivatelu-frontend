import { ApiService } from './../../services/api.service';

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../../models/user.model';

@Component({
  templateUrl: './user-role-dialog.component.html',
  styleUrls: ['./user-role-dialog.component.scss']
})
export class UserRoleDialogComponent implements OnInit {

  state: string; // none | loading | failure
  role: string;
  user: User;

  constructor(public dialogRef: MatDialogRef<UserRoleDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private api: ApiService) {
                this.user = data.user;
  }

  ngOnInit() {
    this.state = 'none';
  }

  onSave() {
    if (!this.role) {
      return;
    }
    this.state = 'loading';
    this.api.addUserRole(this.user, this.role).subscribe((roles: [string]) => {
      this.dialogRef.close({ roles });
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

}
