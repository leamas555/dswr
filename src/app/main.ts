import { bootstrap } from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router';

import { SeedApp } from './seed-app';

// enableProdMode()

bootstrap(SeedApp,[
  ROUTER_PROVIDERS
])
.then(
    success => console.log('SeedApp bootstrapped!'),
    error => console.log(error)
);