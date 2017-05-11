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
var http_1 = require("@angular/http");
var shared_module_1 = require("./shared/shared.module");
var admin_module_1 = require("./admin/admin.module");
var routing_module_1 = require("./routing.module");
var game_module_1 = require("./games/game.module");
var global_module_1 = require("./global/global.module");
var application_component_1 = require("./application/application.component");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var game_service_1 = require("./services/game-service/game-service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            shared_module_1.SharedModule,
            http_1.HttpModule,
            admin_module_1.AdminModule,
            routing_module_1.AppRoutingModule,
            global_module_1.GlobalModule,
            game_module_1.GameModule
        ],
        declarations: [
            application_component_1.default,
            home_component_1.default,
            about_component_1.default
        ],
        providers: [game_service_1.GameService, { provide: "IS_VERBOSE_LOGGER", useValue: true }],
        bootstrap: [application_component_1.default]
    })
], AppModule);
exports.default = AppModule;
