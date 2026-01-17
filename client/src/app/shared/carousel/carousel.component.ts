import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { setInterval } from 'timers/promises';

@Component({
  selector: 'app-carousel',
  standalone:true,
  imports: [MatCardModule, MatIconModule, CommonModule, MatButtonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  currentIndex = 0; interval:any;

  carouselCards = [
    { title: 'Master Angular', description: 'Build dynamic web apps with Angular.', imageUrl: 'https://cdn.worldvectorlogo.com/logos/angular-icon.svg', colorClass: 'text-red-400' },
    { title: 'React Revolution', description: 'Create modern UI with React.', imageUrl: 'https://cdn.worldvectorlogo.com/logos/react-2.svg', colorClass: 'text-blue-400' },
    { title: 'Java Power', description: 'Backend development with Java Spring.', imageUrl: 'https://cdn.worldvectorlogo.com/logos/java-14.svg', colorClass: 'text-orange-400' },
    { title: 'Python Mastery', description: 'Automate and build with Python.', imageUrl: 'https://cdn.worldvectorlogo.com/logos/python-5.svg', colorClass: 'text-yellow-400' },
    { title: 'Full-Stack Node.js', description: 'Build scalable apps with Node.js.', imageUrl: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg', colorClass: 'text-green-400' }
  ];

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.carouselCards.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.carouselCards.length) % this.carouselCards.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  ngOnInit() {
    // this.interval = setInterval(() => {
    //   this.nextSlide();
    // }, 3000);
  }
  ngOnDestroy(){
    clearInterval(this.interval);
  }

}
