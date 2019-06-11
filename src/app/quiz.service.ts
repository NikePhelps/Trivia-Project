import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class QuizService {
  score = 0;
  name: any;
  questions: any;
  answers: any[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  getQuestions() {
    return this.http.get("/api/questions", { responseType: "json"});
  }

  getScores() {
    return this.http.get("/api/scores", { responseType: "json"});
  }

  // setScores(name, score) {
  //   this.name = name;
  //   this.score = score;
  // }
  
  setQuestions(questions) {
    this.questions = questions;
  }

  getAnswers(answers) {
    this.answers = answers;
  }

  calculateScore(answers, questions) {
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === questions[i].answer) {
        console.log("Got one right!.");
        this.score++;
        console.log(this.score);
        this.postResults({ username: this.name, score: this.score });
      }
  }
  this.router.navigate(["/results"]);
  console.log(this.answers);

  }

  setName(name) {
    this.name = name;
    console.log(name);
  }

  postResults(newResult) {
    console.log(newResult);
    return this.http.post("/api/scores", newResult, { responseType: "json"})
    .subscribe(response => {
      console.log(response);
      this.router.navigate(["/results"]);
    });
  }

}

