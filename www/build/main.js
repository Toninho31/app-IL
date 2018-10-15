webpackJsonp([0],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
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
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__report_report__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__report_report__["a" /* ReportPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/antoinebonnet/myApp/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Report" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/antoinebonnet/myApp/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportPage = /** @class */ (function () {
    function ReportPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.test = "Antoine bonney";
        this.stateText = false;
        this.color = "#FF0000";
    }
    ReportPage.prototype.buttonClicked = function () {
        this.test = "Je suis un indien";
        this.color = "#9FFFB8";
    };
    ReportPage.prototype.setColor = function (event) {
        console.log(event);
    };
    ReportPage.prototype.colorTouchStart = function () {
    };
    ReportPage.prototype.colorTouchEnd = function () {
    };
    ReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-report',template:/*ion-inline-start:"/Users/antoinebonnet/myApp/src/pages/report/report.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Report\n      {{test}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button (click)="buttonClicked()">Default</button>\n  <color-picker [hexColor]="color" (colorChanged)="setColor($event)"(colorTouchStart)="colorTouchStart()" (colorTouchEnd)="colorTouchEnd()"></color-picker>\n</ion-content>\n\n'/*ion-inline-end:"/Users/antoinebonnet/myApp/src/pages/report/report.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ReportPage);
    return ReportPage;
}());

//# sourceMappingURL=report.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.modules = {
            module1: {
                colorValue: '#FFAA00',
                rgb: {
                    r: 0,
                    g: 0,
                    b: 0
                },
                brightness: 50
            },
            module2: {
                colorValue: '#FFAA00',
                rgb: {
                    r: 0,
                    g: 0,
                    b: 0
                },
                brightness: 50
            },
            module3: {
                colorValue: '#FF0000',
                rgb: {
                    r: 0,
                    g: 0,
                    b: 0
                },
                brightness: 50
            },
            allmodules: {
                colorValue: '#FF0000',
                rgb: {
                    r: 0,
                    g: 0,
                    b: 0
                },
                brightness: 50
            }
        };
        this.moduleSelected = 'module1';
        this.colorvalue = '#FF0000';
        this.r = 255;
        this.g = 0;
        this.b = 0;
        this.brightness = 50;
    }
    HomePage.prototype.setColor = function (event) {
        this.modules[this.moduleSelected].colorValue = event;
        this.hexToRgb(event);
    };
    HomePage.prototype.colorTouchStart = function () {
    };
    HomePage.prototype.colorTouchEnd = function () {
    };
    HomePage.prototype.hexToRgb = function (value) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value);
        this.modules[this.moduleSelected].rgb.r = parseInt(result[1], 16);
        this.modules[this.moduleSelected].rgb.g = parseInt(result[2], 16);
        this.modules[this.moduleSelected].rgb.b = parseInt(result[3], 16);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/antoinebonnet/myApp/src/pages/home/home.html"*/'<ion-header>\n  <!-- <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar> -->\n  <ion-toolbar>\n    <ion-segment [(ngModel)]="moduleSelected" color="primary">\n      <ion-segment-button value="module1">\n        Module 1\n      </ion-segment-button>\n      <ion-segment-button value="module2">\n        Module 2\n      </ion-segment-button>\n      <ion-segment-button value="module3">\n        Module 3\n      </ion-segment-button>\n      <ion-segment-button value="allmodules">\n        All modules\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding >\n  <ion-card>\n    <ion-card-header>\n      Color\n    </ion-card-header>\n    <ion-card-content>\n      <span [ngSwitch]="moduleSelected">\n          <color-picker *ngSwitchCase="\'module1\'" [(hexColor)]="modules[moduleSelected].colorValue" (colorChanged)="setColor($event)" (colorTouchStart)="colorTouchStart()"\n          (colorTouchEnd)="colorTouchEnd()"></color-picker>\n          <color-picker *ngSwitchCase="\'module2\'" [(hexColor)]="modules[moduleSelected].colorValue" (colorChanged)="setColor($event)" (colorTouchStart)="colorTouchStart()"\n          (colorTouchEnd)="colorTouchEnd()"></color-picker>\n          <color-picker *ngSwitchCase="\'module3\'" [(hexColor)]="modules[moduleSelected].colorValue" (colorChanged)="setColor($event)" (colorTouchStart)="colorTouchStart()"\n          (colorTouchEnd)="colorTouchEnd()"></color-picker>\n      </span>\n      \n\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label stacked>R</ion-label>\n              <ion-input type="text" [(ngModel)]="modules[moduleSelected].rgb.r"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label stacked>G</ion-label>\n              <ion-input type="text" [(ngModel)]="modules[moduleSelected].rgb.g"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label stacked>B</ion-label>\n              <ion-input type="text" [(ngModel)]="modules[moduleSelected].rgb.b"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label stacked>Hex</ion-label>\n              <ion-input type="text" [(ngModel)]="modules[moduleSelected].colorValue"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n        <ion-item>\n            <ion-icon name="brightness"></ion-icon>\n            Brightness\n            <ion-badge item-end>{{modules[moduleSelected].brightness}}</ion-badge>\n          </ion-item>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-range min="0" max="100" step="1" [(ngModel)]="modules[moduleSelected].brightness">\n        <ion-icon small range-left name="sunny"></ion-icon>\n        <ion-icon range-right name="sunny"></ion-icon>\n      </ion-range>\n    </ion-card-content>\n\n  </ion-card>\n  <ion-grid>\n      <ion-row>\n        <ion-col>\n            <ion-card>\n                <ion-card-header>\n                  Animations\n                </ion-card-header>\n            \n                <ion-card-content>\n                  <ion-segment [(ngModel)]="animation" color="primary" (ionChange)="segmentChanged($event)">\n                    <ion-segment-button value="blinking">\n                      Blinking\n                    </ion-segment-button>\n                    <ion-segment-button value="chase">\n                      Chase\n                    </ion-segment-button>\n                    <ion-segment-button value="progressive">\n                      Progressive\n                    </ion-segment-button>\n                  </ion-segment>\n                </ion-card-content>\n            \n              </ion-card>\n        </ion-col>\n        <ion-col>\n            <ion-card>\n                <ion-card-header>\n                 Number of leds\n                </ion-card-header>\n            \n                <ion-card-content>\n                  <ion-segment [(ngModel)]="numberleds" color="primary" (ionChange)="segmentChanged($event)">\n                    <ion-segment-button value="allleds">\n                      All leds\n                    </ion-segment-button>\n                    <ion-segment-button value="halfleds">\n                      1/2 led\n                    </ion-segment-button>\n                  </ion-segment>\n                </ion-card-content>\n            \n              </ion-card>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/antoinebonnet/myApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object])
    ], HomePage);
    return HomePage;
    var _a;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_report_report__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_color_picker__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__components_color_picker__["a" /* ColorPicker */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__components_color_picker__["a" /* ColorPicker */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/antoinebonnet/myApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/antoinebonnet/myApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorPicker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var POUCH = [
    {
        START: "mousedown",
        MOVE: "mousemove",
        STOP: "mouseup"
    },
    {
        START: "touchstart",
        MOVE: "touchmove",
        STOP: "touchend"
    }
];
var ColorPicker = /** @class */ (function () {
    function ColorPicker() {
        this.colorChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.colorTouchStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.colorTouchEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ColorPicker.prototype.ngOnInit = function () {
        if (this.hexColor) {
            this.colorFromChooser = this.hexColor;
        }
        else {
            this.colorFromChooser = "#0000FF";
        }
        this.init();
    };
    ColorPicker.prototype.init = function () {
        this.initChooser();
        this.initPalette();
    };
    ColorPicker.prototype.drawSelector = function (ctx, x, y) {
        this.drawPalette(this.colorFromChooser);
        ctx.beginPath();
        ctx.arc(x, y, 10 * this.getPixelRatio(ctx), 0, 2 * Math.PI, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#FFFFFF';
        ctx.stroke();
    };
    ColorPicker.prototype.drawChooserSelector = function (ctx, x) {
        this.drawPalette(this.colorFromChooser);
        ctx.beginPath();
        ctx.arc(x, ctx.canvas.height / 2, ctx.canvas.height / 2, 0, 2 * Math.PI, false);
        ctx.fillStyle = this.colorFromChooser;
        ctx.fill();
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#FFFFFF';
        ctx.stroke();
    };
    ColorPicker.prototype.initPalette = function () {
        var _this = this;
        var canvasPalette = this.palette.nativeElement;
        this.ctxPalette = canvasPalette.getContext("2d");
        var currentWidth = window.innerWidth;
        var pixelRatio = this.getPixelRatio(this.ctxPalette);
        console.log(pixelRatio);
        var width = currentWidth * 90 / 100;
        var height = width * 0.5;
        this.ctxPalette.canvas.width = width * pixelRatio;
        this.ctxPalette.canvas.height = height * pixelRatio;
        this.ctxPalette.canvas.style.width = width + "px";
        this.ctxPalette.canvas.style.height = height + "px";
        this.drawPalette(this.colorFromChooser);
        var eventChangeColor = function (event) {
            _this.updateColor(event, canvasPalette, _this.ctxPalette);
        };
        POUCH.forEach(function (pouch) {
            canvasPalette.addEventListener(pouch.START, function (event) {
                _this.colorTouchStart.emit();
                _this.drawPalette(_this.colorFromChooser);
                canvasPalette.addEventListener(pouch.MOVE, eventChangeColor);
                _this.updateColor(event, canvasPalette, _this.ctxPalette);
            });
            canvasPalette.addEventListener(pouch.STOP, function (event) {
                _this.colorTouchEnd.emit();
                canvasPalette.removeEventListener(pouch.MOVE, eventChangeColor);
                _this.updateColor(event, canvasPalette, _this.ctxPalette);
                _this.drawSelector(_this.ctxPalette, _this.paletteX, _this.paletteY);
            });
        });
    };
    ColorPicker.prototype.drawPalette = function (endColor) {
        this.ctxPalette.clearRect(0, 0, this.ctxPalette.canvas.width, this.ctxPalette.canvas.height);
        var gradient = this.ctxPalette.createLinearGradient(0, 0, this.ctxPalette.canvas.width, 0);
        // Create color gradient
        gradient.addColorStop(0, "#FFFFFF");
        gradient.addColorStop(1, endColor);
        // Apply gradient to canvas
        this.ctxPalette.fillStyle = gradient;
        this.ctxPalette.fillRect(0, 0, this.ctxPalette.canvas.width, this.ctxPalette.canvas.height);
        // Create semi transparent gradient (white -> trans. -> black)
        gradient = this.ctxPalette.createLinearGradient(0, 0, 0, this.ctxPalette.canvas.height);
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.5, "rgba(255, 255, 255, 0)");
        gradient.addColorStop(0.5, "rgba(0,     0,   0, 0)");
        gradient.addColorStop(1, "rgba(0,     0,   0, 1)");
        // Apply gradient to canvas
        this.ctxPalette.fillStyle = gradient;
        this.ctxPalette.fillRect(0, 0, this.ctxPalette.canvas.width, this.ctxPalette.canvas.height);
    };
    ColorPicker.prototype.initChooser = function () {
        var _this = this;
        var canvasChooser = this.chooser.nativeElement;
        var ctx = canvasChooser.getContext("2d");
        var currentWidth = window.innerWidth;
        var pixelRatio = this.getPixelRatio(ctx);
        var width = currentWidth * 90 / 100;
        var height = width * 0.05;
        ctx.canvas.width = width * pixelRatio;
        ctx.canvas.height = height * pixelRatio;
        ctx.canvas.style.width = width + "px";
        ctx.canvas.style.height = height + "px";
        this.drawChooser(ctx);
        var eventChangeColorChooser = function (event) {
            _this.updateColorChooser(event, canvasChooser, ctx);
            _this.drawSelector(_this.ctxPalette, _this.ctxPalette.canvas.width, _this.ctxPalette.canvas.height / 2);
        };
        POUCH.forEach(function (pouch) {
            canvasChooser.addEventListener(pouch.START, function (event) {
                _this.drawChooser(ctx);
                canvasChooser.addEventListener(pouch.MOVE, eventChangeColorChooser);
                _this.updateColorChooser(event, canvasChooser, ctx);
                _this.drawSelector(_this.ctxPalette, _this.ctxPalette.canvas.width, _this.ctxPalette.canvas.height / 2);
            });
            canvasChooser.addEventListener(pouch.STOP, function (event) {
                canvasChooser.removeEventListener(pouch.MOVE, eventChangeColorChooser);
                _this.updateColorChooser(event, canvasChooser, ctx);
                _this.drawChooser(ctx);
                _this.drawChooserSelector(ctx, _this.chooserX);
                _this.drawSelector(_this.ctxPalette, _this.ctxPalette.canvas.width, _this.ctxPalette.canvas.height / 2);
            });
        });
    };
    ColorPicker.prototype.drawChooser = function (ctx) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        var gradient = ctx.createLinearGradient(0, 0, ctx.canvas.width, 0);
        // Create color gradient
        gradient.addColorStop(0, "rgb(255,   0,   0)");
        gradient.addColorStop(0.15, "rgb(255,   0, 255)");
        gradient.addColorStop(0.33, "rgb(0,     0, 255)");
        gradient.addColorStop(0.49, "rgb(0,   255, 255)");
        gradient.addColorStop(0.67, "rgb(0,   255,   0)");
        gradient.addColorStop(0.84, "rgb(255, 255,   0)");
        gradient.addColorStop(1, "rgb(255,   0,   0)");
        // Apply gradient to canvas
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    };
    ColorPicker.prototype.getPixelRatio = function (ctx) {
        var dpr = window.devicePixelRatio || 1;
        var bsr = ctx.webkitBackingStorePixelRatio ||
            ctx.mozBackingStorePixelRatio ||
            ctx.msBackingStorePixelRatio ||
            ctx.oBackingStorePixelRatio ||
            ctx.backingStorePixelRatio || 1;
        return dpr / bsr;
    };
    ColorPicker.prototype.updateColorChooser = function (event, canvas, context) {
        this.color = this.colorFromChooser = this.getColor(event, canvas, context, true);
        this.colorChanged.emit(this.color);
        this.drawPalette(this.color);
    };
    ColorPicker.prototype.updateColor = function (event, canvas, context) {
        this.color = this.getColor(event, canvas, context, false);
        this.colorChanged.emit(this.color);
    };
    ColorPicker.prototype.getColor = function (event, canvas, context, fromChooser) {
        var bounding = canvas.getBoundingClientRect(), touchX = event.pageX || event.changedTouches[0].pageX || event.changedTouches[0].screenX, touchY = event.pageY || event.changedTouches[0].pageY || event.changedTouches[0].screenX;
        var x = (touchX - bounding.left) * this.getPixelRatio(context);
        var y = (touchY - bounding.top) * this.getPixelRatio(context);
        if (fromChooser) {
            this.chooserX = x;
        }
        else {
            this.paletteX = x;
            this.paletteY = y;
        }
        var imageData = context.getImageData(x, y, 1, 1);
        var red = imageData.data[0];
        var green = imageData.data[1];
        var blue = imageData.data[2];
        return "#" + this.toHex(red) + this.toHex(green) + this.toHex(blue);
    };
    ColorPicker.prototype.toHex = function (n) {
        n = parseInt(n, 10);
        if (isNaN(n))
            return "00";
        n = Math.max(0, Math.min(n, 255));
        return "0123456789ABCDEF".charAt((n - n % 16) / 16) + "0123456789ABCDEF".charAt(n % 16);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ColorPicker.prototype, "hexColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], ColorPicker.prototype, "colorChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], ColorPicker.prototype, "colorTouchStart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], ColorPicker.prototype, "colorTouchEnd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("palette"),
        __metadata("design:type", Object)
    ], ColorPicker.prototype, "palette", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("chooser"),
        __metadata("design:type", Object)
    ], ColorPicker.prototype, "chooser", void 0);
    ColorPicker = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'color-picker',
            template: " <canvas #palette style=\"background:white;\" class='center'></canvas>\n  <canvas #chooser style=\"background:white; margin-top: 20px; margin-bottom: 20px; \" class='center'></canvas>"
        })
    ], ColorPicker);
    return ColorPicker;
}());

//# sourceMappingURL=color-picker.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map