import { Component, Input, OnInit } from '@angular/core';
import { DeactivateAccountComponent } from '../deactivate-account-modal/deactivate-account.component';
import { MatDialog } from '@angular/material/dialog';
import { IUserInfo } from '../../models/iuser-info';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css'],
})
export class ProfileInfoComponent implements OnInit {
  @Input() userInfo!: IUserInfo;
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  deactivateAccount(): void {
    const dialogRef = this.dialog.open(DeactivateAccountComponent);
    dialogRef;
  }
}
