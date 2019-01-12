(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["u-home-u-home-module"],{

/***/ "./src/app/usuario/u-home/u-home.module.ts":
/*!*************************************************!*\
  !*** ./src/app/usuario/u-home/u-home.module.ts ***!
  \*************************************************/
/*! exports provided: UHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UHomePageModule", function() { return UHomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _u_home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./u-home.page */ "./src/app/usuario/u-home/u-home.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_customModules_custom_modal_custom_modal_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/customModules/custom-modal/custom-modal.module */ "./src/app/customModules/custom-modal/custom-modal.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _u_home_page__WEBPACK_IMPORTED_MODULE_5__["UHomePage"]
    }
];
var UHomePageModule = /** @class */ (function () {
    function UHomePageModule() {
    }
    UHomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                src_app_customModules_custom_modal_custom_modal_module__WEBPACK_IMPORTED_MODULE_9__["CustomModalModule"],
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
            declarations: [_u_home_page__WEBPACK_IMPORTED_MODULE_5__["UHomePage"]]
        })
    ], UHomePageModule);
    return UHomePageModule;
}());



/***/ }),

/***/ "./src/app/usuario/u-home/u-home.page.html":
/*!*************************************************!*\
  !*** ./src/app/usuario/u-home/u-home.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border color=\"primary\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-toggle>\n        <ion-button>\n          <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\n        </ion-button>\n      </ion-menu-toggle>\n    </ion-buttons>\n    <ion-title>\n      <!--<img style=\"vertical-align:middle;display:inline-block\" src=\"../../assets/icon/BBIcon400.png\" height=\"35\" style=\"margin:0\">-->\n      <span style=\"font-weight:normal\">BlueBike</span>\n    </ion-title>\n    <ion-buttons slot=\"end\" style=\"padding-right:10px\">\n      <ion-icon *ngIf=\"this.canFacebook\" slot=\"icon-only\" (click)=\"share('facebook')\" name=\"logo-facebook\" style=\"margin-left:4px\"></ion-icon>\n\n      <ion-icon *ngIf=\"this.canTwitter\" slot=\"icon-only\" (click)=\"share('twitter')\" name=\"logo-twitter\" style=\"margin-left:4px\"></ion-icon>\n      <ion-icon *ngIf=\"this.canWhatsapp\" slot=\"icon-only\" (click)=\"share('whatsapp')\" name=\"logo-whatsapp\" style=\"margin-left:4px\"></ion-icon>\n      <ion-icon *ngIf=\"this.canInstagram\" slot=\"icon-only\" name=\"logo-instagram\" (click)=\"share('instagram')\" style=\"margin-left:4px\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n\n\n</ion-header>\n\n<ion-content class=\"card-background-page\">\n  <ion-refresher (ionRefresh)=\"this.userlista($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"{{'pulltoload' | translate}}\" refreshingSpinner=\"null\"\n      refreshingText=\"\">\n      <img src=\"../../../assets/imgs/loading.svg\" style=\"width:48px !important;margin:auto;position:relative;top:16px\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-card>\n    <ion-card-header color=\"primary\" style=\"padding:4px!important\">\n      <ion-card-title style=\"text-align: center;font-size:1.2rem;margin:0px;\"><strong style=\"font-size:0.9rem;margin:0px\">{{this.authS.getId()}}</strong></ion-card-title>\n    </ion-card-header>\n    <ion-card-content style=\"padding:0px\">\n      <ion-row>\n        <ion-col size=\"4\" style=\"text-align:center\">\n          <ion-icon name=\"ribbon\" style=\"zoom:3;color:orange;margin-bottom: 0px;\"></ion-icon><strong style=\"display: block;margin-top:-8px!important\">{{\"currents\"\n            | translate}}:{{puntos}}</strong>\n        </ion-col>\n        <ion-col size=\"4\" style=\"text-align:center\">\n          <ion-avatar style=\"background-color:var(--ion-color-primary);margin:auto\">\n            <img [src]=\"getImagen()\" />\n          </ion-avatar>\n        </ion-col>\n        <ion-col size=\"4\" style=\"text-align:center\">\n          <ion-icon name=\"medal\" style=\"zoom:3;color:rebeccapurple;margin-bottom: 0px;\"></ion-icon><strong style=\"display: block;margin-top:-8px!important\">Total:\n            {{puntostotales}}</strong>\n        </ion-col>\n      </ion-row>\n\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card>\n    <ion-card-header color=\"success\" style=\"padding:4px!important\">\n      <ion-card-title style=\"text-align: center;font-size:1.2rem;\">{{\"environmentalimpact\" | translate}}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content style=\"padding:0px\">\n      <ion-row>\n        <ion-col size=\"3\"><img src=\"../../../assets/imgs/tree_mini.png\" style=\"width:70px;margin:0px\"></ion-col>\n        <ion-col size=\"5\">\n          <ion-row></ion-row>\n          <ion-row style=\"padding-top:10px\">\n            <ion-icon name=\"bicycle\" style=\"zoom:1.4;margin-right:6px;color:green\"></ion-icon>\n            <strong style=\"margin-right:6px\">{{viajestotales}}</strong> EcoTrips\n          </ion-row>\n          <ion-row>\n            <ion-icon name=\"navigate\" style=\"zoom:1.4;margin-right:6px;color:darkviolet\"></ion-icon>\n            <strong style=\"margin-right:6px\">{{viajestotales*2}}</strong> Kms\n          </ion-row>\n          <ion-row>\n            <ion-icon name=bonfire color=\"danger\" style=\"zoom:1.4;margin-right:6px\"></ion-icon>\n            <strong style=\"margin-right:6px\">{{viajestotales*100}}</strong> Kcals\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"4\" style=\"text-align:center\">\n          <ion-icon name=\"cloud-done\" style=\"zoom:2.5;color:dodgerblue;margin-bottom: 0px;\"></ion-icon><strong style=\"display: block;margin-top:-9px!important\">CO<sub>2</sub></strong>{{CO2}}\n          Kgs\n        </ion-col>\n      </ion-row>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header color=\"danger\" style=\"padding:4px!important\">\n      <ion-card-title style=\"text-align: center;font-size:1.2rem;\">EcoTrips</ion-card-title>\n    </ion-card-header>\n    <ion-card-content style=\"padding:0px\">\n      <ion-row *ngIf=\"this.viajestotales>0\" (click)=\"viewTrips()\">\n        <ion-col size=\"4\" style=\"text-align:center\">\n          <ion-icon name=\"bicycle\" style=\"zoom:4;color:red;margin-bottom: 0px;\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"4\" style=\"text-align:center;padding-top:10px\">\n          <strong style=\"font-size: 2rem\">{{this.viajestotales}}</strong>\n        </ion-col>\n        <ion-col size=\"4\" style=\"text-align:center\">\n          <ion-icon name=\"eye\" style=\"zoom:4;color:red;margin-bottom: 0px;\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"this.viajestotales==0\">\n        <ion-col size=\"12\" style=\"text-align:justify;padding:10px!important\">\n          <strong style=\"\">{{\"animate\" | translate}}</strong>\n        </ion-col>\n      </ion-row>\n\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header color=\"primary\" style=\"padding:4px!important\">\n      <ion-card-title style=\"text-align: center;font-size:1.2rem;\">{{\"prizes\" | translate}}</ion-card-title>\n    </ion-card-header>\n    <ion-slides pager=\"true\">\n      <ion-slide *ngFor=\"let item of premios;let i = index\" (click)=\"solicitar(item)\">\n        <ion-card>\n          <img src=\"{{item.imagen}}\" style=\"background-color: black;opacity: 0.75;\" />\n          <div class=\"card-title\">{{item.nombre | translate}}</div>\n          <div class=\"card-subtitle\">{{item.coste}}\n            <div *ngIf=\"(this.solicitudactiva)?(this.solicitudactiva.premio==item.nombre):false\" style=\"background-color:red;border-radius:10px;color:white\">{{\"waiting\"\n              | translate}}</div>\n            <div *ngIf=\"(this.solicitudpasada)?(this.solicitudpasada.premio==item.nombre):false\" style=\"background-color:green;border-radius:10px;color:white\">{{\"accepted\"\n              | translate}}</div>\n          </div>\n\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/usuario/u-home/u-home.page.scss":
/*!*************************************************!*\
  !*** ./src/app/usuario/u-home/u-home.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-background-page ion-card {\n  position: relative;\n  text-align: center; }\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2.0em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n  text-shadow: 0px 0px 12px #000000; }\n\n.card-background-page .card-subtitle {\n  font-size: 1.2em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n  text-shadow: 0px 0px 12px #000000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJsb3NzZXJyYW5vL2lvbmljL0JsdWVCaWtlL3NyYy9hcHAvdXN1YXJpby91LWhvbWUvdS1ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdNLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDbkI7O0FBTEw7RUFRTSxtQkFBa0I7RUFDbEIsU0FBUTtFQUNSLGlCQUFnQjtFQUNoQixZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLFlBQVc7RUFDWCxrQ0FBaUMsRUFDbEM7O0FBZkw7RUFrQk0saUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixTQUFRO0VBQ1IsWUFBVztFQUNYLFlBQVc7RUFDWCxrQ0FBaUMsRUFDbEMiLCJmaWxlIjoic3JjL2FwcC91c3VhcmlvL3UtaG9tZS91LWhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcblxuICAgIGlvbi1jYXJkIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIFxuICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMzYlO1xuICAgICAgZm9udC1zaXplOiAyLjBlbTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDEycHggIzAwMDAwMDtcbiAgICB9XG4gIFxuICAgIC5jYXJkLXN1YnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUyJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxMnB4ICMwMDAwMDA7XG4gICAgfVxuICBcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/usuario/u-home/u-home.page.ts":
/*!***********************************************!*\
  !*** ./src/app/usuario/u-home/u-home.page.ts ***!
  \***********************************************/
/*! exports provided: UHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UHomePage", function() { return UHomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_servicios_cloud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicios/cloud.service */ "./src/app/servicios/cloud.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_servicios_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/authentication.service */ "./src/app/servicios/authentication.service.ts");
/* harmony import */ var src_app_customModules_custom_loading_custom_loading_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/customModules/custom-loading/custom-loading.module */ "./src/app/customModules/custom-loading/custom-loading.module.ts");
/* harmony import */ var src_app_customModules_custom_modal_custom_modal_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/customModules/custom-modal/custom-modal.module */ "./src/app/customModules/custom-modal/custom-modal.module.ts");
/* harmony import */ var src_app_customComponent_trips_user_trips_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/customComponent/trips-user/trips-user.component */ "./src/app/customComponent/trips-user/trips-user.component.ts");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/screenshot/ngx */ "./node_modules/@ionic-native/screenshot/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var src_app_customModules_custom_toast_custom_toast_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/customModules/custom-toast/custom-toast.module */ "./src/app/customModules/custom-toast/custom-toast.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/dialogs/ngx */ "./node_modules/@ionic-native/dialogs/ngx/index.js");
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














var UHomePage = /** @class */ (function () {
    function UHomePage(cloud, translate, authS, loading, modal, sanitizer, screenshot, socialSharing, toast, alertController, dialog) {
        this.cloud = cloud;
        this.translate = translate;
        this.authS = authS;
        this.loading = loading;
        this.modal = modal;
        this.sanitizer = sanitizer;
        this.screenshot = screenshot;
        this.socialSharing = socialSharing;
        this.toast = toast;
        this.alertController = alertController;
        this.dialog = dialog;
        /*Campos a mostrar en la interfaz*/
        this.viajestotales = 0; //viajes totales del usuario
        this.CO2 = 0; //CO2 que no se emitido
        this.iduser = 0; //id del usuario para realizar solicitudes (de viajes, de peticiones...)
        this.puntos = 0; //puntos disponibles
        this.puntostotales = 0; //puntos totales
        this.viajes = []; //listado de los viajes realizados
        this.solicitudpasada = null; //¿existe una solicitud aprobada?
        this.solicitudactiva = null; //¿existe una solicitud en trámite?
        this.premios = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__["environment"].premios; //Carga los premios para mostrarlos por pantalla
    }
    UHomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.loading.show("");
        /*Por algún motivo en ocasiones no se cargaba bien la información,
        retrasamos en una décima de segundo para asegurarnos la carga*/
        setTimeout(function () {
            _this.socialSharing.canShareVia("instagram").then(function (d) {
                _this.canInstagram = true;
            }).catch(function (d) {
                console.log(d);
                _this.canInstagram = false;
            });
            _this.socialSharing.canShareVia("whatsapp").then(function (d) {
                _this.canWhatsapp = true;
            }).catch(function () {
                _this.canWhatsapp = false;
            });
            _this.socialSharing.canShareVia("facebook").then(function (d) {
                _this.canFacebook = true;
            }).catch(function () {
                _this.canFacebook = false;
            });
            _this.socialSharing.canShareVia("twitter").then(function (d) {
                _this.canTwitter = true;
            }).catch(function () {
                _this.canTwitter = false;
            });
            _this.userdata().then(function () {
                _this.loading.hide();
            });
        }, 100);
    };
    UHomePage.prototype.share = function (social) {
        var _this = this;
        this.screenshot.URI(80).then(function (d) {
            console.log(d);
            if (!social || social == "instagram") {
                _this.socialSharing.shareViaInstagram("ok", d.URI).then(function (x) {
                    _this.toast.show(_this.translate.instant("shared"));
                }).catch(function () {
                    _this.toast.show(_this.translate.instant("errorsharing"));
                });
            }
            else if (social == "twitter") {
                _this.socialSharing.shareViaTwitter("ok", d.URI).then(function (x) {
                    _this.toast.show(_this.translate.instant("shared"));
                }).catch(function () {
                    _this.toast.show(_this.translate.instant("errorsharing"));
                });
            }
            else if (social == "whatsapp") {
                _this.socialSharing.shareViaWhatsApp("ok", d.URI).then(function (x) {
                    _this.toast.show(_this.translate.instant("shared"));
                }).catch(function () {
                    _this.toast.show(_this.translate.instant("errorsharing"));
                });
            }
            else if (social == "facebook") {
                _this.socialSharing.shareViaFacebook("ok", d.URI).then(function (x) {
                    _this.toast.show(_this.translate.instant("shared"));
                }).catch(function () {
                    _this.toast.show(_this.translate.instant("errorsharing"));
                });
            }
        });
    };
    UHomePage.prototype.ionViewDidEnter = function () {
    };
    UHomePage.prototype.viewTrips = function () {
        var item = {
            nombre: this.authS.getId(),
            puntos: this.puntos,
            total: this.puntostotales,
            totalviajes: this.viajestotales,
            viajes: this.viajes,
            avatar: this.authS.avatar
        };
        this.modal.show(src_app_customComponent_trips_user_trips_user_component__WEBPACK_IMPORTED_MODULE_6__["TripsUserComponent"], item, this);
    };
    UHomePage.prototype.solicitar = function (item) {
        if (this.solicitudactiva) {
            if (this.solicitudactiva.premio == item.nombre) {
                //QUIERE ELIMINAR LA SOLICITUD???
                this.presentAlertConfirm(this.translate.instant("uremove") + this.translate.instant(item.nombre) + this.translate.instant("tcosts") + item.coste + "?", item.nombre);
            }
            else {
                this.dialog.alert(this.translate.instant("waitingaproval"), "");
            }
        }
        else {
            if (+item.coste <= this.puntos) {
                //QUIERES SOLICITARLA??.
                this.presentAlertConfirm(this.translate.instant("urequest") + this.translate.instant(item.nombre) + this.translate.instant("tcosts") + item.coste + "?", item.nombre, item.coste);
            }
            else {
                this.dialog.alert(this.translate.instant("nopoints"), "");
            }
        }
    };
    UHomePage.prototype.userlista = function (event) {
        this.userdata().then(function () {
            event.target.complete();
        });
    };
    UHomePage.prototype.userdata = function () {
        var _this = this;
        this.viajes = [];
        this.solicitudactiva = null;
        this.solicitudpasada = null;
        return new Promise(function (resolve, reject) {
            _this.cloud.getIdFromName(_this.authS.getId()).then(function (d) {
                _this.iduser = d['iduser'];
                _this.viajestotales = d['viajes'];
                _this.puntos = d['puntos'];
                _this.puntostotales = d['total'];
                _this.CO2 = Math.round(_this.viajestotales * 2 * 0.15 * 100) / 100;
                _this.cloud.getTripsOfUser(_this.authS.getId()).then(function (t) {
                    t.forEach(function (t) {
                        _this.viajes.push({ 'fecha': t.data().fecha });
                    });
                    _this.cloud.getReqsOfUser(_this.iduser).subscribe(function (r) {
                        if (r.exists) {
                            if (r.data().estado == 0) { /* */
                                _this.solicitudactiva = r.data();
                            }
                            else {
                                _this.solicitudpasada = r.data();
                            }
                        }
                        resolve();
                    });
                });
            });
        });
    };
    UHomePage.prototype.getImagen = function (d) {
        var img;
        if (d) {
            img = d;
        }
        else {
            img = this.authS.avatar;
        }
        if (img != src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__["environment"].defaultAvatar)
            return this.sanitizer.bypassSecurityTrustUrl(img);
        else
            return img;
    };
    UHomePage.prototype.presentAlertConfirm = function (msg, premio, coste) {
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
                                        console.log("Cancelo petición");
                                        alert.dismiss();
                                    }
                                }, {
                                    text: 'Ok',
                                    cssClass: 'ok',
                                    handler: function () {
                                        alert.dismiss();
                                        _this.loading.show("");
                                        console.log("OK");
                                        if (coste) {
                                            _this.cloud.request(_this.iduser, premio, coste).then(function () {
                                                _this.userdata().then(function () {
                                                    _this.loading.hide();
                                                });
                                            });
                                        }
                                        else {
                                            _this.cloud.removerequest(_this.iduser).then(function () {
                                                _this.userdata().then(function () {
                                                    _this.loading.hide();
                                                });
                                            });
                                        }
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
    UHomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-u-home',
            template: __webpack_require__(/*! ./u-home.page.html */ "./src/app/usuario/u-home/u-home.page.html"),
            styles: [__webpack_require__(/*! ./u-home.page.scss */ "./src/app/usuario/u-home/u-home.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_servicios_cloud_service__WEBPACK_IMPORTED_MODULE_1__["CloudService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            src_app_servicios_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], src_app_customModules_custom_loading_custom_loading_module__WEBPACK_IMPORTED_MODULE_4__["CustomLoadingModule"],
            src_app_customModules_custom_modal_custom_modal_module__WEBPACK_IMPORTED_MODULE_5__["CustomModalModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"],
            _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_9__["Screenshot"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__["SocialSharing"],
            src_app_customModules_custom_toast_custom_toast_module__WEBPACK_IMPORTED_MODULE_11__["CustomToastModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["AlertController"],
            _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_13__["Dialogs"]])
    ], UHomePage);
    return UHomePage;
}());



/***/ })

}]);
//# sourceMappingURL=u-home-u-home-module.js.map