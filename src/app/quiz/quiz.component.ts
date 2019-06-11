import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';


@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: any;
  score: number = 0;
  shouldBeHidden: boolean = true;

  constructor(private quizService: QuizService) {
    this.quizService.getQuestions().subscribe(response => {
      this.questions = response;
      this.quizService.setQuestions(response);
      console.log(this.questions);
    });
   }

  ngOnInit() {
  }

  check(form) {
   this.quizService.calculateScore(Object.values(form.value), this.questions);
}

// calculateScore(form) {
//   this.quizService.calculateScore(form, this.questions);
// }

saveName(form) {
  console.log(form.value.name);
  this.quizService.setName(form.value.name);
  this.shouldBeHidden = !this.shouldBeHidden;
}

// addNewResult(form) {
//   this.quizService
//     .addResults({
//       ...form.value})
//     .subscribe(response => {
//       this.questions = response;
//     });
// }

}
