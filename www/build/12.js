webpackJsonp([12],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerOrderPageModule", function() { return CustomerOrderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_order__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CustomerOrderPageModule = /** @class */ (function () {
    function CustomerOrderPageModule() {
    }
    CustomerOrderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__customer_order__["a" /* CustomerOrderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__customer_order__["a" /* CustomerOrderPage */]),
            ],
        })
    ], CustomerOrderPageModule);
    return CustomerOrderPageModule;
}());

//# sourceMappingURL=customer-order.module.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CustomerOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CustomerOrderPage = /** @class */ (function () {
    function CustomerOrderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CustomerOrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomerOrderPage');
    };
    CustomerOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-customer-order',template:/*ion-inline-start:"/home/gato_regex/grupo-168-Easycake-ionic-app2/easyCake/src/pages/customer-order/customer-order.html"*/'<!--\n  Generated template for the CustomerOrderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Customer_Order</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <div padding>\n      <ion-segment [(ngModel)]="Pedidos">\n        <ion-segment-button value="entregados">\n          Pedidos entregados\n        </ion-segment-button>\n        <ion-segment-button value="Pendientes">\n          Pedidos Pendientes\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n\n    <div [ngSwitch]="Pedidos">\n      <ion-list *ngSwitchCase="\'Pendientes\'">\n        <ion-item>\n\n          <p padding>\n            Juan Perez,\n            </p>\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                  <div>fecha<br>07/04/02</div>\n                </ion-col>\n                <ion-col>\n                  <div>producto <br>brownie</div>\n                </ion-col>\n                <ion-col>\n                  <div>cantidad<br>27</div>\n                </ion-col>\n                <ion-col>\n                  <div>pedido a: <br>pasteleria delicatto</div>\n                </ion-col>\n              </ion-row>\n\n          </ion-grid>\n\n\n\n\n        </ion-item>\n\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'entregados\'">\n        <ion-item>\n          <p padding>\n          Juan Perez,\n          </p>\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <div>fecha<br>07/05/02</div>\n              </ion-col>\n              <ion-col>\n                <div>producto <br>cupcake</div>\n              </ion-col>\n              <ion-col>\n                <div>cantidad<br>2</div>\n              </ion-col>\n              <ion-col>\n                <div>pedido a: <br>panaderia luis</div>\n              </ion-col>\n            </ion-row>\n\n\n\n\n          </ion-grid>\n        </ion-item>\n\n      </ion-list>\n    </div>\n  </ion-content>\n'/*ion-inline-end:"/home/gato_regex/grupo-168-Easycake-ionic-app2/easyCake/src/pages/customer-order/customer-order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], CustomerOrderPage);
    return CustomerOrderPage;
}());

//# sourceMappingURL=customer-order.js.map

/***/ })

});
//# sourceMappingURL=12.js.map