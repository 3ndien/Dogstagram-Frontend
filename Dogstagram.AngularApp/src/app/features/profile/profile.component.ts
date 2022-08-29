import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './../../core/authServices/auth.service';
import { ProfileService } from '../services/profile.service';
import { IPost } from '../store/models/post.model';
import { Select, Store } from '@ngxs/store';
import { PostsState } from '../store/states/posts.state';
import { Observable, Subscription } from 'rxjs';
import { AddPost } from '../store/actions/post.action';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  @Select(PostsState.getPosts) posts$!: Observable<IPost>;
  private postSubscription: Subscription;
  public username: any;
  public profile: any;
  public files!: IPost;
  public videos: any;
  public tags: any;

  constructor(
    private authService: AuthService,
    private profileService: ProfileService,
    private store: Store
  ) {
    this.username = this.authService.getUsername();
    this.postSubscription = this.posts$.subscribe((posts: IPost) => {
      this.files = posts;
    });
  }
  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }

  ngOnInit() {
    this.GetAllPosts();
    this.getProfileDetails();
  }

  getProfileDetails() {
    this.profileService.profileDetails().subscribe((data: any) => {
      this.profile = data;
      console.log(data);
    });
  }

  GetAllPosts() {
    this.profileService.getAllFiles().subscribe((data) => {
      this.store.dispatch(new AddPost(data));
    });
  }
}
