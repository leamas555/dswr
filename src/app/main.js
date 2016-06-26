"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_1 = require('@angular/router');
var seed_app_1 = require('./seed-app');
// enableProdMode()
platform_browser_dynamic_1.bootstrap(seed_app_1.SeedApp, [
    router_1.ROUTER_PROVIDERS
])
    .then(function (success) { return console.log('SeedApp bootstrapped!'); }, function (error) { return console.log(error); });
//# sourceMappingURL=main.js.map