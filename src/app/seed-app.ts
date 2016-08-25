import { Component } from '@angular/core';

import {HomeComponent} from './components/home/home.component';
import {DocumentComponent} from './components/document/document.component';
import {BatchComponent} from './components/batch/batch.component';

@Component({
	selector: 'app',
	providers: [],
	pipes: [],
	templateUrl: 'app/seed-app.html'
})

export class SeedApp {
	constructor() {}
}