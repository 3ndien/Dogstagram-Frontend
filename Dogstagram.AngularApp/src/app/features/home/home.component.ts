import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/authServices/auth.service';
import { IPost } from '../profile/models/post.model';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public isLoggedIn!: boolean;
  posts!: IPost;
  profilePicture: any;
  constructor(
    private authService: AuthService,
    private profileService: ProfileService
  ) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.checkToken();
    this.getFeed();
  }

  getFeed(): void {
    this.profilePicture = this.profileService.checkProfilPicture();
    this.profileService.getAllFiles().subscribe((data) => {
      this.posts = data;
    });
  }
}
