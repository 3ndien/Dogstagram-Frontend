import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/authServices/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: Router,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    this.isLoading = true;
    this.authService.login(this.loginForm.value).subscribe((response) => {
      if (response.body['message'] === 'Account was restored') {
        this.snackBar.open(response.body['message'], '', {
          duration: 3000,
        });
      }
      this.authService.saveToken(response.body['token']);
      if (response.status === 200 && response.body['token'] !== undefined) {
        this.route.navigate(['/home']);
        this.isLoading = false;
        this.authService.checkToken();
        this.authService.saveProfilePicUrl(response.body.imageUrl);
        this.authService.saveUsername(this.loginForm.value['username']);
      }
    });
  }
}
