import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/authServices/auth.service';
import { CreatePostComponent } from '../create-post/create-post.component';
import { Router } from '@angular/router';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(
    private authService: AuthService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  createPostDialog(): void {
    const dialogRef = this.dialog.open(CreatePostComponent);
    dialogRef;
  }

  navigateToProfile(): void {
    this.router.navigate(['/profile']);
  }

  logout() {
    this.authService.logout();
    this.authService.checkToken();
  }
}
