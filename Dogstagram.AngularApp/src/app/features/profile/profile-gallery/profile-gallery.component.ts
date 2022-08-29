import { Component, Input, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IPost } from '../../store/models/post.model';
import { PostsState } from '../../store/states/posts.state';

@Component({
  selector: 'app-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css'],
})
export class ProfileGalleryComponent implements OnInit {
  @Input() posts!: IPost;

  constructor() {}

  ngOnInit(): void {}
}
