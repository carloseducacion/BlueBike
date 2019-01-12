(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profesor-profesor-module"],{

/***/ "./src/app/profesor/profesor.module.ts":
/*!*********************************************!*\
  !*** ./src/app/profesor/profesor.module.ts ***!
  \*********************************************/
/*! exports provided: ProfesorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfesorPageModule", function() { return ProfesorPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _profesor_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profesor.page */ "./src/app/profesor/profesor.page.ts");
/* harmony import */ var _profesor_tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../profesor/tabs-routing.module */ "./src/app/profesor/tabs-routing.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ProfesorPageModule = /** @class */ (function () {
    function ProfesorPageModule() {
    }
    ProfesorPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                        useFactory: (_app_module__WEBPACK_IMPORTED_MODULE_7__["setTranslateLoader"]), deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                    }
                }),
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _profesor_tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsRoutingModule"]
            ],
            declarations: [_profesor_page__WEBPACK_IMPORTED_MODULE_4__["ProfesorPage"]]
        })
    ], ProfesorPageModule);
    return ProfesorPageModule;
}());



/***/ }),

/***/ "./src/app/profesor/profesor.page.html":
/*!*********************************************!*\
  !*** ./src/app/profesor/profesor.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-tabs>\n    \n       <ion-tab-bar slot=\"bottom\" color=\"primary\">\n    \n        <ion-tab-button tab=\"home\">\n           <ion-icon name=\"home\"></ion-icon>\n           <ion-label>{{\"home\" | translate}}</ion-label>\n         </ion-tab-button>\n    \n        <ion-tab-button tab=\"ranking\">\n           <ion-icon name=\"podium\"></ion-icon>\n           <ion-label>Ranking</ion-label>\n         </ion-tab-button>\n\n        <ion-tab-button tab=\"scanner\">\n           <ion-icon name=\"aperture\"></ion-icon>\n           <ion-label>{{\"scanner\" | translate}}</ion-label>\n         </ion-tab-button>\n    \n       </ion-tab-bar>\n    \n     </ion-tabs>\n  "

/***/ }),

/***/ "./src/app/profesor/profesor.page.scss":
/*!*********************************************!*\
  !*** ./src/app/profesor/profesor.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2Zlc29yL3Byb2Zlc29yLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/profesor/profesor.page.ts":
/*!*******************************************!*\
  !*** ./src/app/profesor/profesor.page.ts ***!
  \*******************************************/
/*! exports provided: ProfesorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfesorPage", function() { return ProfesorPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servicios/authentication.service */ "./src/app/servicios/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfesorPage = /** @class */ (function () {
    function ProfesorPage(authS) {
        this.authS = authS;
    }
    ProfesorPage.prototype.ngOnInit = function () {
    };
    ProfesorPage.prototype.ionViewCanLeave = function () {
        return (!this.authS.isLogged() || this.authS.getRole() != "prof");
    };
    ProfesorPage.prototype.ionViewCanEnter = function () {
        return (!this.authS.isLogged() && this.authS.getRole() == "prof");
    };
    ProfesorPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profesor',
            template: __webpack_require__(/*! ./profesor.page.html */ "./src/app/profesor/profesor.page.html"),
            styles: [__webpack_require__(/*! ./profesor.page.scss */ "./src/app/profesor/profesor.page.scss")]
        }),
        __metadata("design:paramtypes", [_servicios_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], ProfesorPage);
    return ProfesorPage;
}());



/***/ }),

/***/ "./src/app/profesor/tabs-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/profesor/tabs-routing.module.ts ***!
  \*************************************************/
/*! exports provided: TabsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsRoutingModule", function() { return TabsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _profesor_profesor_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profesor/profesor.page */ "./src/app/profesor/profesor.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _profesor_profesor_page__WEBPACK_IMPORTED_MODULE_2__["ProfesorPage"],
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: "./p-home/p-home.module#PHomePageModule"
                    }
                ]
            },
            {
                path: 'ranking',
                children: [
                    {
                        path: '',
                        loadChildren: './p-ranking/p-ranking.module#PRankingPageModule'
                    }
                ]
            },
            {
                path: 'scanner',
                children: [
                    {
                        path: '',
                        loadChildren: './p-scanner/p-scanner.module#PScannerPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/profesor/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/profesor/home',
        pathMatch: 'full'
    }
];
var TabsRoutingModule = /** @class */ (function () {
    function TabsRoutingModule() {
    }
    TabsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], TabsRoutingModule);
    return TabsRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=profesor-profesor-module.js.map