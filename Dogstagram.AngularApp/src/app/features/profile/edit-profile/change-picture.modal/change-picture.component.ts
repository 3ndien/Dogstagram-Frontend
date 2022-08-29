import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from 'src/app/core/authServices/auth.service';
import { CreatePostService } from 'src/app/shared/services/create-post.service';
import { __makeTemplateObject } from 'tslib';
import { ProfileComponent } from '../../profile.component';

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
    private postService: CreatePostService,
    private profileComponent: ProfileComponent,
    private snackBar: MatSnackBar
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
    this.postService.post(this.formData).subscribe((response) => {
      if (response.status === 201) {
        this.dialogRef.close(response.body.imageUrl);
        this.snackBar.open('Profile picture was changed!', '', {
          duration: 3000,
        });
      }
    });
  }
}
