import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../core/authServices/auth.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public username: any;
  public profile: any;
  public files!: any;
  public videos: any;
  public tags: any;

  constructor(
    private authService: AuthService,
    private profileService: ProfileService
  ) {
    this.username = this.authService.getUsername();
  }

  ngOnInit() {
    this.GetAllPosts();
    this.getProfileDetails();
  }

  getProfileDetails() {
    this.profileService.getProfileDetails().subscribe((data: any) => {
      this.profile = data;
      console.log(data);
    });
  }

  GetAllPosts() {
    this.profileService.getAllFiles().subscribe((data) => {
      this.files = data;
    });
  }
}
