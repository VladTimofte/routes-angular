import { Routes } from '@angular/router';
import { AngajatiComponent } from './components/angajati/angajati.component';
import { BugeteComponent } from './components/bugete/bugete.component';
import { ResurseComponent } from './components/resurse/resurse.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'angajati', component: AngajatiComponent},
  {path: 'bugete', component: BugeteComponent},
  {path: 'resurse', component: ResurseComponent},
  {path: '**', component: NotFoundComponent}
  ];
