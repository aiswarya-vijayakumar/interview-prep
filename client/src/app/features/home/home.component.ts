import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from '../../shared/header/header.component';
import { CarouselComponent } from '../../shared/carousel/carousel.component';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [MatCardModule, MatToolbarModule, FormsModule, MatButtonModule, ReactiveFormsModule, HeaderComponent,MatIconModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-out', style({ opacity: 1 })),
      ]),
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateY(20px)', opacity: 0 }),
        animate('0.5s ease-out', style({ transform: 'translateY(0)', opacity: 1 })),
      ]),
    ]),
  ],
})
export class HomeComponent {
  userCount = 0; // Update this dynamically later
  feedback = '';
  images=[]
constructor(private router: Router){

}
  login() {
    console.log('Redirecting to login...');
  }

  startFreeTrial() {
    this.router.navigate(['/topic-explorer'])
  }

  subscribe(plan: string) {
    console.log(`Subscribing to ${plan} plan...`);
  }

  submitFeedback() {
    console.log('User feedback:', this.feedback);
    this.feedback = ''; // Clear after submission
  }
}
