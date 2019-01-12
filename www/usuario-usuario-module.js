(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["usuario-usuario-module"],{

/***/ "./src/app/usuario/tabs-routing.module.ts":
/*!************************************************!*\
  !*** ./src/app/usuario/tabs-routing.module.ts ***!
  \************************************************/
/*! exports provided: TabsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsRoutingModule", function() { return TabsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _usuario_usuario_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../usuario/usuario.page */ "./src/app/usuario/usuario.page.ts");
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
        component: _usuario_usuario_page__WEBPACK_IMPORTED_MODULE_2__["UsuarioPage"],
        children: [
            {
                path: 'login',
                children: [
                    {
                        path: '',
                        loadChildren: "./login/login.module#LoginPageModule"
                    }
                ]
            },
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: "./u-home/u-home.module#UHomePageModule"
                    }
                ]
            },
            {
                path: 'ranking',
                children: [
                    {
                        path: '',
                        loadChildren: './u-ranking/u-ranking.module#URankingPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/usuario/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/usuario/home',
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



/***/ }),

/***/ "./src/app/usuario/usuario.module.ts":
/*!*******************************************!*\
  !*** ./src/app/usuario/usuario.module.ts ***!
  \*******************************************/
/*! exports provided: UsuarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioPageModule", function() { return UsuarioPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _usuario_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./usuario.page */ "./src/app/usuario/usuario.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/usuario/tabs-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _usuario_page__WEBPACK_IMPORTED_MODULE_4__["UsuarioPage"]
    }
];
var UsuarioPageModule = /** @class */ (function () {
    function UsuarioPageModule() {
    }
    UsuarioPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                        useFactory: (_app_module__WEBPACK_IMPORTED_MODULE_6__["setTranslateLoader"]), deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
                    }
                }),
                _tabs_routing_module__WEBPACK_IMPORTED_MODULE_8__["TabsRoutingModule"]
            ],
            declarations: [_usuario_page__WEBPACK_IMPORTED_MODULE_4__["UsuarioPage"]]
        })
    ], UsuarioPageModule);
    return UsuarioPageModule;
}());



/***/ }),

/***/ "./src/app/usuario/usuario.page.html":
/*!*******************************************!*\
  !*** ./src/app/usuario/usuario.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs >\n    \n    <ion-tab-bar slot=\"bottom\" color=\"primary\">\n \n     <ion-tab-button tab=\"home\" *ngIf=\"this.authS.isLogged()\">\n        <ion-icon name=\"home\"></ion-icon>\n        <ion-label>{{\"home\" | translate}}</ion-label>\n      </ion-tab-button>\n \n     <ion-tab-button tab=\"ranking\" *ngIf=\"this.authS.isLogged()\">\n        <ion-icon name=\"podium\"></ion-icon>\n        <ion-label>Ranking</ion-label>\n      </ion-tab-button>\n \n    </ion-tab-bar>\n \n  </ion-tabs>"

/***/ }),

/***/ "./src/app/usuario/usuario.page.scss":
/*!*******************************************!*\
  !*** ./src/app/usuario/usuario.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzdWFyaW8vdXN1YXJpby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/usuario/usuario.page.ts":
/*!*****************************************!*\
  !*** ./src/app/usuario/usuario.page.ts ***!
  \*****************************************/
/*! exports provided: UsuarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioPage", function() { return UsuarioPage; });
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


var UsuarioPage = /** @class */ (function () {
    function UsuarioPage(authS) {
        this.authS = authS;
    }
    UsuarioPage.prototype.ngOnInit = function () {
    };
    UsuarioPage.prototype.ionViewCanLeave = function () {
        /*Se supone que no podrías abandonar si devuelves false, pero no esá funcionando*/
        return (!this.authS.isLogged() || this.authS.getRole() != "user");
    };
    UsuarioPage.prototype.ionViewCanEnter = function () {
        /*Se supone que no podrías entrar en esta página si no devuelves true, pero no está funcionando*/
        return (this.authS.isLogged() && this.authS.getRole() == "user");
    };
    UsuarioPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usuario',
            template: __webpack_require__(/*! ./usuario.page.html */ "./src/app/usuario/usuario.page.html"),
            styles: [__webpack_require__(/*! ./usuario.page.scss */ "./src/app/usuario/usuario.page.scss")]
        }),
        __metadata("design:paramtypes", [_servicios_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], UsuarioPage);
    return UsuarioPage;
}());



/***/ })

}]);
//# sourceMappingURL=usuario-usuario-module.js.map