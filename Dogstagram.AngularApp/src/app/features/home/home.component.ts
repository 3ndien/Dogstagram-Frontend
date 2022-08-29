import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/authServices/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public isLoggedIn!: boolean;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.checkToken();
  }
}
