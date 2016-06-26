import { Component } from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {DocumentComponent} from './components/document/document.component';
import {BatchComponent} from './components/batch/batch.component';

@Component({
	selector: 'app',
	providers: [],
	pipes: [],
	directives: [ROUTER_DIRECTIVES],
	templateUrl: 'app/seed-app.html'
})
@Routes([
  { path: '/',         component: HomeComponent },
  { path: '/document', component: DocumentComponent },
  { path: '/batch',    component: BatchComponent }
])

export class SeedApp {
	constructor() {}
}