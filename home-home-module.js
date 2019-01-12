(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
                    }
                ]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                        useFactory: (_app_module__WEBPACK_IMPORTED_MODULE_8__["setTranslateLoader"]), deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]]
                    }
                }),
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"]
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar color=\"primary\">\n    <ion-title style=\"text-align:center !important\">\n     <!--<img style=\"vertical-align:middle;display:inline-block\" src=\"../../assets/icon/BBIcon400.png\" height=\"35\" style=\"margin:0\">-->\n     <span style=\"font-weight:normal;font-size:0.95rem\">{{\"login\" | translate | capitalize}}</span>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding color=\"primary\">\n    <ion-grid *ngIf=\"!isLogged()\">\n        <ion-row>\n          <ion-col>\n              <ion-card color=\"primary\" style=\"height:100%;border: none !important;box-shadow: none !important;\">\n                  <ion-card-header>\n                      <ion-card-title style=\"text-align: center\">{{\"teachers\" |translate |capitalize }}</ion-card-title>\n                  </ion-card-header>\n                    <ion-card-content>\n                  <form [formGroup]=\"todo\" (ngSubmit)=\"logForm()\"> \n                      <ion-item>\n                        <ion-input #user id=\"user\" type=\"text\" formControlName=\"user\" placeholder=\"{{'userMoodle' |translate }}\" (keyup.enter)=\"handleLogin($event)\"></ion-input> \n                      </ion-item>\n                      <ion-item>\n                        <ion-input #pass id=\"pass\" type=\"password\" formControlName=\"pass\" placeholder=\"{{'passMoodle' | translate }}\" (keyup.enter)=\"handleLogin($event)\"></ion-input> \n                      </ion-item>\n                      \n                      <ion-button [color]=\"todo.valid? 'tertiary' : 'medium'\" type=\"submit\" expand=\"full\" style=\"height:3rem;width:100%;padding:0px;margin:0px;vertical-align: middle;font-size:1.15rem\" [disabled]=\"!todo.valid\">{{\"dologin\" | translate}}</ion-button>\n                    \n                    </form>\n                  </ion-card-content>\n              </ion-card>\n          </ion-col>\n        </ion-row>\n        <ion-row >\n            <ion-col>\n                <ion-card style=\"height:100%;border: none !important;box-shadow: none !important;\">\n                    <ion-card-header color=\"primary\">\n                        <ion-card-title style=\"text-align: center\">{{\"students\" |translate |capitalize }}\n                        <div style=\"text-align: center;font-size: 0.75rem\">({{\"scanningQR\" |translate}})</div>\n                        </ion-card-title>\n                    </ion-card-header>\n                      <ion-card-content color=\"primary\" style=\"height:100%;text-align:center\">\n                      \n                            <ion-button color=\"primary\" style=\"width:100%;height:auto;box-shadow: none !important;border:none;--box-shadow:none !important\" fill=\"solid\" (click)=\"loginQR()\">\n                                <ion-icon name=\"aperture\" style=\"zoom:6.0;\"></ion-icon>\n                              </ion-button>\n                   \n                     \n                    </ion-card-content>\n                </ion-card>\n            </ion-col>\n          </ion-row>\n      </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  height: 100%; }\n  ion-grid ion-row {\n    height: 50%; }\n  ion-card {\n  margin: 1px !important;\n  padding: 2px !important; }\n  ion-card ion-card-header {\n    padding: 4px; }\n  ion-card ion-card-content {\n    padding: 4px; }\n  ion-input {\n  padding: 2px;\n  font-size: 1.1rem; }\n  ion-card-title {\n  font-weight: normal; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJsb3NzZXJyYW5vL2lvbmljL0JsdWVCaWtlL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQVksRUFLYjtFQU5IO0lBSU0sWUFBVyxFQUNaO0VBRUg7RUFDSSx1QkFBcUI7RUFDckIsd0JBQXNCLEVBT3pCO0VBVEQ7SUFJTSxhQUFXLEVBQ1o7RUFMTDtJQU9NLGFBQVcsRUFDWjtFQUVMO0VBQ0ksYUFBVztFQUNYLGtCQUFnQixFQUNuQjtFQUNEO0VBQ0ksb0JBQW1CLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWdyaWQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgXG4gICAgaW9uLXJvdyB7XG4gICAgICBoZWlnaHQ6IDUwJTtcbiAgICB9XG4gIH1cbiAgaW9uLWNhcmQge1xuICAgICAgbWFyZ2luOjFweCAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZzoycHggIWltcG9ydGFudDtcbiAgICAgIGlvbi1jYXJkLWhlYWRlcntcbiAgICAgICAgcGFkZGluZzo0cHg7XG4gICAgICB9XG4gICAgICBpb24tY2FyZC1jb250ZW50e1xuICAgICAgICBwYWRkaW5nOjRweDtcbiAgICAgIH1cbiAgfVxuICBpb24taW5wdXR7XG4gICAgICBwYWRkaW5nOjJweDtcbiAgICAgIGZvbnQtc2l6ZToxLjFyZW07XG4gIH1cbiAgaW9uLWNhcmQtdGl0bGV7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _servicios_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servicios/authentication.service */ "./src/app/servicios/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _servicios_cloud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../servicios/cloud.service */ "./src/app/servicios/cloud.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var HomePage = /** @class */ (function () {
    function HomePage(formBuilder, loadingController, translate, authS, router, toastCtrl, platform, keyboard, cloud) {
        this.formBuilder = formBuilder;
        this.loadingController = loadingController;
        this.translate = translate;
        this.authS = authS;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.keyboard = keyboard;
        this.cloud = cloud;
        //Creamos el grupo de formulario
        this.todo = this.formBuilder.group({
            user: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[p](.)+')])],
            pass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    HomePage.prototype.ionViewCanEnter = function () {
        return !this.authS.isLogged();
    };
    HomePage.prototype.ionViewCanLeave = function () {
        return !this.authS.isLogged();
    };
    HomePage.prototype.ionViewWillLeave = function () {
    };
    HomePage.prototype.ionViewWillEnter = function () {
        if (this.authS.isLogged()) {
            if (this.authS.getRole() == "prof") {
                this.router.navigate(['profesor']);
            }
            else {
                this.router.navigate(['usuario']);
            }
        }
    };
    HomePage.prototype.loginQR = function () {
        this.router.navigate(['usuario/login']);
    };
    HomePage.prototype.logForm = function () {
        var _this = this;
        this.myloading = this.presentLoading();
        this.authS.logInTeacher(this.todo.value).subscribe(function (data) {
            if (data['token']) {
                _this.authS.setId(_this.todo.value.user, "prof").then(function (result) {
                    /* login as a teacher successfully */
                    _this.loadingController.dismiss().then(function () {
                        _this.authS.avatar = _this.cloud.getPic(_this.todo.value.user).then(function (d) {
                            _this.authS.avatar = d;
                            _this.router.navigate(['profesor']); //Esto no lo tengo claro
                        });
                    });
                })
                    .catch(function (err) {
                    /* error saving data in local, but credentials are correct*/
                    console.log(err);
                    _this.loadingController.dismiss();
                });
            }
            else {
                /* credentials aren't correct */
                _this.loadingController.dismiss();
                _this.presentToastWithOptions(_this.translate.instant("errorCredentials"));
                _this.userinput.setFocus();
                _this.keyboard.show(); //mostramos teclado
            }
        });
        //this.loadingController.dismiss();
    };
    HomePage.prototype.presentLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                message: this.translate.instant("loging...")
                            })];
                    case 1:
                        _a.myloading = _b.sent();
                        return [4 /*yield*/, this.myloading.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.presentToastWithOptions = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: msg,
                            showCloseButton: true,
                            position: 'bottom',
                            closeButtonText: 'Ok',
                            duration: 5000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.isLogged = function () {
        return this.authS.isLogged();
    };
    /*
      Está función es ejecuta al pulsar enter en los campos input del formulario: ver
      código html para conocer cómo se controla el evento
      Controlamos que ocurre si el usuario está iniciado sesión en el formulario
      con el teclado abierto y pulsa enter.
      En ese caso si estamos en el campo usuario tabulamos a contraseña.
      En el caso de estar en contraseña mandamos el formulario para proceder a inicio de sesión
      */
    HomePage.prototype.handleLogin = function (e) {
        if (e.srcElement['id'] == "user") {
            this.passinput.setFocus();
            this.keyboard.show();
        }
        if (e.srcElement['id'] == "pass") {
            if (this.todo.valid) {
                this.logForm();
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('user'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "userinput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('pass'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "passinput", void 0);
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _servicios_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_6__["Keyboard"],
            _servicios_cloud_service__WEBPACK_IMPORTED_MODULE_7__["CloudService"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map