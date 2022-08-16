import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/authServices/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'dogstagramApp';
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.isLoggedIn.subscribe((loginStatus: any) => {
      this.isLoggedIn = loginStatus;
    });
  }

  setLoggedInStatus($event: any) {
    this.isLoggedIn = $event;
  }
}
