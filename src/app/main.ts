import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from './app.module';

// enableProdMode()

platformBrowserDynamic().bootstrapModule(AppModule)
 .then(
     success => console.log('SeedApp bootstrapped!'),
     error => console.log(error)
 );