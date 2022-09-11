import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../../profile/models/post.model';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css'],
})
export class FeedCardComponent implements OnInit {
  @Input() post!: string;
  @Input() profilePicture: any;
  username: any;
  constructor() {}

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
  }
}
