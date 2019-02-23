"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var app_routes_1 = require("./app.routes");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var home_component_1 = require("./components/home.component");
var login_component_1 = require("./components/login.component");
var about_component_1 = require("./components/about.component");
var login_info_component_1 = require("./components/login-info.component");
var Auth_Service_1 = require("./services/Auth.Service");
var auth_guard_1 = require("./services/auth.guard");
var router_1 = require("@angular/router");
var lowercase_urlserializer_1 = require("./lowercase.urlserializer");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routes_1.AppRoutes,
            forms_1.FormsModule,
            http_1.HttpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            login_component_1.LoginComponent,
            about_component_1.AboutComponent,
            login_info_component_1.LoginInfoComponent
        ],
        providers: [
            {
                provide: router_1.UrlSerializer,
                useClass: lowercase_urlserializer_1.LowerCaseUrlSerializer
            },
            Auth_Service_1.AuthService,
            auth_guard_1.AuthGuard
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map