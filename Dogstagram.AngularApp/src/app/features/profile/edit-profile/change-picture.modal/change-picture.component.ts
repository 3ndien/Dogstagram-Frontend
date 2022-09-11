import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from 'src/app/core/authServices/auth.service';
import { ProfileService } from 'src/app/features/services/profile.service';

@Component({
  selector: 'app-change-picture',
  templateUrl: './change-picture.component.html',
})
export class ChangePictureComponent {
  formData: FormData = new FormData();
  username = this.authService.getUsername();
  image: any;
  filename!: string;
  constructor(
    private dialogRef: MatDialogRef<ChangePictureComponent>,
    private authService: AuthService,
    private dom: DomSanitizer,
    private snackBar: MatSnackBar,
    private profileService: ProfileService
  ) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.filename = file.name;
      this.formData.append('image', file);
      this.formData.append('username', `${this.username}`);
      this.image = this.dom.bypassSecurityTrustUrl(URL.createObjectURL(file));
    }
  }

  postProfileImage() {
    this.profileService
      .setProfilePicture(this.formData)
      .subscribe((body: any) => {
        console.log(body);
        this.dialogRef.close(body);
        this.snackBar.open('Profile picture was changed!', '', {
          duration: 3000,
        });
      });
  }
}
