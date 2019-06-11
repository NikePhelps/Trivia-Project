(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n<a routerLink=\"/quiz\" routerLinkActive=\"active\">Quiz</a>\n<a routerLink=\"/scores\" routerLinkActive=\"active\">Scores</a>\n</nav>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'quiz-project1';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/quiz/quiz.component.ts");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./results/results.component */ "./src/app/results/results.component.ts");
/* harmony import */ var _scores_scores_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scores/scores.component */ "./src/app/scores/scores.component.ts");
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./quiz.service */ "./src/app/quiz.service.ts");











var appRoutes = [
    { path: "", redirectTo: "/quiz", pathMatch: "full" },
    { path: "quiz", component: _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_7__["QuizComponent"] },
    { path: "results", component: _results_results_component__WEBPACK_IMPORTED_MODULE_8__["ResultsComponent"] },
    { path: "scores", component: _scores_scores_component__WEBPACK_IMPORTED_MODULE_9__["ScoresComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _results_results_component__WEBPACK_IMPORTED_MODULE_8__["ResultsComponent"],
                _scores_scores_component__WEBPACK_IMPORTED_MODULE_9__["ScoresComponent"],
                _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_7__["QuizComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_quiz_service__WEBPACK_IMPORTED_MODULE_10__["QuizService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/quiz.service.ts":
/*!*********************************!*\
  !*** ./src/app/quiz.service.ts ***!
  \*********************************/
/*! exports provided: QuizService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizService", function() { return QuizService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var QuizService = /** @class */ (function () {
    function QuizService(http, router) {
        this.http = http;
        this.router = router;
        this.score = 0;
        this.answers = [];
    }
    QuizService.prototype.getQuestions = function () {
        return this.http.get("/api/questions", { responseType: "json" });
    };
    QuizService.prototype.getScores = function () {
        return this.http.get("/api/scores", { responseType: "json" });
    };
    // setScores(name, score) {
    //   this.name = name;
    //   this.score = score;
    // }
    QuizService.prototype.setQuestions = function (questions) {
        this.questions = questions;
    };
    QuizService.prototype.calculateScore = function (answers, questions) {
        for (var i = 1; i < answers.length; i++) {
            if (answers[i] === questions[i - 1].answer) {
                console.log("Got one right!.");
                this.score++;
                console.log(this.score);
                this.postResults({ username: this.name, score: this.score });
            }
        }
        this.router.navigate(["/results"]);
    };
    QuizService.prototype.setName = function (name) {
        this.name = name;
        console.log(name);
    };
    QuizService.prototype.postResults = function (newResult) {
        var _this = this;
        console.log(newResult);
        return this.http.post("/api/scores", newResult, { responseType: "json" })
            .subscribe(function (response) {
            console.log(response);
            _this.router.navigate(["/results"]);
        });
    };
    QuizService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], QuizService);
    return QuizService;
}());



/***/ }),

/***/ "./src/app/quiz/quiz.component.css":
/*!*****************************************!*\
  !*** ./src/app/quiz/quiz.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\r\n    padding: 80px;\r\n    background: blue;\r\n    width: 27%;\r\n    border-radius: 10px;\r\n    display: flex;\r\n    justify-content: center;\r\n    position: relative;\r\n    left: 30%;\r\n    top: 150px;\r\n}\r\n\r\n.name {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\nlabel {\r\n    margin-bottom: 5px;\r\n}\r\n\r\ninput {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.stan {\r\n    margin-bottom: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpei9xdWl6LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9xdWl6L3F1aXouY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogODBweDtcclxuICAgIGJhY2tncm91bmQ6IGJsdWU7XHJcbiAgICB3aWR0aDogMjclO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDMwJTtcclxuICAgIHRvcDogMTUwcHg7XHJcbn1cclxuXHJcbi5uYW1lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnN0YW4ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/quiz/quiz.component.html":
/*!******************************************!*\
  !*** ./src/app/quiz/quiz.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n<form class=\"name\" *ngIf=\"shouldBeHidden\" #nameForm=\"ngForm\" (ngSubmit)=saveName(nameForm)>\n  <h1>Are you super enough?</h1>\n  <label for=\"\">Username:</label>\n  <input type=\"text\" name=name ngModel [value]=\"name\">\n  <button class=\"stan\">Excelsior!</button>\n</form>\n</section>\n<form *ngIf=\"!shouldBeHidden\" #questionForm=\"ngForm\" (ngSubmit)=\"check(questionForm)\">\n    <!-- <label for=\"\">Username:</label>\n    <input type=\"text\" name=name ngModel [value]=\"name\"> -->\n<div *ngFor=\"let question of questions; index as i\">\n  <p>{{ question.question_name }}</p>\n  <input type=\"radio\" name=\"question{{ i + 1 }}\" ngModel [value]=\"question.choice_1\">{{ question.choice_1 }}\n  <input type=\"radio\" name=\"question{{ i + 1 }}\" ngModel [value]=\"question.choice_2\">{{ question.choice_2 }}\n  <input type=\"radio\" name=\"question{{ i + 1 }}\" ngModel [value]=\"question.choice_3\">{{ question.choice_3 }}\n  <input type=\"radio\" name=\"question{{ i + 1 }}\" ngModel [value]=\"question.choice_4\">{{ question.choice_4 }}\n</div>\n<button>Submit</button>\n</form>"

/***/ }),

/***/ "./src/app/quiz/quiz.component.ts":
/*!****************************************!*\
  !*** ./src/app/quiz/quiz.component.ts ***!
  \****************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quiz.service */ "./src/app/quiz.service.ts");



var QuizComponent = /** @class */ (function () {
    function QuizComponent(quizService) {
        var _this = this;
        this.quizService = quizService;
        this.score = 0;
        this.shouldBeHidden = true;
        this.quizService.getQuestions().subscribe(function (response) {
            _this.questions = response;
            _this.quizService.setQuestions(response);
            console.log(_this.questions);
        });
    }
    QuizComponent.prototype.ngOnInit = function () {
    };
    QuizComponent.prototype.check = function (form) {
        this.quizService.calculateScore(Object.values(form.value), this.questions);
    };
    QuizComponent.prototype.calculateScore = function (form) {
        this.quizService.calculateScore(form, this.questions);
    };
    QuizComponent.prototype.saveName = function (form) {
        console.log(form.value.name);
        this.quizService.setName(form.value.name);
        this.shouldBeHidden = !this.shouldBeHidden;
    };
    QuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'quiz',
            template: __webpack_require__(/*! ./quiz.component.html */ "./src/app/quiz/quiz.component.html"),
            styles: [__webpack_require__(/*! ./quiz.component.css */ "./src/app/quiz/quiz.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"]])
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "./src/app/results/results.component.css":
/*!***********************************************!*\
  !*** ./src/app/results/results.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdHMvcmVzdWx0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/results/results.component.html":
/*!************************************************!*\
  !*** ./src/app/results/results.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Results</h1>\n<p>{{ name }} has a score of {{ score }} out of 10.</p>\n<div *ngFor=\"let question of questions; index as i\">\n    <p>{{ i + 1 }}) {{ question.question_name }}</p>\n    <p>User Answer: {{ answer }}</p>\n    <!-- <input type=\"radio\" name=\"{{ i }}\" value=\"{{ answer }}\" [(ngModel)]=\"answer\"/> -->\n    <!-- <label for=\"\">{{ question.choice_1 }}</label>\n    <input type=\"radio\" name=\"{{ i }}\" value=\"{{ question.choice_2 }}\" [(ngModel)]=\"question.selected\"/>\n    <label for=\"\">{{ question.choice_2 }}</label>\n    <input type=\"radio\" name=\"{{ i }}\" value=\"{{ question.choice_3 }}\" [(ngModel)]=\"question.selected\"/>\n    <label for=\"\">{{ question.choice_3 }}</label>\n    <input type=\"radio\" name=\"{{ i }}\" value=\"{{ question.choice_4 }}\" [(ngModel)]=\"question.selected\"/>\n    <label for=\"\">{{ question.choice_4 }}</label> -->\n    <p>Answer: {{ question.answer }}</p>\n  </div>\n  <a routerLink=\"/Scores\" routerLinkActive=\"active\">See scores</a>\n"

/***/ }),

/***/ "./src/app/results/results.component.ts":
/*!**********************************************!*\
  !*** ./src/app/results/results.component.ts ***!
  \**********************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quiz.service */ "./src/app/quiz.service.ts");



var ResultsComponent = /** @class */ (function () {
    function ResultsComponent(quizService) {
        this.quizService = quizService;
        this.answers = [];
        this.questions = this.quizService.questions;
        this.name = this.quizService.name;
        this.score = this.quizService.score;
        this.answers = this.quizService.answers;
    }
    ResultsComponent.prototype.ngOnInit = function () {
    };
    ResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'results',
            template: __webpack_require__(/*! ./results.component.html */ "./src/app/results/results.component.html"),
            styles: [__webpack_require__(/*! ./results.component.css */ "./src/app/results/results.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"]])
    ], ResultsComponent);
    return ResultsComponent;
}());



/***/ }),

/***/ "./src/app/scores/scores.component.css":
/*!*********************************************!*\
  !*** ./src/app/scores/scores.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Njb3Jlcy9zY29yZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/scores/scores.component.html":
/*!**********************************************!*\
  !*** ./src/app/scores/scores.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let score of score; index as i\">\n    <p>{{ score.username }}</p>\n    <p>{{ score.scores }}</p>\n  </div>\n"

/***/ }),

/***/ "./src/app/scores/scores.component.ts":
/*!********************************************!*\
  !*** ./src/app/scores/scores.component.ts ***!
  \********************************************/
/*! exports provided: ScoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoresComponent", function() { return ScoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quiz.service */ "./src/app/quiz.service.ts");



var ScoresComponent = /** @class */ (function () {
    function ScoresComponent(quizService) {
        var _this = this;
        this.quizService = quizService;
        this.quizService.getScores().subscribe(function (response) {
            _this.score = response;
            //   // this.name = this.quizService.name;
            //   // this.score = this.quizService.score;
        });
    }
    ScoresComponent.prototype.ngOnInit = function () {
    };
    ScoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'scores',
            template: __webpack_require__(/*! ./scores.component.html */ "./src/app/scores/scores.component.html"),
            styles: [__webpack_require__(/*! ./scores.component.css */ "./src/app/scores/scores.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"]])
    ], ScoresComponent);
    return ScoresComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ajsmo\Documents\quiz-project1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map