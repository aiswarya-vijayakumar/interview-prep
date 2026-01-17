import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  imports: [FormsModule, MatIconModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
login(){}
startMockInterview() {
  // Placeholder for mock interview logic
  console.log('Starting mock interview...');
  // You could navigate to a mock interview page, e.g.:
  // this.router.navigate(['/mock-interview']);
}
}
