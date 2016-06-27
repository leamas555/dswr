"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* importing OnInit is not mandatory but good practice*/
var core_1 = require('@angular/core');
var document_service_1 = require('../../services/document/document.service');
var DocumentListComponent = (function () {
    function DocumentListComponent(documentService) {
        this.documentService = documentService;
    }
    /*Initialize*/
    DocumentListComponent.prototype.ngOnInit = function () {
        this.getDocumentList();
    };
    /* get the list of documents */
    DocumentListComponent.prototype.getDocumentList = function () {
        var _this = this;
        this.documentService.getDocumentList().then(function (listOfDocuments) { return _this.listOfDocuments = listOfDocuments; });
    };
    DocumentListComponent = __decorate([
        core_1.Component({
            selector: 'document-list',
            templateUrl: 'app/components/document/document-list.html',
            providers: [document_service_1.DocumentService]
        }), 
        __metadata('design:paramtypes', [document_service_1.DocumentService])
    ], DocumentListComponent);
    return DocumentListComponent;
}());
exports.DocumentListComponent = DocumentListComponent;
//# sourceMappingURL=document-list.component.js.map