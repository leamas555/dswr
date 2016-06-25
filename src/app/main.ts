import { bootstrap } from '@angular/platform-browser-dynamic';

import { SeedApp } from './seed-app';

// enableProdMode()

bootstrap(SeedApp)
.then(
    success => console.log('SeedApp bootstrapped!'),
    error => console.log(error)
);;