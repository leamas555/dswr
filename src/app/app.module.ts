import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { SeedApp } from './seed-app';
import { appRouterConfig } from './route-definitions';

@NgModule({
	declarations: [SeedApp],
	imports:      [
					BrowserModule,
					// Router
					RouterModule.forRoot(appRouterConfig),
				  ],
	bootstrap:    [SeedApp],
})

export class AppModule {}