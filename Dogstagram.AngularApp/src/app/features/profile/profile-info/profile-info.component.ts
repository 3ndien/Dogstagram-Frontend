import { Component, Input, OnInit } from '@angular/core';
import { DeactivateAccountComponent } from '../deactivate-account-modal/deactivate-account.component';
import { MatDialog } from '@angular/material/dialog';
import { IUserInfo } from '../../models/iuser-info';
import { ChangePictureComponent } from '../edit-profile/change-picture.modal/change-picture.component';
import { ProfileService } from '../../services/profile.service';
import { IPost } from '../models/post.model';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css'],
})
export class ProfileInfoComponent implements OnInit {
  @Input() userInfo!: IUserInfo;
  imageUrl: any;
  constructor(
    private dialog: MatDialog,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.imageUrl = this.profileService.checkProfilPicture();
  }

  deactivateAccount(): void {
    const dialogRef = this.dialog.open(DeactivateAccountComponent);
    dialogRef;
  }

  changeProfilePicture(): void {
    const dialogRef = this.dialog.open(ChangePictureComponent);
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(result);
      if (result) {
        localStorage.setItem('profile-pic', result);
      }
      this.imageUrl = this.profileService.checkProfilPicture();
      this.profileService.getAllFiles().subscribe((body) => {
        this.userInfo = body;
      });
    });
  }
}
