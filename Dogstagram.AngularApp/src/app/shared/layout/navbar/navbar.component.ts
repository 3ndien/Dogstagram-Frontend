import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/authServices/auth.service';
import { CreatePostComponent } from '../create-post.modal/create-post.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() public isLoggedIn!: boolean;
  username: any;
  constructor(
    private authService: AuthService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.checkToken();
    this.username = this.authService.getUsername();
  }

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
