import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topic-explorer',
  imports: [HeaderComponent,MatCardModule,FormsModule, ReactiveFormsModule, NgIf,NgFor],
  templateUrl: './topic-explorer.component.html',
  styleUrl: './topic-explorer.component.scss'
})
export class TopicExplorerComponent {
  popularTopics = [
    { name: 'Angular', image: 'angular.png', description: 'Learn Angular, the popular frontend framework.' },
    { name: 'JavaScript', image: 'javascript.png', description: 'Master core JavaScript concepts.' },
    { name: 'React', image: 'react.png', description: 'Explore React for building UI components.' },
    { name: 'Java', image: 'java.jpeg', description: 'Deep dive into Java programming language.' },
    { name: 'Spring Boot', image: 'springboot.png', description: 'Build robust backends with Spring Boot.' },
    { name: 'Python', image: 'python.png', description: 'Learn Python for versatile development.' }
  ];

  allTopics = ['HTML', 'CSS', 'Angular', 'JavaScript', 'Typescript', 'React',
   'Java', 'Spring Boot', 'Python', 'Vue Js', 'Node Js', 'Sql', 'Mongo Db', 'Docker', 'Kubernates',
  'Flutter', 'React Native', 'AWS', 'Azure', 'Agile', 'Figma', 'Jira', 'Storybook',
'Dot net', 'C', 'C#', 'C++', 'Jasmine', 'Jest', 'Ngrx', 'Karma', 'Redux', 'Zustand',
'Microservices', 'Microfrontend'];

  selectedTopic: string | null = null;
  searchQuery: string = '';
filteredTopics: string[] = [];
constructor(private router:Router){}
  filterTopics() {
    const query = this.searchQuery.toLowerCase();
    this.filteredTopics = this.allTopics.filter(topic =>
      topic.toLowerCase().includes(query)
    );
  }
  
  ngOnInit() {
    // this.filteredTopics = this.allTopics; // Initially show all topics
  }

  selectTopic(topic: string) {
    this.searchQuery = topic; // Set the selected topic in input field
    this.filteredTopics = []; // Hide suggestions after selecting
    this.gotoDashboard(topic);
  }

  gotoDashboard(topic: string){
    this.router.navigate(['/topic-dashboard'], { state: { topic: topic } });
    localStorage.setItem('selectedTopic', topic);
  }
}
