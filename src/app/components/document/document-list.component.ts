/* importing OnInit is not mandatory but good practice*/
import { Component, OnInit } from '@angular/core';

import { Document } from '../../model/document/';
import { DocumentService } from '../../services/document/document.service';

@Component({
	selector: 'document-list',
	templateUrl: 'app/components/document/document-list.html',
	providers: [DocumentService]
})

export class DocumentListComponent implements OnInit {

	listOfDocuments: Document[];

	constructor(private documentService: DocumentService) {}

	/*Initialize*/
	ngOnInit() {
		this.getDocumentList();
	}
	
	/* get the list of documents */
	getDocumentList() {
		this.documentService.getDocumentList().then(listOfDocuments => this.listOfDocuments = listOfDocuments);
	}
}