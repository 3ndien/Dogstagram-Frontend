import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from './../../core/authServices/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { DeactivateAccountComponent } from './deactivate-account-modal/deactivate-account.component';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit {
  public username: any;
  public profile: any;
  public files!: { label: string; content: string[] };
  public videos: any;
  public tags: any;
  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
    private profileService: ProfileService
  ) {
    this.username = this.authService.getUsername();
  }

  ngOnInit() {
    this.getAllFiles();
    this.profileDetails();
  }

  profileDetails() {
    this.profileService.profileDetails().subscribe((data) => {
      this.profile = data;
      console.log(data);
    });
  }

  getAllFiles() {
    this.profileService.getAllFiles().subscribe((data) => {
      this.files = data;
      console.log(data);
    });
  }

  deactivateAccount(): void {
    const dialogRef = this.dialog.open(DeactivateAccountComponent);
    dialogRef;
  }
}
