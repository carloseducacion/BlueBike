(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/usuario/login/login.module.ts":
/*!***********************************************!*\
  !*** ./src/app/usuario/login/login.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "./src/app/usuario/login/login.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                        useFactory: (src_app_app_module__WEBPACK_IMPORTED_MODULE_7__["setTranslateLoader"]), deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                    }
                })
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/usuario/login/login.page.html":
/*!***********************************************!*\
  !*** ./src/app/usuario/login/login.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border color=\"primary\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-toggle>\n        <ion-button>\n          <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\n        </ion-button>\n      </ion-menu-toggle>\n    </ion-buttons>\n    <ion-title>\n      <span style=\"font-weight:normal\">BlueBike</span>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding style=\"background: none transparent;\">\n  <img src=\"../../../assets/imgs/tree.gif\" height=\"100%\">\n</ion-content>"

/***/ }),

/***/ "./src/app/usuario/login/login.page.scss":
/*!***********************************************!*\
  !*** ./src/app/usuario/login/login.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-app {\n  background: none transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJsb3NzZXJyYW5vL2lvbmljL0JsdWVCaWtlL3NyYy9hcHAvdXN1YXJpby9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBNEIsRUFDL0IiLCJmaWxlIjoic3JjL2FwcC91c3VhcmlvL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hcHB7XG4gICAgYmFja2dyb3VuZDogbm9uZSB0cmFuc3BhcmVudDtcbn0gXG4iXX0= */"

/***/ }),

/***/ "./src/app/usuario/login/login.page.ts":
/*!*********************************************!*\
  !*** ./src/app/usuario/login/login.page.ts ***!
  \*********************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "./node_modules/@ionic-native/qr-scanner/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_customModules_custom_loading_custom_loading_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/customModules/custom-loading/custom-loading.module */ "./src/app/customModules/custom-loading/custom-loading.module.ts");
/* harmony import */ var src_app_servicios_cloud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicios/cloud.service */ "./src/app/servicios/cloud.service.ts");
/* harmony import */ var _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/dialogs/ngx */ "./node_modules/@ionic-native/dialogs/ngx/index.js");
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ "./node_modules/@ionic-native/vibration/ngx/index.js");
/* harmony import */ var src_app_customModules_custom_toast_custom_toast_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/customModules/custom-toast/custom-toast.module */ "./src/app/customModules/custom-toast/custom-toast.module.ts");
/* harmony import */ var src_app_servicios_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/servicios/authentication.service */ "./src/app/servicios/authentication.service.ts");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
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











var LoginPage = /** @class */ (function () {
    function LoginPage(qrScanner, alertController, translate, navCtrl, loading, cloud, dialogs, vibration, toast, authS) {
        this.qrScanner = qrScanner;
        this.alertController = alertController;
        this.translate = translate;
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.cloud = cloud;
        this.dialogs = dialogs;
        this.vibration = vibration;
        this.toast = toast;
        this.authS = authS;
        this.id = null;
    }
    LoginPage.prototype.ionViewWillLeave = function () {
        var _this = this;
        //Es llamado cuando realizamos una navegación porque ya hemos escaneado el QR
        window.document.querySelector('ion-app').classList.remove('cameraView');
        this.qrScanner.hide().then(function () {
            _this.qrScanner.destroy();
        });
    };
    LoginPage.prototype.ngOnDestroy = function () {
        var _this = this;
        //Es llamado cuando salimos de la página pulsando el botón atrás.
        window.document.querySelector('ion-app').classList.remove('cameraView');
        this.qrScanner.hide().then(function () {
            _this.qrScanner.destroy();
        });
    };
    LoginPage.prototype.ngOnInit = function () { };
    LoginPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.id = null;
        this.qrScanner.prepare()
            .then(function (status) {
            //Cámara preparada
            if (status.authorized) {
                _this.qrScanner.show(); //Mostramos cámara
                window.document.querySelector('ion-app').classList.add('cameraView'); //ocultamos vista de la app
                _this.scanSub = _this.qrScanner.scan().subscribe(function (d) {
                    _this.analizeData(d); //Hemos leído un QR y vamos a analizarlo
                });
            }
            else if (status.denied) {
                /* No hay permisos, abrimos configuración de permisos*/
                console.log("denied");
                _this.qrScanner.openSettings();
            }
            else {
                // permission was denied, but not permanently. You can ask for permission again at a later time.
                console.log("other denied");
            }
        })
            .catch(function (e) { return console.log('Error is', e); });
    };
    LoginPage.prototype.analizeData = function (d) {
        //BEEP
        this.dialogs.beep(1);
        this.vibration.vibrate(500);
        var regex = new RegExp("[\\r\\n]" + src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].QRf1 + "\\:(.+)", "i");
        var test = d.match(regex);
        var nombre = null;
        if (test) {
            nombre = test[1];
        }
        regex = new RegExp(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].QRf2 + "\\:(.+)", "i");
        test = d.match(regex);
        var grupo = null;
        if (test) {
            grupo = test[1];
        }
        this.id = nombre + " " + grupo;
        if (nombre == "" || nombre == null || grupo == "" || grupo == null) {
            this.pauseQR();
            this.dialogs.alert(this.translate.instant("errorQR"), "Error");
            this.resumeQR();
        }
        else {
            this.pauseQR();
            this.presentAlertConfirm(this.translate.instant('loginas') + ":<br><strong style='font-size:1.2rem'>" + this.id + "</strong> ?", this.id);
        }
    };
    LoginPage.prototype.pauseQR = function () {
        this.qrScanner.hide();
        this.qrScanner.pausePreview();
        window.document.querySelector('ion-app').classList.remove('cameraView');
    };
    LoginPage.prototype.resumeQR = function () {
        var _this = this;
        this.qrScanner.show();
        this.qrScanner.resumePreview();
        this.scanSub = this.qrScanner.scan().subscribe(function (d) {
            _this.analizeData(d);
        });
        window.document.querySelector('ion-app').classList.add('cameraView');
    };
    LoginPage.prototype.closeQR = function () {
        var _this = this;
        window.document.querySelector('ion-app').classList.remove('cameraView');
        this.qrScanner.hide().then(function () {
            _this.qrScanner.destroy();
        });
        this.scanSub.unsubscribe(); // stop scanning
    };
    LoginPage.prototype.LoginUser = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cloud.getIdFromName(id).then(function () {
                _this.cloud.getPic(id).then(function (d) {
                    _this.authS.avatar = d;
                    _this.authS.setId(id, "user").then(function () {
                        resolve();
                    });
                });
            });
        });
    };
    LoginPage.prototype.presentAlertConfirm = function (msg, id) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '',
                            message: msg,
                            cssClass: 'profalert',
                            buttons: [
                                {
                                    text: this.translate.instant("cancel"),
                                    role: 'cancel',
                                    cssClass: 'cancelo',
                                    handler: function (blah) {
                                        alert.dismiss();
                                        _this.resumeQR();
                                    }
                                }, {
                                    text: 'Ok',
                                    cssClass: 'ok',
                                    handler: function () {
                                        _this.loading.show("");
                                        _this.LoginUser(id).then(function () {
                                            alert.dismiss();
                                            _this.loading.hide();
                                            _this.navCtrl.navigateBack(['/usuario/home']);
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/usuario/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/usuario/login/login.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_1__["QRScanner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_customModules_custom_loading_custom_loading_module__WEBPACK_IMPORTED_MODULE_4__["CustomLoadingModule"],
            src_app_servicios_cloud_service__WEBPACK_IMPORTED_MODULE_5__["CloudService"],
            _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_6__["Dialogs"],
            _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_7__["Vibration"],
            src_app_customModules_custom_toast_custom_toast_module__WEBPACK_IMPORTED_MODULE_8__["CustomToastModule"],
            src_app_servicios_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map