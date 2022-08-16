import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/authServices/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isLoggedIn!: boolean;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.isLoggedIn.subscribe((loginStatus: any) => {
      this.isLoggedIn = loginStatus;
    });
  }
}
