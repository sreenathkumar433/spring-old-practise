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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var product_list_component_1 = require("./product-list.component");
var product_add_component_1 = require("./product-add.component");
var forms_1 = require("@angular/forms");
var product_service_1 = require("./product.service");
var app_routing_1 = require("./app.routing");
var home_component_1 = require("./home.component");
var product_detail_component_1 = require("./product-detail.component");
var product_overview_component_1 = require("./product-overview.component");
var specs_component_1 = require("./specs.component");
var product_info_component_1 = require("./product-info.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                product_list_component_1.ProductListComponent,
                product_add_component_1.ProductAddComponent,
                home_component_1.HomeComponent,
                product_detail_component_1.ProductDetailComponent,
                product_overview_component_1.ProductOverviewComponent,
                specs_component_1.ProductSpecComponent,
                product_info_component_1.ProductInfoComponent
            ],
            providers: [
                product_service_1.ProductService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map