import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatButtonModule, MatToolbarModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private apiService: ApiService,private router: Router){}

  signUp(){
    const user = {
      email: 'test@example.com',
      password: '123456',
      authType: 'PASSWORD'
    };

    this.apiService.signup(user).subscribe({
      next: (res: any) => {
        alert(res['message']);
      },
      error: (err:any) => {
        alert('Signup Failed: ' + err.message);
      }
    });
  }

  login(){
    this.router.navigate(['/login'])
    // const credentials = {
    //   email: 'test@example.com',
    //   password: '123456',
    //   authType: 'PASSWORD'
    // };

    // this.apiService.login(credentials).subscribe({
    //   next: (res: any) => {
    //     alert('Login Successful: ' + res['token']);
    //   },
    //   error: (err) => {
    //     alert('Login Failed: ' + err.message);
    //   }
    // });
  }

  googleLogin(){}
}
