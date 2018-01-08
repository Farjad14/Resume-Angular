webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_animations/fade-in.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fadeInAnimation */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var fadeInAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('fadeInAnimation', [
    // route 'enter' transition
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':enter', [
        // styles at start of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ opacity: 0 }),
        // animation and styles at end of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.3s', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ opacity: 1 }))
    ]),
]);


/***/ }),

/***/ "../../../../../src/app/_animations/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fade_in_animation__ = __webpack_require__("../../../../../src/app/_animations/fade-in.animation.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slide_in_out_animation__ = __webpack_require__("../../../../../src/app/_animations/slide-in-out.animation.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__slide_in_out_animation__["a"]; });




/***/ }),

/***/ "../../../../../src/app/_animations/slide-in-out.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slideInOutAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var slideInOutAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('slideInOutAnimation', [
    // end state styles for route container (host)
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
        // the view covers the whole screen with a semi tranparent background
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    })),
    // route 'enter' transition
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':enter', [
        // styles at start of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
            // start with the content positioned off the right of the screen, 
            // -400% is required instead of -100% because the negative position adds to the width of the element
            right: '-400%',
            // start with background opacity set to 0 (invisible)
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }),
        // animation and styles at end of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
            // transition the right position to 0 which slides the content into view
            right: 0,
            // transition the background opacity to 0.8 to fade it in
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
        }))
    ]),
    // route 'leave' transition
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':leave', [
        // animation and styles at end of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
            // transition the right position to -400% which slides the content out of view
            right: '-400%',
            // transition the background opacity to 0 to fade it out
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }))
    ])
]);


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profile_header_header_component__ = __webpack_require__("../../../../../src/app/profile/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_body_body_component__ = __webpack_require__("../../../../../src/app/profile/body/body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__profile_footer_footer_component__ = __webpack_require__("../../../../../src/app/profile/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__welcome_welcome_component__ = __webpack_require__("../../../../../src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__profile_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_11__profile_body_body_component__["a" /* BodyComponent */],
                __WEBPACK_IMPORTED_MODULE_12__profile_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__welcome_welcome_component__["a" /* WelcomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__["a" /* ProfileComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_13__welcome_welcome_component__["a" /* WelcomeComponent */] },
                    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__["a" /* ProfileComponent */] }
                ]),
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/model/skill.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return workplace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Highlights; });
// export const skill: Job = {
//     name: 'CIBC',
//     title: 'Full Stack Developer',
//     jobImageUrl: '../../assets/images/CIBC_logo.png',
//     skills: [
//         {
//             clientView: "Pay for your child's education without breaking the bank",
//         },
//         {
//             clientView: "Reach your retirement goals sooner",
//         },
//         {
//             clientView: "Pay down your debt",
//         }
//     ]
// }
var workplace = {
    "companies": [
        {
            "name": "CIBC", "role": "Full Stack Developer", "iconSrc": "../../../assets/images/CIBC_Logo_small.png",
            "skills": [
                { "item": "Working on an Agile Environment Project with a team from different expertise, using agile tools such as JIRA, Confluence, Slack and Jenkins" },
                { "item": "Developing front-end leveraging HTML5/CSS3, Material Design 2, Angular Flex, Angular 2.0, AJAX, AngularJS, Bootstrap, Knockout.js, reactJs, Emberjs and backed by Express Framework, Node.JS server and mongoDB, using restFul API services, and deploying it to cloud services using Microsoft Azure, using Visual Studio IDE." },
                { "item": "Using GIT, GitHub for subversion control and keeping track of our project" },
                { "item": "Implemented server side microservices, such as Gamification microservice, to keep track of users and user sessions." },
                { "item": "Gained experience by taking TDD approach, as well Unit Testing using Jasmine, Protractor and Karma frameworks." },
                { "item": "Effectively implementing some parts of the first Phase for the first release of a project, which will change the shape of client’s relation," }
            ]
        },
        {
            "name": "Greyters Water", "role": "Application Developer Intern", "iconSrc": "../../../assets/images/greyter.jpg",
            "skills": [
                { "item": "892" },
                { "item": "893" },
                { "item": "894" },
                { "item": "895" },
            ]
        },
        {
            "name": "Pakland", "role": "Web Developer", "iconSrc": "../../../assets/images/pakland-logo.png",
            "skills": [
                { "item": "992" },
                { "item": "993" },
                { "item": "994" },
                { "item": "995" },
            ]
        },
    ]
};
var Highlights = {
    "skills": [
        { "item": "Introducing new frameworks such as Angular2 Material Design & Flex into the current Project at CIBC, backed by Node.js Server, SQL Database and MongoDB" },
        { "item": "Strong understanding of UX & Front-End designs as an App Dev Intern while working Greyters" },
        { "item": "Exhibits creative problem solving and knowledge of TDD while working within the team, experienced in agile environment" },
    ]
};


/***/ }),

/***/ "../../../../../src/app/profile/body/body.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg {\n    background: rgb(255, 255, 255)\n}\n.wordCount{\n  width: 50%;\n  height: 55%;\n}\n.mat-list .mat-list-item .mat-line, .mat-nav-list .mat-list-item .mat-line, .mat-selection-list .mat-list-item .mat-line{\n  white-space: pre-line;\n  \n}\n.secondary-light-theme .mat-card{\n  background: #f7f7f7\n  \n}\n.sideBar{\n  display: block;\n}\n\n.mat-list-item{\n  padding-bottom: 35px;\n  padding-top: 10px;\n}\n\n@media only screen \nand (min-device-width : 320px) \nand (max-device-width : 1024px)  { /* STYLES GO HERE */\n\n  .skills{\n    max-width: 100%;\n  }\n  .mat-list-item{\n    padding-bottom: 75px;\n    padding-top: 10px;\n  }\n.wordCount{\n  display: none;\n}\n\n  .leftSide .mat-card-content{\n    display: none;\n  }\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/body/body.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\" fxLayout=\"column\">\n\n  <div fxLayout=\"row\">\n    <mat-card-content class=\"jobSkills\" fxFlex=\"100\" style=\"margin-top: 15px\"fxLayout=\"column\">\n\n      <mat-card-content *ngFor=\"let mem of workplace.companies\" class=\"secondary-light-theme\">\n        <mat-card class=\"secondary-light-theme\">\n          <mat-card-header>\n            <img mat-card-avatar [src]=mem.iconSrc>\n            <mat-card-title>\n              <h1 class=\"mat-h1\">{{ mem.name }}</h1>\n            </mat-card-title>\n            <mat-card-subtitle>\n              <h2 class=\"mat-h2\">{{ mem.role }}</h2>\n            </mat-card-subtitle>\n          </mat-card-header>\n\n          <mat-divider></mat-divider>\n\n\n          <mat-card-content>\n            <mat-list fxLayout=\"column\">\n              <h3 mat-subheader>Details</h3>\n              <mat-list-item fxLayoutAlign=\"space-between\" *ngFor=\"let skill of mem.skills\">\n                <mat-icon mat-list-icon>done</mat-icon>\n                <h4 mat-line>{{skill.item}}</h4>\n              </mat-list-item>\n            </mat-list>\n          </mat-card-content>\n\n        </mat-card>\n\n      </mat-card-content>\n    </mat-card-content>\n    <mat-card-content class=\"leftSide\" fxFlex=\"40\" fxLayoutAlign=\"center center\" fxLayout=\"column\">\n      <!-- <img class=\"wordCount\" src=\"../../../assets/images/word-cloud.png\"> -->\n      <mat-divider></mat-divider>\n      <mat-card-content class=\"sideBar\"  fxLayout=\"row\" fxLayoutAlign=\"center center\">\n          <mat-list>\n              <mat-list-item *ngFor=\"let skill of qualifications.skills\">\n                <mat-icon mat-list-icon>done</mat-icon>\n                <h4 mat-line>{{skill.item}}</h4>\n              </mat-list-item>\n            </mat-list>\n          \n      </mat-card-content>\n      \n    </mat-card-content>\n\n  </div>\n  \n</div>\n\n<!-- <mat-card-content *ngFor=\"let mem of members.members\"> // ID\n  <mat-card fxFlex=\"53\" class=\"side\" fxLayout=\"row\">\n    {{mem.id}} {{mem.name}}\n    <mat-card-content *ngFor=\"let skill of mem.skills\">\n      {{skill.id}}\n    </mat-card-content>\n  </mat-card>\n</mat-card-content> -->"

/***/ }),

/***/ "../../../../../src/app/profile/body/body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_skill__ = __webpack_require__("../../../../../src/app/model/skill.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { skills } from '../../model/skills'
//import { JobserviceService } from '../../service/jobservice.service';

var BodyComponent = (function () {
    function BodyComponent() {
        this.folders = [
            {
                name: 'Photos',
                updated: new Date('1/1/16'),
                skills: [
                    'okay', 'yo'
                ]
            }
        ];
        this.notes = [
            {
                name: 'Vacation Itinerary',
                updated: new Date('2/20/16'),
            },
            {
                name: 'Kitchen Remodel',
                updated: new Date('1/18/16'),
            }
        ];
        this.workplace = __WEBPACK_IMPORTED_MODULE_1__model_skill__["b" /* workplace */];
        this.qualifications = __WEBPACK_IMPORTED_MODULE_1__model_skill__["a" /* Highlights */];
    }
    BodyComponent.prototype.ngOnInit = function () {
    };
    BodyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-body',
            template: __webpack_require__("../../../../../src/app/profile/body/body.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/body/body.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BodyComponent);
    return BodyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer{\n    position: -webkit-sticky;\n    position: sticky;\n    bottom: 0px;\n    left: 0px;\n    right: 0px;\n    margin-bottom: 0px;\n    text-align: center;\n}\n\n.ok{\n    \n    width: 30px;\n    height: 30px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n  \n  <mat-card class=\"education\">\n      <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <h3 class=\"mat-h3\">University of Toronto, Class of 2017 </h3>\n          <h4 class=\"mat-h4\"> Honours Bachelor of Science (HBSc)</h4>\n          Computer Science Communication, Information &amp;\n          Technology\n      </mat-card-content>\n      \n\n            <mat-card-content  class=\"icons\" fxLayoutAlign=\"space-evenly\" fxLayout=\"row\">\n                <img class=\"ok\" src=\"../../../assets/images/Github.png\">\n                <img class=\"ok\" src=\"../../../assets/images/Google+.png\">\n                <img class=\"ok\" src=\"../../../assets/images/Linkedin.png\">\n                <img class=\"ok\" src=\"../../../assets/images/Instagram.png\">\n                <img class=\"ok\" src=\"../../../assets/images/Snapchat.png\">\n      \n            </mat-card-content>\n\n\n    </mat-card>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/profile/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/profile/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n    overflow: hidden;\n    background-color: #333;\n    position: fixed;\n    top: 0;\n    width: 100%;\n  }\n  /* .img-circular{\n    width: 200px;\n    height: 200px;\n    background-image: url('../../../assets/images/fajo.jpg');\n    background-size: cover;\n    display: block;\n    border-top-left-radius: 100px;\n    -webkit-border-top-left-radius: 100px;\n    -moz-border-top-left-radius: 100px;\n    border-bottom-right-radius: 100px;\n    -webkit-border-bottom-right-radius: 100px;\n    -moz-border-bottom-right-radius: 100px;\n   } */\n   .img-circular{\n    display: inline-block;\n    position: relative;\n    width: 200px;\n    height: 200px;\n    overflow: hidden;\n    border-radius: 50%;\n  }\n  \n  .img-circular img {\n    width: auto;\n    height: 100%;\n    margin-left: -50px;\n  }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"primary-dark-theme\">\n  <mat-card-header class=\"header\" fxLayoutAlign=\"center\">\n    <mat-card-title fxLayoutAlign=\"center\">\n      <div class=\"img-circular\">\n        <img src=\"../../../assets/images/fajo.jpg\">\n      </div>\n    </mat-card-title>\n    <mat-card-title>\n      <h1 class=\"mat-display-3\">Farjad Abbas</h1>\n    </mat-card-title>\n    <mat-card-subtitle fxLayoutAlign=\"center\">\n      <h2 class=\"mat-h2\">Application Developer</h2>\n    </mat-card-subtitle>\n  </mat-card-header>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/profile/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/profile/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-body></app-body>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_index__ = __webpack_require__("../../../../../src/app/_animations/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { skill } from '../model/skill';
// import { skills } from '../model/skills';
// import { JobserviceService } from '../service/jobservice.service';

var ProfileComponent = (function () {
    function ProfileComponent() {
        // this.jobId = 0;
        // this.jobService.getAgentById(this.jobId).then(job => this.job = skill);
        // this.jobsLength = this.jobService.getMaxAgentID();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        // this.jobId = (this.jobId + 1) % this.jobsLength;
        // this.jobService.getAgentById(this.jobId).then(agent => this.job = skill);
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")],
            // make slide in/out animation available to this component
            animations: [__WEBPACK_IMPORTED_MODULE_1__animations_index__["a" /* slideInOutAnimation */]],
            // attach the slide in/out animation to the host (root) element of this component
            host: { '[@slideInOutAnimation]': '' }
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img-circular{\n    display: inline-block;\n    position: relative;\n    width: 200px;\n    height: 200px;\n    overflow: hidden;\n    border-radius: 50%;\n    z-index: 1;\n  }\n  .mat-spinner{\n      z-index: 999;\n  }\n  .img-circular img {\n    width: auto;\n    height: 100%;\n    margin-left: -50px;\n  }\n  .mat-card{\n      background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/../assets/images/toronto.jpg');\n      height: -webkit-fill-available;\n      background-position-x: center;\n      left:0;\n      right:0;\n      position: fixed;\n      background-position: 0px 0px;\n      background-repeat: repeat-x;\n      -webkit-animation: animatedBackground 20s linear infinite;\n              animation: animatedBackground 20s linear infinite;\n      \n    }\n\n    @-webkit-keyframes animatedBackground {\n        from { background-position: 0 0; }\n        to { background-position: 100% 0; }\n    }\n\n    @keyframes animatedBackground {\n        from { background-position: 0 0; }\n        to { background-position: 100% 0; }\n    }\n\n  .dp{\n      -webkit-filter: grayscale(100%);\n              filter: grayscale(100%);\n  }\n  .role{\n    margin-bottom: 50px;\n  }\n  .mat-display-3{\n      font-family: Oswald;\n  }\n  .mat-card-footer{\n    background: rgba(0, 0, 0, 0.5);\n    color: white;\n    padding: 50px 100px 50px 100px;\n    text-align: center;\n    position: fixed;\n    bottom: 20px;\n    left: 10px;\n    right: 10px;\n    font-family: 'Roboto Condensed', sans-serif;\n    word-spacing: 5px;\n    line-height: 20px;\n  }\n  .bg{\n      z-index: 999;\n      position: relative;\n\n  }\n  .mat-spinner{\n        bottom: -200px;\n        z-index: 9999;\n    }\n  .primary-dark-theme .mat-raised-button.mat-primary{\n     background: rgba(0, 0, 0, 0.5);\n }\n svg{\n    width: 200px;\n    height: 200px;\n}\n .sampleClass {float:center;}\n @media only screen  \n and (min-device-width : 320px) \n and (max-device-width : 1024px) {\n     .sampleClass {float:none;}\n     \n }\n @media only screen \n and (min-device-width : 320px) \n and (max-device-width : 1024px) {\n    .img-circular{\n\n        width: 160px;\n        height: 160px;\n\n      }\n      /* .mat-spinner{\n        bottom: -180px;\n    } */\n      .img-circular img {\n        width: auto;\n        height: 100%;\n        margin-left: -38px;\n      }\n      \n    .mat-card-footer{\n        \n        padding: 20px 30px 20px 30px;\n        font-size: 10px;\n        line-height: 10px;\n        /* position: fixed; */\n        /* bottom: 10px;\n        left: 0;\n        right: 0; */\n      }\n      .mat-card{\n            -webkit-animation: animatedBackground 10s linear infinite;\n                    animation: animatedBackground 10s linear infinite;\n      }\n    .mat-display-3, .mat-typography .mat-display-3{\n        font: 400 36px/36px Roboto, \"Helvetica Neue\", sans-serif\n    }\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card fxLayoutAlign=\"center center\" class=\"primary-dark-theme\" fxLayout=\"column\">\n    <mat-spinner [diameter]=\"200\" *ngIf=\"active\" [strokeWidth]=\"8\" color=\"warn\" mode=\"indeterminate\"></mat-spinner>  \n    \n    <mat-card-content>\n      <mat-card-header class=\"header\" fxLayoutAlign=\"center\">\n        <mat-card-title fxLayoutAlign=\"center\">\n          <div class=\"img-circular\">\n            \n            <img class=\"dp\" src=\"../../../assets/images/fajo.jpg\">\n\n          </div>\n        </mat-card-title>\n        <mat-card-title >\n          <!-- <h2 style=\"font-family: Pacifico;\" class=\"mat-h1\">The name is Abbas,</h2> -->\n          <h1 class=\"mat-display-3\">Farjad Abbas</h1>\n        </mat-card-title>\n        <mat-card-subtitle fxLayoutAlign=\"end center\" fxLayout=\"column\">\n          <h2  class=\"role mat-h2\">Application Developer</h2>\n          \n\n          <button (click)=\"btnClick();\" class=\"mat-h2\" mat-raised-button color=\"primary\">My Profile in Angular 2</button>\n          \n        </mat-card-subtitle>\n      </mat-card-header>\n      \n    </mat-card-content>\n\n    </mat-card>\n\n    <mat-card-footer >\n        <h3>\n        I am a Toronto based Full Stack Developer and Introducing new frameworks & Libraries\n        such as Angular 2, AngularJS, react, Material Design & Flex-layout towards clients, \n        backed by Node.js Server, SQL Database and MongoDB. I speak English, Urdu, \n        HTML5, CSS3, Javascript, PHP, Swift, and a bit of French. Exploring new frameworks & Libraries\n        will always remain my passion. </h3>\n  </mat-card-footer>\n\n    \n\n<div class=\"bg\" fxLayoutAlign=\"start\">\n    <mat-spinner [diameter]=\"80\" [strokeWidth]=\"2\" mode=\"indeterminate\"></mat-spinner>  \n    \n    \n</div>\n        "

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_index__ = __webpack_require__("../../../../../src/app/_animations/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WelcomeComponent = (function () {
    function WelcomeComponent(router) {
        this.router = router;
        this.btnClick = function () {
            this.active = true;
            $('mat-card-content').css('margin-bottom', '200px');
            setTimeout(function (router) {
                //this.router.navigate(['/profile']);
            }, 300000);
        };
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-welcome',
            template: __webpack_require__("../../../../../src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__("../../../../../src/app/welcome/welcome.component.css")],
            // make slide in/out animation available to this component
            animations: [__WEBPACK_IMPORTED_MODULE_2__animations_index__["a" /* slideInOutAnimation */]],
            // attach the slide in/out animation to the host (root) element of this component
            host: { '[@slideInOutAnimation]': '' }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map