"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var card_1 = require('@angular2-material/card');
var button_1 = require('@angular2-material/button');
var toolbar_1 = require('@angular2-material/toolbar');
var sidenav_1 = require('@angular2-material/sidenav');
var list_1 = require('@angular2-material/list');
var icon_1 = require('@angular2-material/icon');
var APP_MD_DIRECTIVES = [
    card_1.MD_CARD_DIRECTIVES,
    button_1.MD_BUTTON_DIRECTIVES,
    toolbar_1.MD_TOOLBAR_DIRECTIVES,
    sidenav_1.MD_SIDENAV_DIRECTIVES,
    list_1.MD_LIST_DIRECTIVES,
    icon_1.MD_ICON_DIRECTIVES
];
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        this.setupPushNotifications();
        //this.syncData();
    };
    AppComponent.prototype.syncData = function () {
        /*let hasPendingRequest = true;
        let that = this;

        this.bookingervice.sync().then((b: Booking[]) => {
            hasPendingRequest = false;
            that.bookings = b;
            that.changeDetectionRef.detectChanges();
        });

        this.bookingervice.fetchLocal().then((b: BookingsDoc) => {
            if (!hasPendingRequest) return;
            if (!b) return;
            that.bookings = b.bookings;
            that.changeDetectionRef.detectChanges();
        });*/
    };
    AppComponent.prototype.requestUpload = function () {
        /*let nav:any = navigator;

        if ('serviceWorker' in nav && 'SyncManager' in window) {
            nav.serviceWorker
                .ready
                .then(reg => {
                    return reg.sync.register('upload');
                })
                .catch(_ => {
                  console.log("upload");
                    //return this.bookingervice.upload();
                });
        }
        else {
          console.log("upload");
        }*/
    };
    AppComponent.prototype.setupPushNotifications = function () {
        /*let nav:any = navigator;

        if ('serviceWorker' in navigator) {
            console.log('Service Worker is supported');
            nav.serviceWorker.ready.then(function(reg) {
                reg.pushManager.subscribe({
                    userVisibleOnly: true
                }).then(function(sub) {
                    console.log('endpoint:', sub.endpoint);
                });
            }).catch(function(error) {
                console.log('Error:', error);
            });
        }*/
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css', 'node_modules/bootstrap/dist/css/bootstrap.css'],
            directives: [APP_MD_DIRECTIVES],
            providers: [icon_1.MdIconRegistry]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map