import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } 	 from './components/home/home.component';
import { DocumentComponent } from './components/document/document.component';
import { BatchComponent }    from './components/batch/batch.component';


const appRoutes: Routes = [
	{ path: '', redirectTo: 'home', terminal: true },
	{ path: 'home', component: HomeComponent },
	{ path: 'document', component: DocumentComponent },
    { path: 'batch', component: BatchComponent }
]

export const appRouterConfig = RouterModule.forRoot(appRoutes);
