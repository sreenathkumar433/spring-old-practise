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
var core_1 = require("@angular/core");
var product_1 = require("../models/product");
var product_service_1 = require("../services/product.service");
var router_1 = require("@angular/router");
var ProductAddComponent = (function () {
    function ProductAddComponent(pService, router) {
        this.pService = pService;
        this.router = router;
        this.product = new product_1.Product();
    }
    ProductAddComponent.prototype.add = function () {
        var _this = this;
        this.pService.addProduct(this.product)
            .subscribe(function (res) {
            console.log("added product is " + JSON.stringify(res));
            _this.router.navigate(['/home']);
        }, function (ex) { console.log(ex); });
        this.product = new product_1.Product();
    };
    ProductAddComponent = __decorate([
        core_1.Component({
            selector: 'add-product',
            templateUrl: 'app/partials/add-product.html'
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, router_1.Router])
    ], ProductAddComponent);
    return ProductAddComponent;
}());
exports.ProductAddComponent = ProductAddComponent;
//# sourceMappingURL=product-add.component.js.map