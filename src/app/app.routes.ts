import { Routes } from '@angular/router';
import { HomeComponent } from './features/components/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./features/components/home/home.component').then((m) => m.HomeComponent),
    // component: HomeComponent,
  },
  {
    path: 'movies',
    loadComponent: () =>
      import('./features/components/movies/movies.component').then((m) => m.MoviesComponent),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
