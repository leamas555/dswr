import {Injectable} from '@angular/core';

import {DOCUMENTS} from './mock-documents-list';

@Injectable()
export class DocumentService{
	getDocumentList() {
		return Promise.resolve(DOCUMENTS);
	}
}