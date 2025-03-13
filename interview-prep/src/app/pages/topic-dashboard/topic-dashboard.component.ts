import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-topic-dashboard',
  imports: [],
  templateUrl: './topic-dashboard.component.html',
  styleUrl: './topic-dashboard.component.scss'
})
export class TopicDashboardComponent {
  selectedTopic: string | null = '';

  constructor(private router: ActivatedRoute){}
  
  ngOnInit() {
  
    this.selectedTopic = localStorage.getItem('selectedTopic');
  }
  
}
