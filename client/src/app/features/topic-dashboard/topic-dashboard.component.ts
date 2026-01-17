import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-topic-dashboard',
  imports: [FormsModule, NgIf, NgFor, MatButtonModule,HeaderComponent],
  templateUrl: './topic-dashboard.component.html',
  styleUrl: './topic-dashboard.component.scss'
})
export class TopicDashboardComponent {

  constructor(private router: ActivatedRoute){}

  @Input() topics = [];
  levels = ['Basic', 'Medium', 'Advanced'];
  selectedTopic: string = '';
  currentLevel: string = '';
  code: string = '';
  output: string = '';
  isFreeTier: boolean = true;
  isPaidTier: boolean = false;
  freeQuestions = 50;
  codingAttemptsLeft = 3;

  questions: Record<string, Record<string, string[]>> = {
    Angular: {
      Basic: ['What is Angular?', 'What are components?'],
      Medium: ['Explain Dependency Injection.', 'What is RxJS?'],
      Advanced: ['What is NgZone?', 'Explain Angular Ivy.']
    },
    React: {
      Basic: ['What is React?', 'Explain JSX.'],
      Medium: ['What is Redux?', 'Explain React Hooks.'],
      Advanced: ['What is React Fiber?', 'Explain Server-Side Rendering.']
    },
    JavaScript: {
      Basic: ['What is a closure?', 'What is hoisting?'],
      Medium: ['Explain async/await.', 'What is the Event Loop?'],
      Advanced: ['What is WebAssembly?', 'Explain Proxies.']
    }
  };

  documentationLinks: Record<string, string> = {
    Angular: 'https://angular.io/docs',
    React: 'https://reactjs.org/docs',
    JavaScript: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  };

  get documentationLink() {
    return this.documentationLinks[this.selectedTopic];
  }

  loadTopic() {
    this.currentLevel = '';
  }

  setLevel(level: string) {
    this.currentLevel = level;
  }

  ngOnInit() {
  
    // this.selectedTopic = localStorage.getItem('selectedTopic') as string;
  }

  getQuestions() {
    const questions = this.questions[this.selectedTopic]?.[this.currentLevel] || [];
    return this.isFreeTier ? questions.slice(0, this.freeQuestions) : questions;
  }

  runCode() {
    try {
      const result = new Function(this.code)();
      this.output = result !== undefined ? result.toString() : 'Code executed successfully';
    } catch (error:any) {
      this.output = error.toString();
    }

    if (this.isFreeTier && this.codingAttemptsLeft > 0) {
      this.codingAttemptsLeft--;
    }
  }
}