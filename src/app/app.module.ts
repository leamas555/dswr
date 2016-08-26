import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SeedApp } from './seed-app';
import { HomeComponent } from './components/home/home.component';
import { DocumentComponent } from './components/document/document.component';
import { BatchComponent } from './components/batch/batch.component';
import { appRouterConfig } from './route-definitions';

@NgModule({
	declarations: [SeedApp, HomeComponent, DocumentComponent, BatchComponent],
	imports:      [BrowserModule, appRouterConfig],
	bootstrap:    [SeedApp],
})

export class AppModule {}