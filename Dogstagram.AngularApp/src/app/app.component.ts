import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthService } from './core/authServices/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'dogstagramApp';
  isUserLoggedIn!: boolean;

  constructor(private authService: AuthService) {}

  ngAfterViewInit(): void {
    this.isUserLoggedIn = this.authService.checkToken();
  }

  ngOnInit() {
    this.authService.isLoggedIn.subscribe((loginStatus: any) => {
      this.isUserLoggedIn = loginStatus;
    });
  }
}
