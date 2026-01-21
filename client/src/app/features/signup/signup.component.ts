import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../../shared/header/header.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, MatIconModule, MatButtonModule, HeaderComponent, MatFormFieldModule, MatInputModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  public showPassword: boolean = false;

  constructor(private router: Router) { }

  signUp() {
    //TODO: Implement sign up
  }

  login() {
    this.router.navigate(['/login']);
  }

  googleLogin() {
    //TODO: Implement google login
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  startMockInterview() {
    //TODO: Redirect to mock interview page
  }
}
