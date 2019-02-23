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
var actor_item_component_1 = require('./actor-item.component');
var actor_details_component_1 = require('./actor-details.component');
var search_pipe_1 = require('./search.pipe');
var AppComponent = (function () {
    function AppComponent() {
        this.actors = ACTORS;
    }
    AppComponent.prototype.showDetails = function (actor) {
        console.log(actor);
        this.currentActor = actor;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/partials/app.html',
            styleUrls: ['app/css/app.css'],
            directives: [actor_item_component_1.ActorItemComponent, actor_details_component_1.ActorDetailsComponent],
            pipes: [search_pipe_1.SearchPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var ACTORS = [
    {
        name: 'Amitab Batchan',
        shortname: 'bigb',
        bio: 'The Big B of bollywood,acted over 100 films',
        awards: 'Padma Vibushan'
    },
    {
        name: 'Rajnikanth',
        shortname: 'rajni',
        bio: 'Superstar of kollywood, best known for his stylish acting',
        awards: 'Padma Vibushan'
    },
    {
        name: 'Hema malini',
        shortname: 'hema',
        bio: 'Dream Girl of bollywood, MP in Rajya sabha',
        awards: 'Padma Shri'
    },
    {
        name: 'Kamal Hassan',
        shortname: 'kamal',
        bio: 'Best known for his name Ulaganayagan, actor, director, singer and dancer',
        awards: 'Padma Bhushan'
    },
    {
        name: 'Sharukh Khan',
        shortname: 'srk',
        bio: 'One of the most paid actor in bollywood',
        awards: 'Film fare winner (14 times)'
    },
    {
        name: 'Akshay Kumar',
        shortname: 'akshay',
        bio: 'Action hero of bollywood, most paid actor',
        awards: 'Padma Shri'
    }
];
//# sourceMappingURL=app.component.js.map