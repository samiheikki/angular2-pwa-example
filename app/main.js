"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
var service = [
    http_1.HTTP_PROVIDERS
];
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, service);
//# sourceMappingURL=main.js.map