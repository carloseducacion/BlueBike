(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["p-home-p-home-module"],{

/***/ "./src/app/profesor/p-home/p-home.module.ts":
/*!**************************************************!*\
  !*** ./src/app/profesor/p-home/p-home.module.ts ***!
  \**************************************************/
/*! exports provided: PHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PHomePageModule", function() { return PHomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _p_home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./p-home.page */ "./src/app/profesor/p-home/p-home.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var src_app_customModules_custom_loading_custom_loading_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/customModules/custom-loading/custom-loading.module */ "./src/app/customModules/custom-loading/custom-loading.module.ts");
/* harmony import */ var src_app_customModules_custom_modal_custom_modal_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/customModules/custom-modal/custom-modal.module */ "./src/app/customModules/custom-modal/custom-modal.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: '',
        component: _p_home_page__WEBPACK_IMPORTED_MODULE_5__["PHomePage"]
    }
];
var PHomePageModule = /** @class */ (function () {
    function PHomePageModule() {
    }
    PHomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                src_app_customModules_custom_loading_custom_loading_module__WEBPACK_IMPORTED_MODULE_10__["CustomLoadingModule"],
                src_app_customModules_custom_modal_custom_modal_module__WEBPACK_IMPORTED_MODULE_11__["CustomModalModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"],
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
            declarations: [_p_home_page__WEBPACK_IMPORTED_MODULE_5__["PHomePage"]]
        })
    ], PHomePageModule);
    return PHomePageModule;
}());



/***/ }),

/***/ "./src/app/profesor/p-home/p-home.page.html":
/*!**************************************************!*\
  !*** ./src/app/profesor/p-home/p-home.page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border color=\"primary\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-toggle>\n        <ion-button>\n          <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\n        </ion-button>\n      </ion-menu-toggle>\n    </ion-buttons>\n    <ion-title>\n      <!--<img style=\"vertical-align:middle;display:inline-block\" src=\"../../assets/icon/BBIcon400.png\" height=\"35\" style=\"margin:0\">-->\n      <span style=\"font-weight:normal\">BlueBike</span>\n    </ion-title>\n  </ion-toolbar>\n  <ion-card>\n    <ion-card-header color=\"success\" style=\"padding:4px!important\">\n      <ion-card-title style=\"text-align: center;font-size:1.2rem;\">{{\"environmentalimpact\" | translate}}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content style=\"padding:0px\">\n      <ion-row>\n        <ion-col size=\"3\"><img src=\"assets/imgs/tree_mini.png\" style=\"width:70px;margin:0px\"></ion-col>\n        <ion-col size=\"5\">\n          <ion-row></ion-row>\n          <ion-row style=\"padding-top:10px\">\n            <ion-icon name=\"bicycle\" style=\"zoom:1.4;margin-right:6px;color:green\"></ion-icon>\n            <strong style=\"margin-right:6px\">{{viajestotales}}</strong> EcoTrips\n          </ion-row>\n          <ion-row>\n            <ion-icon name=\"navigate\" style=\"zoom:1.4;margin-right:6px;color:darkviolet\"></ion-icon>\n            <strong style=\"margin-right:6px\">{{viajestotales*2}}</strong> Kms\n          </ion-row>\n          <ion-row>\n            <ion-icon name=bonfire color=\"danger\" style=\"zoom:1.4;margin-right:6px\"></ion-icon>\n            <strong style=\"margin-right:6px\">{{viajestotales*80}}</strong> Kcals\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"1\" style=\"text-align:center;\">\n          <ion-row style=\"padding-top:10px\">\n            <ion-icon name=\"body\" style=\"zoom:1.5;color:dodgerblue;margin-bottom: 0px;margin-top:2px\"></ion-icon><strong\n              style=\"display: block;font-size:0.85rem\">{{usuariostotales}}</strong>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"3\" style=\"text-align:center\">\n          <ion-icon name=\"cloud-done\" style=\"zoom:2.5;color:dodgerblue;margin-bottom: 0px;\"></ion-icon><strong style=\"display: block;margin-top:-8px!important\">CO<sub>2</sub></strong>{{CO2}}\n          Kgs\n        </ion-col>\n      </ion-row>\n\n    </ion-card-content>\n  </ion-card>\n  <ion-segment [(ngModel)]=\"category\" (ionChange)=\"slides.slideTo(category)\" style=\"background-color:var(--ion-color-primary)\"\n    color=\"light\">\n    <ion-segment-button layout=\"icon-start\" value=\"0\" style=\"--padding-end:0px;--padding-start:0px\">\n      <ion-icon name=\"mail\" style=\"margin-right:1px;zoom:0.8\"></ion-icon>\n      <ion-label>{{\"requests\" | translate}}</ion-label>\n    </ion-segment-button>\n    <ion-segment-button layout=\"icon-start\" value=\"1\" style=\"--padding-end:0px;--padding-start:0px\">\n      <ion-icon name=\"contacts\" style=\"margin-right:1px;zoom:0.8\"></ion-icon>\n      <ion-label>{{\"users\" | translate}}</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  <div id='indicator' class=\"SwipedTabs-indicatorSegment\" [ngStyle]=\" \n    {'width.%': (100/this.tabs.length)}\" style=\"margin-top:2px\"></div>\n\n</ion-header>\n\n<ion-content>\n  <ion-slides #slides (ionSlideTransitionStart)=\"updateIndicatorPosition();updateCat(slides.getActiveIndex())\"\n    (ionSlideWillChange)=\"updateIndicatorPosition()\" (ionSlideDidChange)=\"updateIndicatorPosition()\" #SwipedTabsSlider\n    (ionSlideDrag)=\"animateIndicator($event)\">\n    <ion-slide>\n      <ion-content class=\"fixed-scroll\">\n        <ion-refresher (ionRefresh)=\"this.updateReq($event)\">\n          <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"{{'pulltoload' | translate}}\"\n            refreshingSpinner=\"null\" refreshingText=\"\">\n            <img src=\"assets/imgs/loading.svg\" style=\"width:48px !important;margin:auto;position:relative;top:16px\">\n          </ion-refresher-content>\n        </ion-refresher>\n        <ion-item *ngFor=\"let item of listadoReq;let i = index\" (click)=\"aprobarSolicitud(item)\">\n          <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\n          <ion-avatar slot=\"end\" style=\"background-color:var(--ion-color-primary)\">\n            <img [src]=\"getImagen(item.avatar)\" style=\"margin:auto;width:100px\">\n          </ion-avatar>\n          <ion-label>\n            <h3>{{item.nombre}}</h3>\n            <h4>{{item.premio | translate | capitalize}}</h4>\n          </ion-label>\n        </ion-item>\n      </ion-content>\n    </ion-slide>\n    <ion-slide>\n      <ion-content class=\"fixed-scroll\">\n        <ion-refresher (ionRefresh)=\"this.updateUser($event,true)\">\n          <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"{{'pulltoload' | translate}}\"\n            refreshingSpinner=\"null\" refreshingText=\"\">\n            <img src=\"assets/imgs/loading.svg\" style=\"width:48px !important;margin:auto;position:relative;top:16px\">\n          </ion-refresher-content>\n        </ion-refresher>\n        <ion-item *ngFor=\"let item of listadoUser;let i = index\" (click)=\"editUser(item)\">\n          <ion-avatar slot=\"start\" style=\"background-color:var(--ion-color-primary)\">\n            <img [src]=\"getImagen(item.avatar)\" style=\"margin:auto;width:100px\">\n          </ion-avatar>\n          <ion-label>\n            <h3>{{item.nombre}}</h3>\n            <h4>{{item.puntos}} {{\"points\" | translate}}</h4>\n          </ion-label>\n          <ion-badge slot=\"end\" color=\"success\">{{item.viajes?item.viajes:0}} {{\"trips\"  | translate}}</ion-badge>\n        </ion-item>\n        <ion-infinite-scroll #infiniteScroll threshold=\"10px\" (ionInfinite)=\"updateUser($event,false)\">\n          <ion-infinite-scroll-content loadingSpinner=\"null\" loadingText=\"\">\n            <img src=\"assets/imgs/loading.svg\" style=\"width:48px !important;margin:auto;position:relative\">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </ion-content>\n    </ion-slide>\n  </ion-slides>\n</ion-content>"

/***/ }),

/***/ "./src/app/profesor/p-home/p-home.page.scss":
/*!**************************************************!*\
  !*** ./src/app/profesor/p-home/p-home.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* la \"rayita\" que indica la navegación entre slides */\n.SwipedTabs-indicatorSegment {\n  transition: 0s all;\n  -webkit-transform-origin: top 0 left 0;\n          transform-origin: top 0 left 0;\n  height: 2px;\n  position: relative;\n  top: -2px;\n  background-color: var(--ion-color-tertiary) !important; }\n.button-native {\n  padding: 0px !important; }\n/* para que el slide ocupe toda la pantalla */\nion-slide.swiper-slide {\n  display: block; }\n.slides {\n  height: 100%; }\n.fixed-scroll {\n  height: 100% !important;\n  overflow-y: scroll;\n  position: relative; }\n.fixed-scroll ::-webkit-scrollbar {\n    display: none !important; }\n::-webkit-scrollbar,\n*::-webkit-scrollbar {\n  display: none; }\nion-card {\n  margin: 0px !important;\n  border-radius: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmVzb3IvcC1ob21lL3AtaG9tZS5wYWdlLnNjc3MiLCIvVXNlcnMvY2FybG9zc2VycmFuby9pb25pYy9CbHVlQmlrZS9zcmMvYXBwL3Byb2Zlc29yL3AtaG9tZS9wLWhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQjtBQ0FqQix1REFBdUQ7QUFDdkQ7RUFJSSxtQkFBbUI7RUFDbkIsdUNBQThCO1VBQTlCLCtCQUE4QjtFQUM5QixZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCx1REFBc0QsRUFDekQ7QUFDRDtFQUNJLHdCQUFzQixFQUN6QjtBQUNELDhDQUE4QztBQUM5QztFQUNJLGVBQWEsRUFDaEI7QUFDRDtFQUNJLGFBQVksRUFDZjtBQUNEO0VBQ0ksd0JBQXFCO0VBQ3JCLG1CQUFpQjtFQUNqQixtQkFBaUIsRUFJcEI7QUFQRDtJQUtRLHlCQUF3QixFQUMzQjtBQUVMOztFQUVFLGNBQWEsRUFDZDtBQUNEO0VBQ0ksdUJBQW9CO0VBQ3BCLG1CQUFrQixFQUNyQiIsImZpbGUiOiJzcmMvYXBwL3Byb2Zlc29yL3AtaG9tZS9wLWhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyogbGEgXCJyYXlpdGFcIiBxdWUgaW5kaWNhIGxhIG5hdmVnYWNpw7NuIGVudHJlIHNsaWRlcyAqL1xuLlN3aXBlZFRhYnMtaW5kaWNhdG9yU2VnbWVudCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMHMgYWxsO1xuICAtbW96LXRyYW5zaXRpb246IDBzIGFsbDtcbiAgLW8tdHJhbnNpdGlvbjogMHMgYWxsO1xuICB0cmFuc2l0aW9uOiAwcyBhbGw7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCAwIGxlZnQgMDtcbiAgaGVpZ2h0OiAycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpICFpbXBvcnRhbnQ7IH1cblxuLmJ1dHRvbi1uYXRpdmUge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDsgfVxuXG4vKiBwYXJhIHF1ZSBlbCBzbGlkZSBvY3VwZSB0b2RhIGxhIHBhbnRhbGxhICovXG5pb24tc2xpZGUuc3dpcGVyLXNsaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLnNsaWRlcyB7XG4gIGhlaWdodDogMTAwJTsgfVxuXG4uZml4ZWQtc2Nyb2xsIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIC5maXhlZC1zY3JvbGwgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4qOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuaW9uLWNhcmQge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwcHg7IH1cbiIsIi8qIGxhIFwicmF5aXRhXCIgcXVlIGluZGljYSBsYSBuYXZlZ2FjacOzbiBlbnRyZSBzbGlkZXMgKi9cbi5Td2lwZWRUYWJzLWluZGljYXRvclNlZ21lbnR7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwcyBhbGw7XG4gICAgLW1vei10cmFuc2l0aW9uOiAgMHMgYWxsO1xuICAgIC1vLXRyYW5zaXRpb246ICAwcyBhbGw7XG4gICAgdHJhbnNpdGlvbjogIDBzIGFsbDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgMCBsZWZ0IDA7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpICFpbXBvcnRhbnQ7XG59XG4uYnV0dG9uLW5hdGl2ZXtcbiAgICBwYWRkaW5nOjBweCAhaW1wb3J0YW50O1xufVxuLyogcGFyYSBxdWUgZWwgc2xpZGUgb2N1cGUgdG9kYSBsYSBwYW50YWxsYSAqL1xuaW9uLXNsaWRlLnN3aXBlci1zbGlkZSB7XG4gICAgZGlzcGxheTpibG9jaztcbn1cbi5zbGlkZXN7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLmZpeGVkLXNjcm9sbHtcbiAgICBoZWlnaHQ6MTAwJSFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3cteTpzY3JvbGw7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLFxuKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuaW9uLWNhcmR7XG4gICAgbWFyZ2luOjBweCFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/profesor/p-home/p-home.page.ts":
/*!************************************************!*\
  !*** ./src/app/profesor/p-home/p-home.page.ts ***!
  \************************************************/
/*! exports provided: PHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PHomePage", function() { return PHomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_servicios_cloud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/cloud.service */ "./src/app/servicios/cloud.service.ts");
/* harmony import */ var src_app_customModules_custom_loading_custom_loading_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/customModules/custom-loading/custom-loading.module */ "./src/app/customModules/custom-loading/custom-loading.module.ts");
/* harmony import */ var src_app_customModules_custom_modal_custom_modal_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/customModules/custom-modal/custom-modal.module */ "./src/app/customModules/custom-modal/custom-modal.module.ts");
/* harmony import */ var src_app_customComponent_solicitud_solicitud_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/customComponent/solicitud/solicitud.component */ "./src/app/customComponent/solicitud/solicitud.component.ts");
/* harmony import */ var src_app_customComponent_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/customComponent/edit-user/edit-user.component */ "./src/app/customComponent/edit-user/edit-user.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_servicios_backbutton_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/servicios/backbutton.service */ "./src/app/servicios/backbutton.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var PHomePage = /** @class */ (function () {
    function PHomePage(route, cloud, loading, modal, sanitizer, back) {
        this.route = route;
        this.cloud = cloud;
        this.loading = loading;
        this.modal = modal;
        this.sanitizer = sanitizer;
        this.back = back;
        this.SwipedTabsIndicator = null;
        this.tabs = ["selectTab(0)", "selectTab(1)"];
        this.listadoReq = [];
        this.listadoUser = [];
        this.category = "0";
        this.ntabs = 2;
        this.viajestotales = 0;
        this.usuariostotales = 0;
        this.CO2 = 0;
    }
    PHomePage.prototype.ionViewDidEnter = function () {
        this.SwipedTabsIndicator = document.getElementById("indicator");
    };
    PHomePage.prototype.ngOnInit = function () {
        this.updateAll(); //solo la primera vez, por fluidez no cargamos si navegamos por las tabs
    };
    PHomePage.prototype.aprobarSolicitud = function (item) {
        this.modal.show(src_app_customComponent_solicitud_solicitud_component__WEBPACK_IMPORTED_MODULE_7__["SolicitudComponent"], item, this);
    };
    PHomePage.prototype.editUser = function (item) {
        this.modal.show(src_app_customComponent_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_8__["EditUserComponent"], item, this);
    };
    PHomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.category = "0";
        this.SwipedTabsSlider.length().then(function (l) {
            _this.ntabs = l;
        });
    };
    /* este método es llamado por le modal cuando se cierra*/
    PHomePage.prototype.onModalClose = function (data) {
        if (this.category == 1) {
            this.updateUser(false, true);
        }
        else {
            this.updateReq();
        }
    };
    PHomePage.prototype.updateAll = function (event) {
        var _this = this;
        this.loading.show("");
        this.cloud.getReqs().then(function (d) {
            _this.listadoReq = d;
            _this.cloud.getUsers(true).then(function (d) {
                _this.viajestotales = _this.cloud.viajestotales;
                _this.CO2 = Math.round((_this.viajestotales * 2 * 0.15) * 100) / 100;
                _this.usuariostotales = _this.cloud.usuariostotales;
                _this.listadoUser = d;
                _this.loading.hide();
                if (event) {
                    event.target.complete();
                }
            });
        });
    };
    PHomePage.prototype.updateReq = function (event) {
        var _this = this;
        if (!event) //no loading ni con refresher ni infinity-scroll
            this.loading.show("");
        this.cloud.getReqs().then(function (d) {
            _this.listadoReq = d;
            if (!event)
                _this.loading.hide();
            if (event) {
                event.target.complete();
            }
        });
    };
    PHomePage.prototype.getImagen = function (img) {
        if (img != src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].defaultAvatar)
            return this.sanitizer.bypassSecurityTrustUrl(img);
        else
            return img;
    };
    PHomePage.prototype.updateUser = function (event, reload) {
        var _this = this;
        if (!event)
            this.loading.show("");
        this.cloud.getUsers(reload).then(function (d) {
            _this.viajestotales = _this.cloud.viajestotales;
            _this.CO2 = Math.round((_this.viajestotales * 2 * 0.15) * 100) / 100;
            _this.usuariostotales = _this.cloud.usuariostotales;
            if (reload) {
                _this.listadoUser = d;
            }
            else {
                d.forEach(function (u) {
                    _this.listadoUser.push(u);
                });
            }
            if (!event)
                _this.loading.hide();
            if (event) {
                event.target.complete();
            }
            _this.ionInfiniteScroll.disabled = !_this.cloud.isInfinityScrollEnabled();
        });
    };
    /* Actualiza la categoría que esté en ese momento activa*/
    PHomePage.prototype.updateCat = function (cat) {
        var _this = this;
        cat.then(function (dat) {
            _this.category = dat;
            _this.category = +_this.category; //to int;
            if (_this.category == 1) {
                if (_this.cloud.isInfinityScrollEnabled()) {
                    _this.ionInfiniteScroll.disabled = false;
                }
                else {
                    _this.ionInfiniteScroll.disabled = true;
                }
            }
            else {
                _this.ionInfiniteScroll.disabled = false;
            }
        });
    };
    /* El método que permite actualizar el indicado cuando se cambia de slide*/
    PHomePage.prototype.updateIndicatorPosition = function () {
        var _this = this;
        this.SwipedTabsSlider.getActiveIndex().then(function (i) {
            if (_this.ntabs > i) { // this condition is to avoid passing to incorrect index
                _this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (i * 100) + '%,0,0)';
            }
        });
    };
    /* El método que anima la "rayita" mientras nos estamos deslizando por el slide*/
    PHomePage.prototype.animateIndicator = function (e) {
        //console.log(e.target.swiper.progress);
        if (this.SwipedTabsIndicator)
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' +
                ((e.target.swiper.progress * (this.ntabs - 1)) * 100) + '%,0,0)';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('SwipedTabsSlider'),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], PHomePage.prototype, "SwipedTabsSlider", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('infiniteScroll'),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
    ], PHomePage.prototype, "ionInfiniteScroll", void 0);
    PHomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-p-home',
            template: __webpack_require__(/*! ./p-home.page.html */ "./src/app/profesor/p-home/p-home.page.html"),
            styles: [__webpack_require__(/*! ./p-home.page.scss */ "./src/app/profesor/p-home/p-home.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_servicios_cloud_service__WEBPACK_IMPORTED_MODULE_4__["CloudService"],
            src_app_customModules_custom_loading_custom_loading_module__WEBPACK_IMPORTED_MODULE_5__["CustomLoadingModule"],
            src_app_customModules_custom_modal_custom_modal_module__WEBPACK_IMPORTED_MODULE_6__["CustomModalModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"],
            src_app_servicios_backbutton_service__WEBPACK_IMPORTED_MODULE_10__["BackbuttonService"]])
    ], PHomePage);
    return PHomePage;
}());



/***/ })

}]);
//# sourceMappingURL=p-home-p-home-module.js.map