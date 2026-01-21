import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { NgIf } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, RouterModule, NgIf, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {

  @Input() hideAuthButtons: boolean = false;

  constructor(private apiService: ApiService, private router: Router) { }

  signUp() {
    this.router.navigate(['/signup'])
  }

  login() {
    this.router.navigate(['/login'])
  }
}
