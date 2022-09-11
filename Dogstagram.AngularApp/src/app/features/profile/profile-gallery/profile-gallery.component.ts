import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreatePostComponent } from 'src/app/shared/layout/create-post.modal/create-post.component';
import { IPost } from '../models/post.model';

@Component({
  selector: 'app-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css'],
})
export class ProfileGalleryComponent implements OnInit {
  @Input() posts!: IPost;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  createPostDialog(): void {
    const dialogRef = this.dialog.open(CreatePostComponent);
    dialogRef;
  }
}
