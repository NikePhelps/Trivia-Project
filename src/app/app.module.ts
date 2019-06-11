import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultsComponent } from './results/results.component';
import { ScoresComponent } from './scores/scores.component';
import { QuizService } from './quiz.service';

const appRoutes: Routes = [
  {path: "", redirectTo:"/quiz", pathMatch:"full"},
  {path: "quiz", component: QuizComponent},
  {path: "results", component: ResultsComponent},
  {path: "scores", component: ScoresComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    ScoresComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
