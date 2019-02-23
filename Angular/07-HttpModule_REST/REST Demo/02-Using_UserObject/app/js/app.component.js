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
var firebase_service_1 = require("./firebase.service");
var User_1 = require("./User");
var AppComponent = (function () {
    function AppComponent(_firsbaseService) {
        this._firsbaseService = _firsbaseService;
        this.user = new User_1.User();
        //this.user.firstName="a";
        //this.user.lastName="b";
    }
    AppComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.user);
        this._firsbaseService
            .setUser(this.user)
            .subscribe(function (user) { return _this.response = JSON.stringify(user); }, function (error) { return console.log(error); });
    };
    AppComponent.prototype.onGetUser = function () {
        var _this = this;
        this._firsbaseService
            .getUser()
            .subscribe(function (user) { return _this.user = user; }, function (error) { return console.log(error); });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/partials/app.html',
            providers: [firebase_service_1.FirebaseService]
        }), 
        __metadata('design:paramtypes', [firebase_service_1.FirebaseService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map