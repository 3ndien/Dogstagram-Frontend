import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import { ChangePictureComponent } from './change-picture.modal/change-picture.component';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  imageUrl!: any;
  editForm: FormGroup;
  constructor(
    private dialog: MatDialog,
    private profileService: ProfileService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.editForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      biography: ['', ''],
    });
  }

  ngOnInit(): void {
    this.imageUrl = this.profileService.checkProfilPicture();
  }

  editProfileDetails(): void {
    this.profileService
      .editProfileDetails(this.editForm.value)
      .subscribe((response: any) => {
        if (response.status === 200) {
          this.router.navigate(['/profile']);
        }
      });
  }

  changeProfilePicture(): void {
    const dialogRef = this.dialog.open(ChangePictureComponent);
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(result);
      if (result) {
        localStorage.setItem('profile-pic', result);
      }
      this.imageUrl = this.profileService.checkProfilPicture();
    });
  }
}
