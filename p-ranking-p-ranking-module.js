(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["p-ranking-p-ranking-module"],{

/***/ "./src/app/profesor/p-ranking/p-ranking.module.ts":
/*!********************************************************!*\
  !*** ./src/app/profesor/p-ranking/p-ranking.module.ts ***!
  \********************************************************/
/*! exports provided: PRankingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRankingPageModule", function() { return PRankingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _p_ranking_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./p-ranking.page */ "./src/app/profesor/p-ranking/p-ranking.page.ts");
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
        component: _p_ranking_page__WEBPACK_IMPORTED_MODULE_5__["PRankingPage"]
    }
];
var PRankingPageModule = /** @class */ (function () {
    function PRankingPageModule() {
    }
    PRankingPageModule = __decorate([
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
            declarations: [_p_ranking_page__WEBPACK_IMPORTED_MODULE_5__["PRankingPage"]]
        })
    ], PRankingPageModule);
    return PRankingPageModule;
}());



/***/ }),

/***/ "./src/app/profesor/p-ranking/p-ranking.page.html":
/*!********************************************************!*\
  !*** ./src/app/profesor/p-ranking/p-ranking.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border color=\"primary\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-toggle>\n        <ion-button>\n          <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\n        </ion-button>\n      </ion-menu-toggle>\n    </ion-buttons>\n    <ion-title>\n      <!--<img style=\"vertical-align:middle;display:inline-block\" src=\"../../assets/icon/BBIcon400.png\" height=\"35\" style=\"margin:0\">-->\n      <span style=\"font-weight:normal\">BlueBike</span>\n    </ion-title>\n  </ion-toolbar>\n  <ion-card color=\"primary\">\n    <ion-row>\n      <ion-col size=\"4\" style=\"text-align: center\">\n        <ion-avatar style=\"background-color:var(--ion-color-primary);position:relative;top:34px\">\n          <img [src]=\"this.urlFirst?getImagen(this.urlSecond):'../../../assets/icon/defaultAvatar.png'\" style=\"width:100px;margin-left:1.5rem\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"4\" style=\"text-align: center\">\n        <ion-avatar style=\"background-color:var(--ion-color-primary);position:relative;top:5px\">\n          <img [src]=\"this.urlSecond?getImagen(this.urlFirst):'../../../assets/icon/defaultAvatar.png'\" style=\"width:100px;margin-left:1.3rem\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"4\" style=\"text-align: center\">\n        <ion-avatar style=\"background-color:var(--ion-color-primary);position:relative;top:47px\">\n          <img [src]=\"this.urlThird?getImagen(this.urlThird):'../../../assets/icon/defaultAvatar.png'\" style=\"width:100px;margin-left:1.25rem\">\n        </ion-avatar>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <img src=\"../../../assets/imgs/podium.png\">\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)=\"this.updateRanking($event,true)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"{{'pulltoload' | translate}}\" refreshingSpinner=\"null\"\n      refreshingText=\"\">\n      <img src=\"../../../assets/imgs/loading.svg\" style=\"width:48px !important;margin:auto;position:relative;top:16px\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-item *ngFor=\"let item of listadoRanking;let i = index\">\n    <ion-icon *ngIf=\"i<3\" name=\"medal\" slot=\"start\" [style.color]=\"i==0?'gold':(i==1?'grey':'orange')\"></ion-icon>\n    <ion-icon *ngIf=\"i>2\" name=\"person\" slot=\"start\"></ion-icon>\n    <ion-avatar slot=\"end\" style=\"background-color:var(--ion-color-primary)\">\n      <img [src]=\"getImagen(item.avatar)\" style=\"margin:auto;width:100px\">\n    </ion-avatar>\n    <ion-label>\n      <h3>#{{(i+1)}}\n        {{item.nombre}}</h3>\n      <h4>{{item.total}} {{\"points\" | translate}}</h4>\n    </ion-label>\n  </ion-item>\n\n  <ion-infinite-scroll #infiniteScroll threshold=\"10px\" (ionInfinite)=\"updateRanking($event,false)\">\n    <ion-infinite-scroll-content loadingSpinner=\"null\" loadingText=\"\">\n      <img src=\"../../../assets/imgs/loading.svg\" style=\"width:48px !important;margin:auto;position:relative\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>"

/***/ }),

/***/ "./src/app/profesor/p-ranking/p-ranking.page.scss":
/*!********************************************************!*\
  !*** ./src/app/profesor/p-ranking/p-ranking.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2Zlc29yL3AtcmFua2luZy9wLXJhbmtpbmcucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/profesor/p-ranking/p-ranking.page.ts":
/*!******************************************************!*\
  !*** ./src/app/profesor/p-ranking/p-ranking.page.ts ***!
  \******************************************************/
/*! exports provided: PRankingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRankingPage", function() { return PRankingPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_customModules_custom_loading_custom_loading_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/customModules/custom-loading/custom-loading.module */ "./src/app/customModules/custom-loading/custom-loading.module.ts");
/* harmony import */ var src_app_servicios_cloud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/cloud.service */ "./src/app/servicios/cloud.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PRankingPage = /** @class */ (function () {
    function PRankingPage(route, loading, cloud, sanatizer) {
        this.route = route;
        this.loading = loading;
        this.cloud = cloud;
        this.sanatizer = sanatizer;
        this.listadoRanking = [];
        this.urlFirst = null;
        this.urlSecond = null;
        this.urlThird = null;
    }
    PRankingPage.prototype.ngOnInit = function () {
        this.updateRanking(null, true);
    };
    PRankingPage.prototype.ionViewWillEnter = function () {
        //console.log(this.route.snapshot.pathFromRoot[this.route.snapshot.pathFromRoot.length-1].component['name']);
    };
    PRankingPage.prototype.updateRanking = function (event, reload) {
        var _this = this;
        //this.listadoUser=[];
        if (!event)
            this.loading.show("");
        this.cloud.getRanking(reload).then(function (d) {
            console.log(d);
            if (reload) {
                _this.listadoRanking = d;
            }
            else {
                d.forEach(function (u) {
                    _this.listadoRanking.push(u);
                });
            }
            if (!event)
                _this.loading.hide();
            if (event) {
                event.target.complete();
            }
            if (_this.listadoRanking[0])
                _this.urlFirst = _this.listadoRanking[0].avatar;
            if (_this.listadoRanking[1])
                _this.urlSecond = _this.listadoRanking[1].avatar;
            if (_this.listadoRanking[2])
                _this.urlThird = _this.listadoRanking[2].avatar;
            _this.ionInfiniteScroll.disabled = !_this.cloud.isRInfinityScrollEnabled();
        });
    };
    PRankingPage.prototype.getImagen = function (img) {
        if (img != src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].defaultAvatar)
            return this.sanatizer.bypassSecurityTrustUrl(img);
        else
            return img;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('infiniteScroll'),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"])
    ], PRankingPage.prototype, "ionInfiniteScroll", void 0);
    PRankingPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-p-ranking',
            template: __webpack_require__(/*! ./p-ranking.page.html */ "./src/app/profesor/p-ranking/p-ranking.page.html"),
            styles: [__webpack_require__(/*! ./p-ranking.page.scss */ "./src/app/profesor/p-ranking/p-ranking.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_customModules_custom_loading_custom_loading_module__WEBPACK_IMPORTED_MODULE_2__["CustomLoadingModule"],
            src_app_servicios_cloud_service__WEBPACK_IMPORTED_MODULE_3__["CloudService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]])
    ], PRankingPage);
    return PRankingPage;
}());



/***/ })

}]);
//# sourceMappingURL=p-ranking-p-ranking-module.js.map