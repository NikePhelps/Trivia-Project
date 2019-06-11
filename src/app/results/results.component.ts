import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
questions: any;
name: any;
score: number;
answers: any[] = [];
  
constructor(private quizService: QuizService) {
  this.questions = this.quizService.questions;
    this.name = this.quizService.name;
    this.score = this.quizService.score;
    this.answers = this.quizService.answers;
 }

  ngOnInit() {
  }

  // getResults() {
  //   this.questions = this.quizService.questions;
  //   this.name = this.quizService.name;
  //   this.score = this.quizService.score;
  // }
}
