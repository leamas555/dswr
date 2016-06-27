import { Component } from '@angular/core';

import { DocumentListComponent } from '../document/document-list.component';

@Component({
	selector: 'home',
	templateUrl: 'app/components/home/home.component.html',
	directives: [DocumentListComponent],
	providers: [],
	pipes: []
})

export class HomeComponent{

	constructor() {}
	
	ngOnInit() {
		console.log("creating the home INIT");
	}
}