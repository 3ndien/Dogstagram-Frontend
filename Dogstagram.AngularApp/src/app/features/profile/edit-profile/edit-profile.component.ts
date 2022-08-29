import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangePictureComponent } from './change-picture.modal/change-picture.component';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent {
  imageUrl!: string;
  constructor(private dialog: MatDialog) {}

  changeProfilePicture(): void {
    const dialogRef = this.dialog.open(ChangePictureComponent);
    dialogRef.afterClosed().subscribe((result) => {
      localStorage.setItem('profileImage', result);
      this.imageUrl = localStorage.getItem('profileImage') || '';
    });
  }
}
