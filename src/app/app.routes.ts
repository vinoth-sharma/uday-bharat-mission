import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Projects } from './projects/projects';
import { About } from './about/about';

export const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: Home },
	{ path: 'projects', component: Projects },
	{ path: 'about', component: About },
	{ path: 'contact', component: Contact },
	{ path: '**', redirectTo: 'home' },
];
