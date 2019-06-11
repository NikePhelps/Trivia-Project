import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';


@Component({
  selector: 'scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {
  name: any;
  score: any;

  constructor(private quizService: QuizService) {
    this.quizService.getScores().subscribe(response => {
      this.score = response;
      console.log(this.score);
  //   // this.name = this.quizService.name;
  //   // this.score = this.quizService.score;
   });
  }

  ngOnInit() {
  }

  // postNewResult(form) {
  //   this.quizService
  //     .postResults({
  //       ...form.value})
  //     .subscribe(response => {
  //       this.cartItems = response;
  //     });
  // }

}
