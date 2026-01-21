import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from "../../shared/header/header.component";
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login',
  imports: [FormsModule, MatIconModule, MatButtonModule, HeaderComponent, MatFormFieldModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router: Router) { }

  login() {
    //TODO: implement login
  }

  googleLogin() {
    //TODO: implement google login
  }

  signUp() {
    this.router.navigate(['/sign-up']);
  }

  startMockInterview() {
    //TODO: redirect to mock interview page
  }
}
