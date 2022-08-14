import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { CreatePostService } from '../services/create-post.service';
import { AuthService } from '../../core/authServices/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent {
  @Output() postResult = new EventEmitter<string>();
  username = this.authService.getUsername();
  fileName = '';
  img: any;
  formData: FormData = new FormData();

  constructor(
    private authService: AuthService,
    private postService: CreatePostService,
    public dialogRef: MatDialogRef<CreatePostComponent>,
    private dom: DomSanitizer,
    private snackbar: MatSnackBar,
    private profileComponent: ProfileComponent
  ) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      this.formData.append('image', file);
      this.formData.append('username', `${this.username}`);
      this.img = this.dom.bypassSecurityTrustUrl(URL.createObjectURL(file));
    }
  }

  post() {
    this.postService.post(this.formData).subscribe((response) => {
      console.log(response.body.imageUrl);

      if (response.status === 201) {
        this.dialogRef
          .afterClosed()
          .subscribe(() =>
            this.profileComponent.files.content.push(response.body.imageUrl)
          );
        this.dialogRef.close();
        this.snackbar.open('Post is created', '', {
          duration: 3000,
        });
      }
    });
  }
}
